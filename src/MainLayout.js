import React from 'react';
import {View, Text, ActivityIndicator} from 'react-native';
import {connect} from 'react-redux';
import {compose} from 'redux';
import Navigator from './navigations';
import Auth from './screens/AuthScreen';
import {getIsLogin, getUserState} from './store/selectors/user';

class MainLayout extends React.Component {
  render() {
    console.log(this.props.user);
    return (
      <>
        {this.props.user.pending ? (
          <View
            style={{
              flex: 1,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <ActivityIndicator size="large" color={'#486FFE'} />
            <Text style={{fontFamily: 'Nunito-Regular'}}>Loading</Text>
          </View>
        ) : this.props.isLogin ? (
          <Navigator />
        ) : (
          <Auth />
        )}
      </>
    );
  }
}
const mapStateToProps = (state) => ({
  isLogin: getIsLogin(state),
  user: getUserState(state),
});

const withConnect = connect(mapStateToProps);

export default compose(withConnect)(MainLayout);
