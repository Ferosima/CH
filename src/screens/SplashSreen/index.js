import React from 'react';
import {View, Text, ActivityIndicator} from 'react-native';
import {connect} from 'react-redux';
import style from './style';

class SplashScreen extends React.Component {
  // componentDidMount() {
  //   Promise.all([this.checkLoggedIn(), this.timeout()]).then((values) => {
  //     this.props.navigation.replace(values[0]);
  //   });
  // }

  // // time for load
  // timeout = () => {
  //   return new Promise((resolve, reject) => setTimeout(resolve, 100));
  // };

  // checkLoggedIn = () => {
  //   return this.props.loggedIn ? "Main" : "Auth";
  // };

  render() {
    console.log(this.props.user);
    return (
      <View style={style.indicator}>
        <View>
          <Text style={style.title}>Conference Helper </Text>
          <ActivityIndicator size="large" color="#6ca0fe" />
        </View>
      </View>
    );
  }
}
const mapStateToProps = (state) => ({
  loggedIn: state.user.loggedIn,
  user: state.user,
});

export default connect(mapStateToProps)(SplashScreen);
// export default SplashScreen;
