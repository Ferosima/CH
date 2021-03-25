import React from 'react';
import {View} from 'react-native';
import NavButton from '../NavButton';
import style from './style';

export class HeaderNavBar extends React.Component {
  renderButton = (title) => (
    <NavButton
      text={title}
      currentNav={this.props.currentNav}
      onPress={this.props.onPress}
    />
  );

  render() {
    const {buttons} = this.props;
    return (
      <View style={{width: '100%'}}>
        <View style={style.buttonsWrapper}>
          {buttons.map(this.renderButton)}
        </View>
      </View>
    );
  }
}
