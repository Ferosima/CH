import firebase from '@react-native-firebase/app';
import '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import ReduxSagaFirebase from 'redux-saga-firebase';
import {call, put} from 'redux-saga/effects';
import {fetchEventsSuccess, fetchEventsFailed} from '../actions/events';

const firebaseApp = firebase.apps[0];
const rsf = new ReduxSagaFirebase(firebaseApp);

export function* fetchEvents() {
  try {
    yield put(
      fetchEventsSuccess([
        {
          title: 'Lorem ipsum dolor',
          date: '27.03.2021',
          time: '13:00-14:00',
          map: 'University Street, 27, Kherson',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce viverra purus at eros iaculis, sit amet interdum nulla porta. Curabitur dapibus nibh tempus, pretium magna et, eleifend elit...',
        },
        {
          title: 'Lorem ipsum dolor',
          date: '27.03.2021',
          time: '13:00-14:00',
          map: 'University Street, 27, Kherson',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce viverra purus at eros iaculis, sit amet interdum nulla porta. Curabitur dapibus nibh tempus, pretium magna et, eleifend elit...',
        },
        {
          title: 'Lorem ipsum dolor',
          date: '27.03.2021',
          time: '13:00-14:00',
          map: 'University Street, 27, Kherson',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce viverra purus at eros iaculis, sit amet interdum nulla porta. Curabitur dapibus nibh tempus, pretium magna et, eleifend elit...',
        },
        {
          title: 'Lorem ipsum dolor',
          date: '27.03.2021',
          time: '13:00-14:00',
          map: 'University Street, 27, Kherson',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce viverra purus at eros iaculis, sit amet interdum nulla porta. Curabitur dapibus nibh tempus, pretium magna et, eleifend elit...',
        },
        {
          title: 'Lorem ipsum dolor',
          date: '27.03.2021',
          time: '13:00-14:00',
          map: 'University Street, 27, Kherson',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce viverra purus at eros iaculis, sit amet interdum nulla porta. Curabitur dapibus nibh tempus, pretium magna et, eleifend elit...',
        },
        {
          title: 'Lorem ipsum dolor',
          date: '27.03.2021',
          time: '13:00-14:00',
          map: 'University Street, 27, Kherson',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce viverra purus at eros iaculis, sit amet interdum nulla porta. Curabitur dapibus nibh tempus, pretium magna et, eleifend elit...',
        },
        {
          title: 'Lorem ipsum dolor',
          date: '27.03.2021',
          time: '13:00-14:00',
          map: 'University Street, 27, Kherson',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce viverra purus at eros iaculis, sit amet interdum nulla porta. Curabitur dapibus nibh tempus, pretium magna et, eleifend elit...',
        },
      ]),
    );
  } catch (error) {
    console.log('FETCH EVENTS', error);
    yield put(fetchEventsFailed(errors));
  }
}
