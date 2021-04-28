import React from 'react';
import {FlatList, Text, TouchableOpacity, View, Modal} from 'react-native';
import {Icon} from 'react-native-elements';
import {ScrollView} from 'react-native-gesture-handler';
import {connect} from 'react-redux';
import {compose} from 'redux';
import moment from 'moment';
import {EventItem} from '../../components/EventItem';
import {colors} from '../../const/colors';
import {fetchEvents} from '../../store/actions/events';
import {fetchCalendar} from '../../store/actions/calendar';
import {getEventsState} from '../../store/selectors/events';
import {getCalendarState} from '../../store/selectors/calendar';
import style from './style';
import ItemInfo from '../../components/ItemInfo';
import {FilterSeachBar} from '../../components/FilterSearchBar';
import {getUserState} from '../../store/selectors/user';
import {
  dateToDay,
  dateToTimestamp,
  timestampToDate,
} from '../../const/functions/time';

class Conferences extends React.Component {
  state = {
    search: null,
    filter: null,
    modalVisible: false,
    indexItem: null,
  };

  componentDidMount() {
    this.props.fetchEvents();
    this.props.fetchCalendar();
  }

  setModalVisible = (visible) => {
    this.setState({modalVisible: visible});
  };

  onPressItem = (index) => () => {
    this.setModalVisible(true);
    this.setState({indexItem: index});
  };

  onPressBlur = () => {
    this.setModalVisible(false);
    this.setState({indexItem: null});
  };

  navigate = (screen) => () => {
    this.props.navigation.navigate(screen);
  };

  countEventOnWeek = () => {
    const {length} = this.props.calendar.list.filter(
      (event) =>
        moment(event.time_begin).toDate() >=
          moment().startOf('isoweek').toDate() &&
        moment(event.time_end).toDate() <= moment().endOf('isoweek').toDate(),
    );
    return length;
  };

  renderHeader = () => {
    const countEventOnWeek = this.countEventOnWeek();
    return (
      <>
        <View style={style.headerWrapper}>
          <View style={{paddingVertical: 20}}></View>
          <View style={style.headerTextContainer}>
            <Text
              style={
                style.headerSubtitle
              }>{`Hello, ${this.props.user.first_name}`}</Text>
            <Text style={style.headerTitle}>Find Events for Yourself</Text>
          </View>
          <View style={style.countEventsWrapper}>
            <Text style={style.countEventsText}>
              {countEventOnWeek
                ? countEventOnWeek > 1
                  ? ` You have ${this.countEventOnWeek()} events in this week`
                  : `You have one event in this week`
                : "You don't have events on this week"}
            </Text>
            <TouchableOpacity
              style={style.countEventsButton}
              onPress={this.navigate('Calendar')}>
              <Text style={style.countEventsButtonText}>Go to calendar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </>
    );
  };

  renderItemEvent = (item, index) => {
    const {calendar} = this.props;
    const indexCalendar = calendar.list.findIndex(
      (elem) => elem.id_event == item.id,
    );
    return (
      <View style={style.itemListWrapper} key={index}>
        <EventItem
          data={item}
          onPress={this.onPressItem(index)}
          calendarID={
            indexCalendar !== -1 ? calendar.list[indexCalendar].id : null
          }
        />
      </View>
    );
  };

  renderEventList = () => {
    const {events} = this.props;
    return events.list.map(this.renderItemEvent);
  };

  render() {
    const {modalVisible} = this.state;
    console.log(this.props.user);
    return (
      <>
        <Modal animationType="fade" transparent visible={modalVisible}>
          <ItemInfo
            data={this.props.events.list[this.state.indexItem]}
            onPressBlur={this.onPressBlur}
          />
        </Modal>
        <ScrollView
          style={style.wrapper}
          contentContainerStyle={style.wrapperContentStyle}
          stickyHeaderIndices={[1]}>
          {this.renderHeader()}
          <FilterSeachBar />
          {this.renderEventList()}
        </ScrollView>
      </>
    );
  }
}
const mapStateToProps = (state) => ({
  events: getEventsState(state),
  calendar: getCalendarState(state),
  user: getUserState(state),
});

const mapDispatchToProps = {
  fetchEvents,
  fetchCalendar,
};
const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(withConnect)(Conferences);
