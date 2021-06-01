import moment from 'moment';
import firebase from '@react-native-firebase/app';

export const dateToTime = (time) => moment(time.toDate()).format('HH:mm');

export const dateToDay = (date, type = 'Timestamp') =>
  type === 'Date'
    ? moment(date).format('l')
    : moment(date.toDate()).format('l');

export const dateToTimestamp = (date) =>
  firebase.firestore.Timestamp.fromDate(new Date(date));

export const timestampToDate = (date) => moment(date.toDate());

export const getDayRange = (day) => {
  const start_day = moment(day.toDate());
  start_day.set({hour: 0, minute: 0, second: 0, millisecond: 0});

  const end_day = moment(day.toDate());
  end_day.set({hour: 23, minute: 59, second: 59, millisecond: 99});

  return [start_day.toDate(), end_day.toDate()];
};
