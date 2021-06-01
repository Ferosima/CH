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
import firebase from '@react-native-firebase/app';
import {EventItem} from '../../components/EventItem';
import {colors} from '../../const/colors';
import {fetchEvents} from '../../store/actions/events';
import {userClear} from '../../store/actions/user';
import {fetchCalendar} from '../../store/actions/calendar';
import {getEventsState} from '../../store/selectors/events';
import {getCalendarState} from '../../store/selectors/calendar';
import style from './style';
import ItemInfo from '../../components/ItemInfo';
import RegistationForm from '../../components/RegistrationFormComponent';
import {getUserState} from '../../store/selectors/user';
import {TextIcon} from '../../components/TextIcon';
import {
  dateToDay,
  dateToTime,
  dateToTimestamp,
  timestampToDate,
} from '../../const/functions/time';

class PersonalInfoScreen extends React.Component {
  // state = {isEdit: false};
  static navigationOptions = {
    headerStyle: {elevation: 0},
    headerTitleAlign: 'center',
    headerTitleStyle: {alignSelf: 'center'},
    // headerRightContainerStyle: style.headerRightContainerStyle,
  };

  // componentDidMount = () => {
  //   this.props.navigation.setParams({isEdit: this.state.isEdit});
  //   this.props.navigation.setOptions({
  //     headerRight: () => (
  //       <TouchableOpacity
  //         onPress={() => {
  //           this.props.navigation.setParams({
  //             isEdit: !this.props.route.params.isEdit,
  //           });
  //           this.setState({isEdit: !this.props.route.params.isEdit});
  //         }}>
  //         <Text style={style.headerRightButton}>
  //           {this.props.route.params.isEdit ? 'Done' : 'Edit'}
  //         </Text>
  //       </TouchableOpacity>
  //     ),
  //   });
  // };

  navigate = (screen) => () => {
    this.props.navigation.navigate(screen);
  };

  renderField = (title, info) => {
    return (
      <View style={style.fieldStyle}>
        <Text style={style.subtitle}>{title}</Text>
        <Text style={[style.subtitle, style.fieldInfo]}>{info}</Text>
      </View>
    );
  };

  render() {
    const {user} = this.props.user;
    delete user.id;
    const default_image =
      'https://firebasestorage.googleapis.com/v0/b/conferencehelper-c9106.appspot.com/o/user%2Fdefaultjpg.jpg?alt=media&token=3a362088-5728-4071-a5a1-8cfa7deb0adf';
    // console.log(
    //   moment(dateToTimestamp('2002/07/15')),
    //   dateToTimestamp('2002/07/15'),
    // );
    try {
      console.log();
    } catch (err) {
      console.log(err);
    }
    return (
      <>
        <ScrollView
          style={style.wrapper}
          contentContainerStyle={style.wrapperContentStyle}
          showsVerticalScrollIndicator={false}>
          {/* {!this.state.isEdit ? ( */}
          <View style={style.headerWrapper}>
            {/* <View style={{padding:30}}></View> */}
            <Image
              resizeMode={'cover'}
              style={[style.image]}
              source={{
                uri: user.image || default_image,
              }}
            />
            <View style={style.textWrapper}>
              <Text
                style={
                  style.title
                }>{`${user.first_name} ${user.last_name}`}</Text>
            </View>
          </View>
          <View style={{width: '100%', flex: 1}}>
            {this.renderField(
              'Birth Date',
              moment(user.birth_date.seconds * 1000).format('l'),
            )}
            {this.renderField('Email', user.email)}
            {user.phone ? this.renderField('Phone', user.phone) : null}
          </View>
          {/* // ) : (
          //   <RegistationForm 
          //     data={user}
          //     withoutButtons
          //     withoutPassword
          //     labelBackgroundColor={'#F8F8FA'}
          //   />
          // )} */}
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

export default compose(withConnect)(PersonalInfoScreen);
