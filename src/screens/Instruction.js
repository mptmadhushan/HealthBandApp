import React from 'react';
import {View, Text, Image, StyleSheet, Platform, StatusBar} from 'react-native';
import CompleteFlatList from 'react-native-complete-flatlist';

import {icons, images, SIZES, COLORS, FONTS} from '../helpers';
import LinearGradient from 'react-native-linear-gradient';
const data1 = [
  {name: 'Fattah', status: 'Active', time: '8:10 PM', date: '1 Jan 2018'},
  {name: 'Syah', status: 'Active', time: '9:14 PM', date: '1 Dec 2018'},
  {name: 'Izzat', status: 'Active', time: '8:15 PM', date: '1 Jan 2018'},
  {name: 'Ali', status: 'Active', time: '8:10 PM', date: '1 Jan 2018'},
  {name: 'Abu', status: 'Active', time: '8:11 PM', date: '1 Jan 2018'},
  {name: 'Fitri', status: 'Active', time: '8:20 PM', date: '1 Jan 2018'},
  {name: 'Armi', status: 'Active', time: '8:33 PM', date: '1 Jan 2018'},
  {name: 'Eidit', status: 'Active', time: '9:10 PM', date: '1 Jan 2018'},
  {name: 'Hamdan', status: 'Active', time: '10:10 PM', date: '1 Jan 2018'},
  {
    name: 'Muhyiddeen',
    status: 'Blocked',
    time: '10:10 PM',
    date: '9 Feb 2018',
  },
];
export default function Glucose() {
  const cell = ({data, index}) => {
    const item = data.cleanData ? data.cleanData : data;

    console.log(data.cleanData);
    console.log(
      'data.cleanData will be not null if search bar is not empty and prop highlightColor is not empty. caution, data without search is not same like data with search due to implement the highlight component. data.cleanData is equal to data',
    );

    console.log('this is index number : ' + index);

    console.log(item + ' this is original data');

    return <Text>{data.name}</Text>;
  };
  return (
    // const renderItem = ({ item }) => (
    //   <Item title={item.title} />
    // );
    // <View style={styles.mainBody}>
    <LinearGradient
      colors={[COLORS.black, COLORS.primary, COLORS.black]}
      style={styles.mainBody}
      start={{x: 0, y: 0.5}}
      end={{x: 1, y: 0.5}}
      locations={[0, 0.7, 0.9]}>
      <Text style={styles.title}>DISEASE INSTRUCTION</Text>
      <CompleteFlatList
        searchKey={['name', 'status', 'time', 'date']}
        pullToRefreshCallback={() => {
          alert('refreshing');
        }}
        data={data1}
        renderSeparator={null}
        renderItem={cell}
      />
    </LinearGradient>
    // </View>
  );
}

const styles = StyleSheet.create({
  centerFlex: {
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
  },
  rowFlex: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    alignContent: 'flex-start',
    // width: SIZES.width * 0.5,
    marginRight: SIZES.width * 0.15,
    borderBottomWidth: 1,
    borderColor: COLORS.secondary,
    marginTop: SIZES.width * 0.04,
    shadowColor: COLORS.secondary,
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowOpacity: 1,
    shadowRadius: 0.84,
    elevation: 15,
  },
  avgBox: {
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
    backgroundColor: COLORS.primary,
    width: SIZES.width * 0.3,
    height: SIZES.width * 0.3,
    borderRadius: 16,
    shadowColor: COLORS.secondary,
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowOpacity: 1,
    shadowRadius: 0.84,
    elevation: 15,
  },
  mainBody: {
    flex: 1,
    alignItems: 'center',
  },
  title: {
    color: COLORS.white,
    fontWeight: 'bold',
    marginLeft: SIZES.width * 0.06,
    fontSize: 25,
    padding: 10,
  },
  title1: {
    color: COLORS.white,
    fontWeight: 'bold',
    fontSize: 17,
    width: SIZES.width * 0.2,
  },
  title2: {
    color: COLORS.white,
    fontWeight: 'bold',
    fontSize: 17,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    marginTop: 20,
  },
});
