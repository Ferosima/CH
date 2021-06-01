import React from 'react';
import {
  RefreshControl,
  FlatList,
  Text,
  TouchableOpacity,
  View,
  Modal,
  ActivityIndicator,
} from 'react-native';
import {Icon} from 'react-native-elements';
import {ScrollView} from 'react-native-gesture-handler';
import {connect} from 'react-redux';
import {compose} from 'redux';
import moment from 'moment';
import {
  Neomorph,
  Shadow,
  ShadowFlex,
  NeomorphFlex,
} from 'react-native-neomorph-shadows';
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
import {TextIcon} from '../../components/TextIcon';

class Conferences extends React.Component {
  state = {
    search: null,
    filter: null,
    modalVisible: false,
    indexItem: null,
    time: moment().format('HH:mm'),
  };

  componentDidMount() {
    this.props.fetchEvents();
    this.props.fetchCalendar();
    this.timer = setInterval(() => {
      this.setState({time: moment().format('HH:mm')});
    }, 1000);
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
        moment(event.time_begin.toDate()) >=
          moment().startOf('isoweek').toDate() &&
        moment(event.time_end.toDate()) <= moment().endOf('isoweek').toDate(),
    );
    return length;
  };

  renderHeader = () => {
    const countEventOnWeek = this.countEventOnWeek();
    return (
      <>
        <View style={style.headerWrapper}>
          <TextIcon
            text={this.state.time}
            textStyle={style.timeText}
            iconName="clock"
            iconColor={'#273B56'}
            iconType="feather"
            iconSize={18}
            containerStyle={{alignSelf: 'flex-end', paddingHorizontal: 10}}
          />
          <View style={style.headerTextContainer}>
            <Text
              style={
                style.headerSubtitle
              }>{`Hello, ${this.props.user.user.first_name}`}</Text>
            <Text style={style.headerTitle}>Find Events for Yourself</Text>
          </View>
          <NeomorphFlex
            inner // <- enable inner shadow
            // darkShadowColor="#D9DADC" // <- set this
            lightShadowColor="#F7F8FA"
            style={style.countEventsWrapper}>
            <Text style={style.countEventsText}>
              {countEventOnWeek
                ? countEventOnWeek > 1
                  ? ` You have ${this.countEventOnWeek()} events in this week`
                  : `You have one event in this week`
                : "You don't have events on this week"}
            </Text>
            <NeomorphFlex style={style.countEventsButton}>
              <TouchableOpacity
                // style={style.countEventsButton}
                onPress={this.navigate('Calendar')}>
                <Text style={style.countEventsButtonText}>Go to calendar</Text>
              </TouchableOpacity>
            </NeomorphFlex>
          </NeomorphFlex>
        </View>
      </>
    );
  };

  renderItemEvent = ({item, index}) => {
    const {calendar} = this.props;
    const indexCalendar = calendar.list.findIndex(
      (elem) => elem.id_event == item.id,
    );
    return (
      <View key={index} style={style.itemListWrapper}>
        <EventItem
          data={item}
          onPress={this.onPressItem(item.id)}
          calendarID={
            indexCalendar !== -1 ? calendar.list[indexCalendar].id : null
          }
        />
      </View>
    );
  };

  renderEventList = () => {
    const {events} = this.props;
    return (
      <FlatList
        contentContainerStyle={style.wrapperContentStyle}
        // refreshing={events.pending}
        // onRefresh={this.props.fetchEvents}
        data={events.list}
        renderItem={this.renderItemEvent}
        keyExtractor={(item) => item.id}
        ListEmptyComponent={this.renderEmpty}
      />
    );
  };

  renderEmpty = () => {
    return (
      <View style={style.emptyWrapper}>
        {this.props.events.pending ? (
          <>
            <ActivityIndicator size="small" color={'#486FFE'} />
            <Text style={style.textStyle}>{'Loading'}</Text>
          </>
        ) : (
          <Text style={[style.textStyle]}>{'Haven`t events'}</Text>
        )}
      </View>
    );
  };

  render() {
    const {modalVisible} = this.state;
    return (
      <>
        <Modal
          animationType="fade"
          transparent
          visible={modalVisible}
          onRequestClose={this.onPressBlur}>
          <ItemInfo
            data={this.props.events.list.find(
              (el) => this.state.indexItem == el.id,
            )}
            onPressBlur={this.onPressBlur}
          />
        </Modal>
        <ScrollView
          style={style.wrapper}
          contentContainerStyle={style.wrapperContentStyle}
          stickyHeaderIndices={[1]}
          refreshControl={
            <RefreshControl
              refreshing={this.props.events.pending}
              onRefresh={this.props.fetchEvents}
            />
          }>
          {this.renderHeader()}
          <FilterSeachBar
            contentContainerStyle={{
              backgroundColor: 'white',
              marginBottom: 10,
            }}
          />
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
