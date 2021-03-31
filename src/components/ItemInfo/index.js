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
import defualt_image from '../../../assets/images/def_img.jpg';
import style from './style';
import {colors} from '../../const/colors';

export class ItemInfo extends React.Component {
  render() {
    const {data, onPressBlur} = this.props;
    const {title, map, date, time, description, image} = data;
    console.log(this.state);
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
                        {title}
                      </Text>
                      <View style={style.row}>
                        <Text
                          style={[style.text, style.mapText]}
                          numberOfLines={1}>
                          {map}
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
                        text={date}
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
                        text={time}
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
                    <TouchableOpacity
                      activeOpacity={0.5}
                      style={style.buttonContainer}
                      onPress={() => console.log('Go to event press')}>
                      <Text style={style.buttonText}>Go to event</Text>
                    </TouchableOpacity>
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
