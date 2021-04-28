import Geocoder from 'react-native-geocoding';

export const geocoder = async ({_latitude, _longitude}) => {
  const snapshot = await Geocoder.from(_latitude, _longitude);
  return snapshot.results[0].formatted_address;
};
