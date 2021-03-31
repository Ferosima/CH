import React from 'react';
import {FlatList, Text, TouchableOpacity, View, Modal} from 'react-native';
import {Icon} from 'react-native-elements';
import {ScrollView} from 'react-native-gesture-handler';
import {connect} from 'react-redux';
import {compose} from 'redux';
import MapView, {Marker, Callout} from 'react-native-maps';
import {EventItem} from '../../components/EventItem';
import {colors} from '../../const/colors';
import {fetchEvents} from '../../store/actions/events';
import {getRootState} from '../../store/selectors/events';
import style from './style';
import {ItemInfo} from '../../components/ItemInfo';
import {FilterSeachBar} from '../../components/FilterSearchBar';

class MapScreen extends React.Component {
  state = {
    search: null,
    filter: null,
    modalVisible: false,
    indexItem: null,
  };

  componentDidMount() {
    this.props.fetchEvents();
  }

  setModalVisible = (visible) => {
    this.setState({modalVisible: visible});
  };

  onPressItem = (index) => () => {
    this.setModalVisible(true);
    this.setState({indexItem: index});
  };

  onPressBlur = () => {
    this.setModalVisible(false);
    this.setState({indexItem: null});
  };

  renderItemEvent = (item, index) => (
    // <View style={style.itemListWrapper} key={index}>
    <View
      style={{width: 350, height: 200, backgroundColor: 'blue', borderWidth: 1}}
      key={index}>
      {/* <EventItem data={item} onPress={this.onPressItem(index)} /> */}
    </View>
  );

  renderEventList = () => {
    const {events} = this.props;
    return (
      <View style={style.row}>{events.list.map(this.renderItemEvent)}</View>
    );
  };

  render() {
    const {modalVisible} = this.state;
    return (
      <>
        <Modal animationType="fade" transparent visible={modalVisible}>
          <ItemInfo
            data={this.props.events.list[this.state.indexItem]}
            onPressBlur={this.onPressBlur}
          />
        </Modal>
        <View style={{flex: 1, width: '100%'}}>
          <View
            style={{
              paddingHorizontal: 10,
              paddingTop: 10,
              left: 0,
              right: 0,
              top: 0,
              bottom: 0,
              position: 'absolute',
              justifyContent: 'space-between',
              zIndex: 1,
            }}>
            <FilterSeachBar
              contentContainer={{
                borderRadius: 30,
                backgroundColor: '#ffffff99',
              }}
            />
          </View>
          <View style={{position: 'absolute', bottom: 10,zIndex:1}}>
            <ScrollView horizontal>{this.renderEventList()}</ScrollView>
          </View>
          <MapView
            style={{
              flex: 1,
              width: '100%',
              zIndex: 0,
              justifyContent: 'flex-end',
            }}></MapView>
          <View style={{flex: 1, position: 'absolute'}}></View>
        </View>
      </>
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

export default compose(withConnect)(MapScreen);
