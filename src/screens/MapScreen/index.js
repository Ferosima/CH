import React from 'react';
import {
  FlatList,
  Text,
  TouchableOpacity,
  View,
  Modal,
  PermissionsAndroid,
  Platform,
} from 'react-native';
import {Icon} from 'react-native-elements';
import {ScrollView} from 'react-native-gesture-handler';
import {connect} from 'react-redux';
import {compose} from 'redux';
import MapView, {Marker, Callout} from 'react-native-maps';
import Geolocation from 'react-native-geolocation-service';
import {EventItem} from '../../components/EventItem';
import {colors} from '../../const/colors';
import {fetchEvents} from '../../store/actions/events';
import {getEventsState} from '../../store/selectors/events';
import style from './style';
import ItemInfo from '../../components/ItemInfo';
import {FilterSeachBar} from '../../components/FilterSearchBar';

class MapScreen extends React.Component {
  state = {
    search: null,
    filter: null,
    modalVisible: false,
    indexItem: null,
    location: {
      latitude: 37.78825,
      longitude: -122.4324,
    },
  };

  async componentDidMount() {
    this.props.fetchEvents();
    this.requestPermissions();
    this.findCoordinates();
  }

  findCoordinates = () => {
    Geolocation.getCurrentPosition(
      (position) => {
        this.setState({location: position.coords});
      },
      (error) => {
        // See error code charts below.
        console.log('ERROR', error.code, error.message);
      },
      {enableHighAccuracy: true, timeout: 15000, maximumAge: 3600000},
    );
  };

  requestPermissions = async () => {
    if (Platform.OS === 'ios') {
      Geolocation.requestAuthorization();
      Geolocation.setRNConfiguration({
        skipPermissionRequests: false,
        authorizationLevel: 'whenInUse',
      });
      await this.findCoordinates();
    }
    if (Platform.OS === 'android') {
      await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_COARSE_LOCATION,
      );
      await this.findCoordinates();
    }
  };

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

  renderItemEvent = ({item, index}) => (
    // <View style={style.itemListWrapper} key={index}>
    <View style={{width: 300, paddingHorizontal: 10}} key={index}>
      <EventItem
        data={item}
        onPress={this.onPressItem(index)}
        imageStyle={{width: '40%', aspectRatio: 20 / 25}}
      />
    </View>
  );

  renderEventList = () => {
    const {events} = this.props;
    return (
      <View style={style.row}>{events.list.map(this.renderItemEvent)}</View>
    );
  };

  renderMarker = (item, index) => {
    const {_latitude, _longitude} = item.map;
    return (
      <Marker
        key={index}
        coordinate={{latitude: _latitude, longitude: _longitude}}
        title={item.label}
        description={item.description}
        onCalloutPress={this.onPressItem(index)}
        showCallout
      />
    );
  };

  render() {
    const {events} = this.props;
    events.list = events.list.filter((event) => typeof event.map !== 'string');
    const {modalVisible, location} = this.state;
    return (
      <>
        <Modal
          animationType="fade"
          transparent
          visible={modalVisible}
          onRequestClose={this.onPressBlur}>
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
              width: '100%',
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
          <View style={{position: 'absolute', bottom: 10, zIndex: 1}}>
            <FlatList
              showsHorizontalScrollIndicator={false}
              horizontal
              refreshing={events.pending}
              onRefresh={this.props.fetchEvents}
              data={events.list}
              renderItem={this.renderItemEvent}
              keyExtractor={(item) => item.id}
            />
          </View>
          <MapView
            style={{
              flex: 1,
              width: '100%',
              zIndex: 0,
              justifyContent: 'flex-end',
            }}
            region={{
              latitude: location.latitude,
              longitude: location.longitude,
              latitudeDelta: 0.01,
              longitudeDelta: 0.05,
            }}
            showsUserLocation
            loadingEnabled
            followsUserLocation>
            {events.list.map(this.renderMarker)}
          </MapView>

          <View style={{flex: 1, position: 'absolute'}}></View>
        </View>
      </>
    );
  }
}
const mapStateToProps = (state) => ({
  events: getEventsState(state),
});

const mapDispatchToProps = {
  fetchEvents,
};
const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(withConnect)(MapScreen);
