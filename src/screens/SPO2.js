import React from 'react';
import {View, StyleSheet, Text} from 'react-native';

import {icons, images, SIZES, COLORS, FONTS} from '../helpers';

import {
  LineChart,
  BarChart,
  PieChart,
  ProgressChart,
  ContributionGraph,
  StackedBarChart,
} from 'react-native-chart-kit';
export default function Glucose() {
  return (
    <View style={styles.mainBody}>
      <Text style={styles.title}>SPO2 Info</Text>
      <LineChart
        data={{
          labels: ['January', 'February', 'March', 'April', 'May', 'June'],
          datasets: [
            {
              data: [
                Math.random() * 100,
                Math.random() * 100,
                Math.random() * 100,
                Math.random() * 100,
                Math.random() * 100,
                Math.random() * 100,
              ],
            },
          ],
        }}
        width={SIZES.width * 0.9} // from react-native
        height={220}
        // yAxisLabel="$"
        // yAxisSuffix="k"
        yAxisInterval={1} // optional, defaults to 1
        chartConfig={{
          backgroundColor: COLORS.primary,
          backgroundGradientFrom: COLORS.primary,
          backgroundGradientTo: COLORS.secondary,
          decimalPlaces: 2, // optional, defaults to 2dp
          color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
          labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
          style: {
            borderRadius: 16,
          },
          propsForDots: {
            r: '6',
            strokeWidth: '2',
            stroke: '#ffa726',
          },
        }}
        bezier
        style={{
          marginVertical: 8,
          borderRadius: 16,
        }}
      />
      <ContributionGraph
        values={[
          {date: '2017-01-02', count: 1},
          {date: '2017-01-03', count: 2},
          {date: '2017-01-04', count: 3},
          {date: '2017-01-05', count: 4},
          {date: '2017-01-06', count: 5},
          {date: '2017-01-30', count: 2},
          {date: '2017-01-31', count: 3},
          {date: '2017-03-01', count: 2},
          {date: '2017-04-02', count: 4},
          {date: '2017-03-05', count: 2},
          {date: '2017-02-30', count: 4},
        ]}
        endDate={new Date('2017-04-01')}
        numDays={105}
        width={SIZES.width * 0.9}
        height={220}
        chartConfig={{
          backgroundColor: COLORS.primary,
          backgroundGradientFrom: COLORS.primary,
          backgroundGradientTo: COLORS.secondary,
          decimalPlaces: 2, // optional, defaults to 2dp
          color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
          labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
          style: {
            borderRadius: 16,
          },
          propsForDots: {
            r: '6',
            strokeWidth: '2',
            stroke: '#ffa726',
          },
        }}
      />
      <View style={styles.row}>
        <View>
          <View style={styles.rowFlex}>
            <Text style={styles.title1}>CRITICAL</Text>
            <Text style={styles.title1}>{'>'}90%</Text>
          </View>
          <View style={styles.rowFlex}>
            <Text style={styles.title1}>NORMAL</Text>
            <Text style={styles.title1}>{'>'}80%</Text>
          </View>
          <View style={styles.rowFlex}>
            <Text style={styles.title1}>Danger</Text>
            <Text style={styles.title1}>{'>'}70%</Text>
          </View>
        </View>
        <View style={styles.avgBox}>
          <Text style={styles.title2}>Your Average</Text>
          <Text style={styles.title2}>97</Text>
        </View>
      </View>
    </View>
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
  },
  mainBody: {
    flex: 1,
    alignItems: 'center',
  },
  title: {
    color: COLORS.black,
    fontWeight: 'bold',
    marginLeft: SIZES.width * 0.06,
    fontSize: 25,
  },
  title1: {
    color: COLORS.black,
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
