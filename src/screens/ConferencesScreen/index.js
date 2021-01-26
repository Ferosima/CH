import React from 'react';
import {View, Text} from 'react-native';
import {connect} from 'react-redux';
import {compose} from 'redux';
import style from './style';
import {fetchLogin} from '../../store/actions/user';
import {getRootState} from '../../store/selectors/user';

class Conferences extends React.Component {
  // componentDidMount() {
  //   this.props.fetchLogin();
  // }

  render() {
    return <View style={style.wrapper}></View>;
  }
}
// const mapStateToProps = (state) => ({
//   user: getRootState(state),
// });

// const mapDispatchToProps = {
//   fetchLogin,
// };
// const withConnect = connect(mapStateToProps, mapDispatchToProps);

// export default compose(withConnect)(Conferences);
export default Conferences;
