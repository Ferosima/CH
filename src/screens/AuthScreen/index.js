import React from 'react';
import {View, ScrollView, Text, Touchable} from 'react-native';
import {connect} from 'react-redux';
import {compose} from 'redux';
import {TouchableOpacity} from 'react-native-gesture-handler';
import style from './style';
import {fetchLogin} from '../../store/actions/auth';
import {getRootState} from '../../store/selectors/auth';
import Button from '../../components/Button';
import RegistrationForm from '../../components/RegistrationFormComponent';
import LoginForm from '../../components/LoginFormComponent';

class Auth extends React.Component {
  state = {form: 'sign in'};

  _setForm = (form) => () => {
    this.setState({form});
  };

  renderForm = () => {
    switch (this.state.form) {
      case 'register': {
        return <RegistrationForm goBack={this._setForm('sign in')} />;
      }
      case 'sign in': {
        return <LoginForm changeComponent={this._setForm('register')} />;
      }
    }
  };

  render() {
    return (
      <ScrollView contentContainerStyle={style.wrapper}>
        <View style={{flexDirection: 'row', alignItems: 'flex-end'}}>
          <Text style={style.title}>{`Your\nEvent`}</Text>
          <Text style={[style.title, {color: 'orange'}]}>S</Text>
        </View>
        {this.renderForm()}
        {/* TODO */}
        {/* LOGO */}
        {/* sing in sing up buttons */}
        {/* registration (scroll view) or login with back button */}
        {/* registrationForm should be with city, age, etcetera even if registration was done in google or 
        fetch data from google */}
        {/* form must to be how OneUI */}
        {/* and clean form button */}
      </ScrollView>
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
