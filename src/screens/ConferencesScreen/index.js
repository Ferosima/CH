import React from 'react';
import {FlatList, Text, TouchableOpacity, View, Modal} from 'react-native';
import {Icon} from 'react-native-elements';
import {ScrollView} from 'react-native-gesture-handler';
import {connect} from 'react-redux';
import {compose} from 'redux';
import {EventItem} from '../../components/EventItem';
import {colors} from '../../const/colors';
import {fetchEvents} from '../../store/actions/events';
import {getRootState} from '../../store/selectors/events';
import style from './style';
import {ItemInfo} from '../../components/ItemInfo';
import {FilterSeachBar} from '../../components/FilterSearchBar';

class Conferences extends React.Component {
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

  renderHeader = () => (
    <>
      <View style={style.headerWrapper}>
        <View style={{paddingVertical: 20}}></View>
        <View style={style.headerTextContainer}>
          <Text style={style.headerSubtitle}>Hello,Name</Text>
          <Text style={style.headerTitle}>Find Events for Yourself</Text>
        </View>
        <View style={style.countEventsWrapper}>
          <Text style={style.countEventsText}>
            You have 3 events in this week
          </Text>
          <TouchableOpacity style={style.countEventsButton}>
            <Text style={style.countEventsButtonText}>Go to calendar</Text>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );

  renderItemEvent = (item, index) => (
    <View style={style.itemListWrapper} key={index}>
      <EventItem data={item} onPress={this.onPressItem(index)} />
    </View>
  );

  renderEventList = () => {
    const {events} = this.props;
    return events.list.map(this.renderItemEvent);
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
        <ScrollView
          style={style.wrapper}
          contentContainerStyle={style.wrapperContentStyle}
          stickyHeaderIndices={[1]}>
          {this.renderHeader()}
          <FilterSeachBar />
          {this.renderEventList()}
        </ScrollView>
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

export default compose(withConnect)(Conferences);
