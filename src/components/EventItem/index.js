import React from 'react';
import {Image, Text, TouchableOpacity, View, Dimensions} from 'react-native';
import defualt_image from '../../../assets/images/def_img.jpg';
import style from './style';

export class EventItem extends React.Component {
  render() {
    const {title, date, image, width} = this.props;
    return (
      <TouchableOpacity
        style={[style.wrapper, {width: width}]}
        onPress={() => console.log('HI')}>
        <View style={style.imageWrapper}>
          <Image
            resizeMode={'cover'}
            style={style.image}
            source={defualt_image}
          />
        </View>
        <View style={style.infoWrapper}>
          <View style={style.row}>
            <View style={style.textWrapper}>
              <Text style={style.title} numberOfLines={2}>
                {title}
              </Text>
              <View style={style.dateWrapper}>
                <Text style={style.date}>27 march</Text>
                <Text style={style.time}>13:00</Text>
              </View>
            </View>
            <View>
              <Text style={style.year}>2021</Text>
            </View>
          </View>
          <View style={{flex: 1, paddingTop: 10}}>{/* FOR tags */}</View>
        </View>
      </TouchableOpacity>
    );
  }
}
