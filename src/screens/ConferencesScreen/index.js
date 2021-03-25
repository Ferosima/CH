import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TouchableOpacityBase,
  Dimensions,
  FlatList,
} from 'react-native';
import {connect} from 'react-redux';
import {compose} from 'redux';
import {ScrollView} from 'react-native-gesture-handler';
import MapView, {Marker, Callout} from 'react-native-maps';
import style from './style';
import {fetchEvents} from '../../store/actions/events';
import {getRootState} from '../../store/selectors/events';
import {EventItem} from '../../components/EventItem';
import NavButton from '../../components/NavButton';
import {HeaderNavBar} from '../../components/HeaderNavComponent';
import {MapWithList} from '../../components/MapWithList';

class Conferences extends React.Component {
  state = {
    currentNavScreen: 'Map',
  };

  componentDidMount() {
    this.props.fetchEvents();
  }

  changeNavScreen = (title) => {
    this.setState({currentNavScreen: title});
  };

  renderHeader = () => {
    const {currentNavScreen} = this.state;
    return (
      <View style={style.headerWrapper}>
        <HeaderNavBar
          buttons={['List', 'Map']}
          currentNav={currentNavScreen}
          onPress={this.changeNavScreen}
        />
      </View>
    );
  };

  renderItemEventList = ({item, key}) => (
    <EventItem title={item.title} key={key} />
  );

  renderEventList = () => {
    const {events} = this.props;
    return (
      <FlatList
        style={style.eventStyle}
        data={events.list}
        renderItem={this.renderItemEventList}
        keyExtractor={(item) => item.id}
      />
    );
  };

  renderMap = () => {
    const {events} = this.props;
    return <MapWithList data={events.list} />;
  };

  renderEvents = () => {
    if (this.state.currentNavScreen == 'List') return this.renderEventList();
    if (this.state.currentNavScreen == 'Map') return this.renderMap();
  };

  render() {
    return (
      <ScrollView
        style={style.wrapper}
        contentContainerStyle={style.wrapperContentStyle}
        stickyHeaderIndices={[1]}>
        <View
          style={[
            style.titleWrapper,
            {height: Dimensions.get('window').height * 0.35},
          ]}>
          <Text style={style.title}>{`Find Events\nFor You`}</Text>
        </View>
        {this.renderHeader()}

        {this.renderEvents()}
      </ScrollView>
    );
  }
}
const mapStateToProps = (state) => ({
  events: getRootState(state),
});

const mapDispatchToProps = {
  fetchEvents,
};
const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(withConnect)(Conferences);
// export default Conferences;
