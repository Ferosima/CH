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
  state = {form: null};

  _setForm = (form) => () => {
    this.setState({form});
  };

  renderButtons = () => (
    <View style={style.buttonsWrapper} directionalLockEnabled>
      <Button text={'Sign in'} onPress={this._setForm('sign in')} />
      <Button
        text={'Register'}
        buttonStyle={style.buttonDark}
        textStyle={style.buttonDarkText}
        onPress={this._setForm('register')}
      />
    </View>
  );

  renderForm = () => {
    switch (this.state.form) {
      case 'register': {
        return <RegistrationForm goBack={this._setForm(null)} />;
      }
      case 'sign in': {
        return <LoginForm goBack={this._setForm(null)} />;
      }
    }
  };

  render() {
    return (
      <ScrollView contentContainerStyle={style.wrapper}>
        <Text style={style.title}>{`Conference\nHelper`}</Text>
        {this.state.form ? this.renderForm() : this.renderButtons()}
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
