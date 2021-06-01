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
import {Calendar, CalendarList, Agenda} from 'react-native-calendars';
import moment from 'moment';
import defualt_image from '../../../assets/images/def_img.jpg';
import style from './style';
import {colors} from '../../const/colors';

export default class MyCalendar extends React.Component {
  markedDates = (dates, selected) => {
    const markedDates = {};
    dates.forEach((element) => {
      markedDates[element] = {
        marked: true,
        dotColor: moment(element) > moment() ? '#486FFE' : 'grey',
        selected: element == selected,
      };
    });
    if (!markedDates[selected]) {
      markedDates[selected] = {
        selected: true,
        selectedColor: '#486FFE',
      };
    }
    return markedDates;
  };

  render() {
    const {markedDates, selected, onPressBlur, onDayPress} = this.props;
    return (
      <TouchableOpacity
        style={{flex: 1}}
        activeOpacity={1}
        onPress={onPressBlur}>
        <BlurView style={style.blurWrapper} blurType="light" blurAmount={1}>
          <View
            style={style.wrapper}
            //  onPress={onPressBlur}
          >
            <TouchableWithoutFeedback>
              <View style={style.itemContainer}>
                <Calendar
                  style={style.calendarStyle}
                  markedDates={this.markedDates(markedDates, selected)}
                  // Initially visible month. Default = Date()
                  onDayPress={onDayPress}
                  theme={{
                    todayTextColor: '#00adf5',
                    selectedDayTextColor: '#ffffff',
                    textDayFontFamily: 'monospace',
                    textMonthFontFamily: 'Comfortaa-Regular',
                    textDayHeaderFontFamily: 'Comfortaa-Light',
                    textDayFontWeight: 'bold',
                    monthTextColor: '#273B56',
                    dayTextColor: '#69727E',
                    textSectionTitleColor: '#b6c1cd',
                  }}
                />
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
