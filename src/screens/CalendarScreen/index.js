import React from 'react';
import {FlatList, Text, TouchableOpacity, View, Modal} from 'react-native';
import {Icon} from 'react-native-elements';
import {ScrollView} from 'react-native-gesture-handler';
import {connect} from 'react-redux';
import {compose} from 'redux';
import CalendarStrip from 'react-native-calendar-strip';
import moment from 'moment';
import CalendarEventItem from '../../components/CalendarEventItem';
import {colors} from '../../const/colors';
import {fetchEvents} from '../../store/actions/events';
import {getEventsState} from '../../store/selectors/events';
import {fetchCalendar} from '../../store/actions/calendar';
import {getCalendarState} from '../../store/selectors/calendar';
import style from './style';
import ItemInfo from '../../components/ItemInfo';
import {FilterSeachBar} from '../../components/FilterSearchBar';
import {TextIcon} from '../../components/TextIcon';
import Calendar from '../../components/Calendar';
import {
  dateToDay,
  dateToTimestamp,
  timestampToDate,
} from '../../const/functions/time';

class CalendarScreen extends React.Component {
  state = {
    selectedDay: Date(),
    modalItemVisible: false,
    modalCalendarVisible: false,
    id_event: null, // change to id_event
    location: null,
    time: moment().format('HH:MM A'),
  };

  componentDidMount() {
    this.props.fetchEvents();
    this.props.fetchCalendar();
    this.timer = setInterval(() => {
      this.setState({time: moment().format('HH:MM A')});
    }, 1000);
  }

  setModalVisible = (modal, visible = true) => () => {
    this.setState({[modal]: visible});
  };

  onPressItem = (id) => () => {
    this.setState({id_event: id, modalItemVisible: true}); // change to id_event
  };

  onDayPress = (day) => {
    this.setState({selectedDay: moment(day.timestamp).toDate()});
  };

  onPressBlur = (modal) => () => {
    this.setState({[modal]: false});
  };

  navigate = (screen) => () => {
    this.props.navigation.navigate(screen);
  };

  modalCalendar = () => {
    const {modalCalendarVisible, selectedDay} = this.state;
    const {events} = this.props;
    return (
      <Modal animationType="fade" transparent visible={modalCalendarVisible}>
        <Calendar
          markedDates={this.props.calendar.list.map((el) =>
            moment(el.time_end.toDate()).format('YYYY-MM-DD'),
          )}
          selected={moment(selectedDay).format('YYYY-MM-DD')}
          onDayPress={this.onDayPress}
          onPressBlur={this.setModalVisible('modalCalendarVisible', false)}
        />
      </Modal>
    );
  };

  modalItem = () => {
    const {modalItemVisible, id_event} = this.state;
    const {events} = this.props;
    return (
      <Modal animationType="fade" transparent visible={modalItemVisible}>
        <ItemInfo
          data={events.list.find((el) => id_event == el.id)}
          onPressBlur={this.onPressBlur('modalItemVisible')}
        />
      </Modal>
    );
  };

  customDatesStylesFunc = (date) => {
    if (
      moment(this.state.selectedDay).format('MMMM Do YYYY') ===
      moment(date).format('MMMM Do YYYY')
    ) {
      // Fridays
      return {
        dateNameStyle: {color: '#486FFE'},
        dateNumberStyle: {
          color: 'white',
          backgroundColor: '#486FFE',
          aspectRatio: 1,
          borderRadius: 50,
        },
        dateContainerStyle: {alignSelf: 'center', justifyContent: 'center'},
      };
    }
  };

  renderHeader = () => {
    const {selectedDay, time} = this.state;
    return (
      <View>
        <View style={[style.row, style.calendarWrapper]}>
          <TextIcon
            text={moment(selectedDay).format('MMMM YYYY')}
            textStyle={style.calendarButtonText}
            iconName="calendar"
            iconType="feather"
            iconSize={19}
            iconColor={'#273B56'}
            iconStyle={style.calendarButtonIconContainer}
            containerStyle={style.calendarButton}
            onPress={this.setModalVisible('modalCalendarVisible', true)}
          />
          <TextIcon
            text={time}
            textStyle={style.timeText}
            iconName="clock"
            iconColor={'#273B56'}
            iconType="feather"
            iconSize={18}
            containerStyle={style.timeContainer}
          />
        </View>
        <CalendarStrip
          scrollable
          showMonth={false}
          innerStyle={{flexGrow: 1, alignItems: 'flex-end'}}
          onDateSelected={(date) => {
            this.setState({selectedDay: date});
          }}
          startingDate={moment(selectedDay).startOf('isoweek')}
          dayComponentHeight={70}
          style={style.calendarStripStyle}
          calendarColor={'white'}
          dateNameStyle={style.calendarStripDateNameStyle}
          dateNumberStyle={style.calendarStripDateNumberStyle}
          customDatesStyles={this.customDatesStylesFunc}
          iconContainer={{flex: 0.1}}
          markedDates={this.props.calendar.list.map((el) => ({
            date: dateToDay(el.time_begin),
            dots: [{color: '#486FFE'}],
          }))}
        />
      </View>
    );
  };

  renderEmpty = () => (
    <View style={style.emptyWrapper}>
      <Text style={style.emptyText}>You don't have events today</Text>
      <TouchableOpacity
        activeOpacity={0.5}
        style={style.buttonContainer}
        onPress={this.navigate('Events')}>
        <Text style={style.buttonText}>Add events</Text>
      </TouchableOpacity>
    </View>
  );

  renderCalendarEvent = (item, index) => {
    return (
      <CalendarEventItem
        key={index}
        data={item}
        onPress={this.onPressItem(item.id_event)} // item_id
      />
    );
  };

  render() {
    const data = this.props.calendar.list.filter(
      (el) =>
        dateToDay(el.time_begin) == dateToDay(this.state.selectedDay, 'Date'),
    );
    return (
      <View style={style.wrapper}>
        {this.modalItem()}
        {this.modalCalendar()}
        {this.renderHeader()}
        <View style={style.contentContainer}>
          {data.length ? (
            <ScrollView>{data.map(this.renderCalendarEvent)}</ScrollView>
          ) : (
            this.renderEmpty()
          )}
        </View>
      </View>
    );
  }
}
const mapStateToProps = (state) => ({
  events: getEventsState(state),
  calendar: getCalendarState(state),
});

const mapDispatchToProps = {
  fetchEvents,
  fetchCalendar,
};
const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(withConnect)(CalendarScreen);
