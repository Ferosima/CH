import React from 'react';
import {
  ScrollView,
  Image,
  ImageBackground,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
  Dimensions,
  Linking,
  Modal,
} from 'react-native';
import {Icon} from 'react-native-elements';
import {BlurView} from '@react-native-community/blur';
import {connect} from 'react-redux';
import {compose} from 'redux';
import Toast from 'react-native-toast-message';
import moment from 'moment';
import MapView, {Marker, Callout} from 'react-native-maps';
import defualt_image from '../../../assets/images/def_img.jpg';
import style from './style';
import {colors} from '../../const/colors';
import {geocoder} from '../../const/functions/geopoint';
import {dateToDay, dateToTime} from '../../const/functions/time';
import {EventButton} from '../EventButton';
import {
  fetchIntersectingEvents,
  addEventToCalendar,
  deleteEventFromCalendar,
} from '../../store/actions/calendar';
import {getCalendarState} from '../../store/selectors/calendar';

class ItemInfo extends React.Component {
  state = {mapAddress: 'loading', state: 'success'};

  async componentDidMount() {
    const {time_begin, time_end} = this.props.data;
    this.props.fetchIntersectingEvents({time_begin, time_end});
    const mapAddress =
      typeof this.props.data.map !== 'string'
        ? await geocoder(this.props.data.map)
        : 'Online';
    this.setState({mapAddress});
  }

  renderButton = () => {
    const {intersectingEvents} = this.props.calendarState;
    const {id, label, map, time_begin, time_end} = this.props.data;
    const isThisEvent = intersectingEvents.findIndex(
      (el) => el.id_event === id,
    );
    const state =
      isThisEvent != -1
        ? 'danger'
        : intersectingEvents.length
        ? 'disabled'
        : moment() > moment(time_begin.toDate())
        ? 'expaired'
        : 'success';
    return (
      <EventButton
        state={state}
        pending={this.props.calendarState.pending}
        countOfEvents={intersectingEvents.length}
        onPressSuccess={() =>
          this.props.addEventToCalendar({
            time_begin,
            time_end,
            id,
            label,
            map,
          })
        }
        onPressDisabled={() => console.log('dis')}
        onPressDanger={() =>
          this.props.deleteEventFromCalendar(intersectingEvents[0].id)
        }
      />
    );
  };

  render() {
    const {data, onPressBlur} = this.props;
    const {id, label, time_begin, time_end, description, image, map} = data;
    const {_latitude, _longitude} = map;
    return (
      <View style={style.wrapper}>
        <ScrollView contentContainerStyle={{flexGrow: 1}}>
          <View style={style.imageContainer}>
            <ImageBackground
              defaultSource={require('../../../assets/images/default_event.png')}
              resizeMode={'cover'}
              style={style.image}
              source={{
                uri:
                  image ||
                  'https://firebasestorage.googleapis.com/v0/b/conferencehelper-c9106.appspot.com/o/event%2Fdefault_event.png?alt=media&token=5a2d154a-ca38-4cdc-8f42-d45691a7342c',
              }}>
              <View style={{paddingBottom: 5}}>
                <Icon
                  onPress={onPressBlur}
                  reverse
                  color={'rgba(0,0,0,0.5)'}
                  name={'arrow-left'}
                  type={'simple-line-icon'}
                  size={24}
                />
              </View>
            </ImageBackground>
          </View>
          <View style={style.contentContainer}>
            <View>
              <View style={{marginBottom: 20}}>
                <Text numberOfLines={2} style={style.title}>
                  {label}
                </Text>
                <View style={style.row}>
                  <Text style={[style.text, style.mapText]} numberOfLines={1}>
                    {this.state.mapAddress}
                  </Text>
                  <TouchableOpacity
                    activeOpacity={0.5}
                    onPress={() => console.log('on map press')}>
                    {/* <TextIcon
                      text="On map"
                      textStyle={style.mapButtonText}
                      iconName="map-marker-outline"
                      iconType="material-community"
                      iconColor={'white'}
                      iconContainer={style.iconContainer}
                      iconSize={18}
                      containerStyle={style.mapButtonContainer}
                    /> */}
                  </TouchableOpacity>
                </View>
                {typeof map !== 'string' ? (
                  <View
                    style={{
                      borderRadius: 10,
                      overflow: 'hidden',
                      marginVertical: 20,
                    }}>
                    <MapView
                      style={{
                        flex: 1,
                        width: '100%',
                        height: 200,
                        borderRadius: 20,
                        justifyContent: 'flex-end',
                      }}
                      region={{
                        latitude: _latitude,
                        longitude: _longitude,
                        latitudeDelta: 0.01,
                        longitudeDelta: 0.05,
                      }}>
                      <Marker
                        coordinate={{
                          latitude: _latitude,
                          longitude: _longitude,
                        }}
                      />
                    </MapView>
                  </View>
                ) : (
                  <Text
                    style={[style.text, style.mapText, style.hyperlinkStyle]}
                    onPress={() => {
                      Linking.openURL(map);
                    }}>
                    {map}
                  </Text>
                )}
              </View>
              <View style={[style.row, style.dateContainer]}>
                <TextIcon
                  label="Date"
                  labelStyle={style.subtitle}
                  text={dateToDay(time_begin)}
                  textStyle={style.dateText}
                  iconName="calendar"
                  iconType="feather"
                  iconColor={colors.grey}
                  iconSize={18}
                  containerStyle={{marginRight: 40}}
                />
                <TextIcon
                  label="Time"
                  labelStyle={style.subtitle}
                  text={`${dateToTime(time_begin)}-${dateToTime(time_end)}`}
                  textStyle={[style.dateText, style.greenText]}
                  iconName="clock"
                  iconType="feather"
                  iconColor={colors.green}
                  iconSize={18}
                />
              </View>
              <View style={style.marginBottom}>
                <Text style={style.subtitle}>About</Text>
                <Text style={style.text}>{description}</Text>
              </View>
            </View>
            {this.renderButton()}
          </View>
        </ScrollView>
      </View>
    );
  }
}
class TextIcon extends React.Component {
  render() {
    const {
      label,
      labelStyle,
      text,
      iconName,
      iconType,
      iconSize,
      iconColor,
      textStyle,
      iconStyle,
      containerStyle,
    } = this.props;
    return (
      <View>
        {label ? <Text style={labelStyle}>{label}</Text> : null}
        <View style={[style.row, containerStyle]}>
          <Icon
            name={iconName}
            type={iconType}
            color={iconColor}
            size={iconSize}
            containerStyle={iconStyle}
          />
          <Text style={textStyle}>{text}</Text>
        </View>
      </View>
    );
  }
}
const mapStateToProps = (state) => ({
  calendarState: getCalendarState(state),
});

const mapDispatchToProps = {
  fetchIntersectingEvents,
  addEventToCalendar,
  deleteEventFromCalendar,
};
const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(withConnect)(ItemInfo);
