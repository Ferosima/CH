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
import moment from 'moment';
import defualt_image from '../../../assets/images/def_img.jpg';
import style from './style';
import {colors} from '../../const/colors';
import {geocoder} from '../../const/functions/geopoint';
import {dateToDay, dateToTime} from '../../const/functions/time';

export class EventItem extends React.Component {
  state = {mapAddress: 'loading'};

  async componentDidMount() {
    try {
      const mapAddress =
        typeof this.props.data.map !== 'string'
          ? await geocoder(this.props.data.map)
          : 'Online';
      this.setState({mapAddress});
    } catch (err) {
      // handle errors
    }
  }

  render() {
    const {data, onPress, imageStyle} = this.props;
    const {label, time_begin, time_end, description, image} = data;
    const isExpaired = moment(time_begin.toDate()) < moment();
    return (
      <>
        <TouchableOpacity style={[style.wrapper]} onPress={onPress}>
          <View style={[style.imageWrapper, imageStyle]}>
            <Image
              defaultSource={require('../../../assets/images/default_event.png')}
              resizeMode={'cover'}
              style={[style.image, isExpaired ? {opacity: 0.6} : null]}
              source={{
                uri:
                  image ||
                  'https://firebasestorage.googleapis.com/v0/b/conferencehelper-c9106.appspot.com/o/event%2Fdefault_event.png?alt=media&token=5a2d154a-ca38-4cdc-8f42-d45691a7342c',
              }}
            />
          </View>
          <View style={style.textWrapper}>
            <View style={style.flex}>
              <Text
                style={[style.title, isExpaired ? style.expairedText : null]}
                numberOfLines={1}>
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
                  color={isExpaired ? 'grey' : colors.green}
                  size={16}
                />
                <Text
                  style={[
                    style.subtitle,
                    style.time,
                    isExpaired ? style.expairedText : null,
                  ]}>
                  {`${dateToTime(time_begin)}-${dateToTime(time_end)}`}
                </Text>
              </View>
            </View>
          </View>
        </TouchableOpacity>
      </>
    );
  }
}
