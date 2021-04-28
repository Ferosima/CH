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
  Modal,
} from 'react-native';
import {Icon} from 'react-native-elements';
import {BlurView} from '@react-native-community/blur';
import {connect} from 'react-redux';
import {compose} from 'redux';
import Toast from 'react-native-toast-message';
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
    try {
      const {time_begin, time_end} = this.props.data;
      this.props.fetchIntersectingEvents({time_begin, time_end});
      const mapAddress = await geocoder(this.props.data.map);
      this.setState({mapAddress});
      // fetch calendar item
    } catch (err) {
      // handle errorsa
    }
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
        : 'success';
    return (
      <EventButton
        state={state}
        pending={this.props.calendarState.pending}
        countOfEvents={intersectingEvents.length}
        onPressSuccess={() =>
          this.props.addEventToCalendar({time_begin, time_end, id, label, map})
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
    const {id, label, time_begin, time_end, description, image} = data;
    return (
      <TouchableOpacity
        style={{flex: 1}}
        activeOpacity={1}
        onPress={onPressBlur}>
        <BlurView style={style.blurWrapper} blurType="light" blurAmount={1}>
          <View style={style.wrapper}>
            <TouchableWithoutFeedback>
              <View style={style.itemContainer}>
                <ScrollView>
                  <View style={style.imageContainer}>
                    <Image
                      resizeMode={'cover'}
                      style={style.image}
                      source={defualt_image}
                    />
                  </View>
                  <View style={style.contentContainer}>
                    <View style={{marginBottom: 20}}>
                      <Text numberOfLines={2} style={style.title}>
                        {label}
                      </Text>
                      <View style={style.row}>
                        <Text
                          style={[style.text, style.mapText]}
                          numberOfLines={1}>
                          {this.state.mapAddress}
                        </Text>
                        <TouchableOpacity
                          activeOpacity={0.5}
                          onPress={() => console.log('on map press')}>
                          <TextIcon
                            text="On map"
                            textStyle={style.mapButtonText}
                            iconName="map-marker-outline"
                            iconType="material-community"
                            iconColor={'white'}
                            iconContainer={style.iconContainer}
                            iconSize={18}
                            containerStyle={style.mapButtonContainer}
                          />
                        </TouchableOpacity>
                      </View>
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
                        text={`${dateToTime(time_begin)}-${dateToTime(
                          time_end,
                        )}`}
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
                    {this.renderButton()}
                  </View>
                </ScrollView>
              </View>
            </TouchableWithoutFeedback>
          </View>
        </BlurView>
      </TouchableOpacity>
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
