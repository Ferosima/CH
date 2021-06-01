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

class Profile extends React.Component {
  // state = {
  // };

  // componentDidMount() {
  // }

  navigate = (screen) => () => {
    this.props.navigation.navigate(screen);
  };

  render() {
    const {user} = this.props.user;
    return (
      <>
        <ScrollView
          style={style.wrapper}
          contentContainerStyle={style.wrapperContentStyle}
          showsVerticalScrollIndicator={false}>
          <View style={style.headerWrapper}>
            {/* <View style={{height: '15%'}}></View> */}
            <View style={{padding:30}}></View>
            <Image
              resizeMode={'cover'}
              style={[style.image]}
              source={{
                uri:
                  user.image ||
                  'https://firebasestorage.googleapis.com/v0/b/conferencehelper-c9106.appspot.com/o/user%2Fdefaultjpg.jpg?alt=media&token=3a362088-5728-4071-a5a1-8cfa7deb0adf',
              }}
            />
            <View style={style.textWrapper}>
              <Text
                style={
                  style.title
                }>{`Welcome, ${user.first_name} ${user.last_name}`}</Text>
              <Text style={style.subtitle}>
                Manage your Personal info, security and app settings
              </Text>
            </View>
          </View>
          <View style={style.itemsContainer}>
            <View style={style.menuHeaderWrapper}>
              <TextIcon
                text={'Account'}
                textStyle={[style.subtitle, {paddingHorizontal: 10}]}
                iconName="user-circle-o"
                iconColor={'#273B56'}
                iconType="font-awesome"
                iconSize={20}
                containerStyle={style.menuHeader}
              />
            </View>
            <TextIcon
              text={'Personal info'}
              textStyle={[style.subtitle, {paddingRight: 10}]}
              iconName="arrow-right"
              iconColor={'#273B56'}
              iconType="simple-line-icon"
              iconSize={20}
              containerStyle={style.itemWrapper}
              onPress={this.navigate('Personal Info')}
            />
            {/* <TextIcon
              text={'Password & Security'}
              textStyle={[style.subtitle, {paddingRight: 10}]}
              iconName="arrow-right"
              iconColor={'#273B56'}
              iconType="simple-line-icon"
              iconSize={20}
              containerStyle={style.itemWrapper}
            /> */}
          </View>
          <View style={style.itemsContainer}>
            <View style={style.menuHeaderWrapper}>
              <TextIcon
                text={'Application'}
                textStyle={[style.subtitle, {paddingHorizontal: 10}]}
                iconName="appstore1"
                iconColor={'#273B56'}
                iconType="ant-design"
                iconSize={20}
                containerStyle={style.menuHeader}
              />
            </View>
            <TextIcon
              text={'Log out'}
              textStyle={[style.subtitle, {paddingRight: 10}]}
              iconName="arrow-right"
              iconColor={'#273B56'}
              iconType="simple-line-icon"
              iconSize={20}
              onPress={this.props.userClear}
              containerStyle={style.itemWrapper}
            />
          </View>
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

export default compose(withConnect)(Profile);
