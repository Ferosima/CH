import React from 'react';
import {connect} from 'react-redux';
import {compose} from 'redux';
import Navigator from './navigations';
import Auth from './screens/AuthScreen';
import {getIsLogin} from './store/selectors/user';

class MainLayout extends React.Component {
  render() {
    return <>{this.props.isLogin ? <Navigator /> : <Auth />}</>;
  }
}
const mapStateToProps = (state) => ({
  isLogin: getIsLogin(state),
});

const withConnect = connect(mapStateToProps);

export default compose(withConnect)(MainLayout);
