import React from 'react';
import {
  Image,
  Text,
  TouchableOpacity,
  View,
  Dimensions,
  Modal,
} from 'react-native';
import {Icon} from 'react-native-elements';
import {BlurView} from '@react-native-community/blur';
import defualt_image from '../../../assets/images/def_img.jpg';
import style from './style';
import {colors} from '../../const/colors';
import {geocoder} from '../../const/functions/geopoint';
import {dateToDay, dateToTime} from '../../const/functions/time';

export default class CalendarItem extends React.Component {
  state = {mapAddress: 'loading'};

  async componentDidMount() {
    try {
      const mapAddress = await geocoder(this.props.data.map);
      this.setState({mapAddress});
    } catch (err) {
      // handle errors
    }
  }

  render() {
    const {data, onPress} = this.props;
    const {label, time_begin, time_end} = data;
    return (
      <>
        <View style={[style.wrapper]}>
          <View style={style.timeContainer}>
            <Text style={style.time}>{dateToTime(time_begin)}</Text>
            <Text>|</Text>
            <Text style={style.time}>{dateToTime(time_end)}</Text>
          </View>
          <TouchableOpacity style={[style.eventContainer]} onPress={onPress}>
            <Text style={style.title} numberOfLines={1}>
              {label}
            </Text>
            <View style={style.row}>
              <Text style={[style.subtitle, style.flex]} numberOfLines={1}>
                {this.state.mapAddress}
              </Text>
              <Icon
                name="map-marker-outline"
                type="material-community"
                color={colors.blue}
                size={18}
                containerStyle={style.iconContainer}
              />
            </View>
          </TouchableOpacity>
          {/* <View style={[style.wrapper]}>
          <View style={[style.imageWrapper, imageStyle]}></View>
          <View style={style.textWrapper}>
            <View style={style.flex}>
              <Text style={style.title} numberOfLines={1}>
                {label}
              </Text>
              <View style={style.row}>
                <Text style={[style.subtitle, style.flex]} numberOfLines={1}>
                  {this.state.mapAddress}
                </Text>
                <Icon
                  name="map-marker-outline"
                  type="material-community"
                  color={colors.blue}
                  size={18}
                  containerStyle={style.iconContainer}
                />
              </View>
            </View>
            <View style={style.row}>
              <View style={[style.row, style.container]}>
                <Icon
                  name="calendar"
                  type="feather"
                  color="#5A697D"
                  size={16}
                />
                <Text style={style.subtitle}>{dateToDay(time_begin)}</Text>
              </View>
              <View style={[style.row, style.container, style.timeContainer]}>
                <Icon
                  name="clock"
                  type="feather"
                  color={colors.green}
                  size={16}
                />
                <Text style={[style.subtitle, style.time]}>
                  {dateToTime(time_begin, time_end)}
                </Text>
              </View>
            </View>
          </View> */}
        </View>
      </>
    );
  }
}
