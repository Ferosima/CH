import React from 'react';
import {
  FlatList,
  Text,
  TouchableOpacity,
  View,
  Modal,
  Image,
} from 'react-native';
import {Icon} from 'react-native-elements';
import {ScrollView} from 'react-native-gesture-handler';
import {connect} from 'react-redux';
import {compose} from 'redux';
import moment from 'moment';
import {EventItem} from '../../components/EventItem';
import {colors} from '../../const/colors';
import {fetchEvents} from '../../store/actions/events';
import {userClear} from '../../store/actions/user';
import {fetchCalendar} from '../../store/actions/calendar';
import {getEventsState} from '../../store/selectors/events';
import {getCalendarState} from '../../store/selectors/calendar';
import style from './style';
import ItemInfo from '../../components/ItemInfo';
import {FilterSeachBar} from '../../components/FilterSearchBar';
import {getUserState} from '../../store/selectors/user';
import {TextIcon} from '../../components/TextIcon';
import {
  dateToDay,
  dateToTimestamp,
  timestampToDate,
} from '../../const/functions/time';

class CreateEventScreen extends React.Component {

  navigate = (screen) => () => {
    this.props.navigation.navigate(screen);
  };

  render() {
    const {user} = this.props.user;
    return (
      <>
        <ScrollView
          style={style.wrapper}
          contentContainerStyle={style.wrapperContentStyle}>
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
  userClear,
};
const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(withConnect)(CreateEventScreen);
