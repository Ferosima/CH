import React from 'react';
import {View, Text} from 'react-native';
import {connect} from 'react-redux';
import {compose} from 'redux';
import style from './style';
import {fetchLogin} from '../../store/actions/user';
import {getRootState} from '../../store/selectors/user';

class Auth extends React.Component {
  render() {
    return (
      <View style={style.wrapper}>
        {/* TODO */}
        {/* LOGO */}
        {/* sing in sing up buttons */}
        {/* registration (scroll view) or login with back button */}
        {/* registrationForm should be with city, age, etcetera even if registration was done in google or 
        fetch data from google */}
        {/* form must to be how OneUI */}
        {/* and clean form button */}
      </View>
    );
  }
}
const mapStateToProps = (state) => ({
  user: getRootState(state),
});

const mapDispatchToProps = {
  fetchLogin,
};
const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(withConnect)(Auth);
