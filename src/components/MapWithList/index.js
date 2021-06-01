import React from 'react';
import {View, FlatList} from 'react-native';
import MapView, {Marker, Callout} from 'react-native-maps';
import {EventItem} from '../EventItem';
import style from './style';

export class MapWithList extends React.Component {
  renderItem = ({item, key}) => (
    <View style={{width: '100%'}}>
      <EventItem title={item.title} key={key} />
    </View>
  );

  renderMarker = () => (
    <Marker
      coordinate={{
        latitude: 37.78825,
        longitude: -122.4324,
      }}
      centerOffset={{x: -18, y: -60}}
      anchor={{x: 0.69, y: 1}}></Marker>
  );

  render() {
    const {data} = this.props;
    return (
      <View style={{flex: 1, width: '100%'}}>
        <View
          style={{
            height: '100%',
            width: '100%',
            backgroundColor: 'red',
            flexGrow: 1,
          }}></View>
        <MapView
          initialRegion={{
            latitude: 37.78825,
            longitude: -122.4324,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
          // scrollEnabled={false}
          showsUserLocation
          style={style.mapView}>
          {this.renderMarker()}
        </MapView>
        <FlatList
          // style={style.listStyle}
          contentContainerStyle={style.listContainerStyle}
          data={data}
          renderItem={this.renderItem}
          keyExtractor={(item) => item.id}
          // horizontal
          // showsHorizontalScrollIndicator={false}
        />
      </View>
    );
  }
}

/* <View style={style.wrapper}>
<MapView
  initialRegion={{
    latitude: 37.78825,
    longitude: -122.4324,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  }}
  // scrollEnabled={false}
  showsUserLocation
  style={style.mapView}>
  {this.renderMarker()}
</MapView>
<FlatList
  style={style.listStyle}
  contentContainerStyle={style.listContainerStyle}
  data={data}
  renderItem={this.renderItem}
  keyExtractor={(item) => item.id}
  horizontal
  showsHorizontalScrollIndicator={false}
/>
</View> */
