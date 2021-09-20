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
      <Text style={styles.title}>Blood Glucose Info</Text>
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
      <ProgressChart
        data={{
          labels: ['Swim', 'Bike', 'Run'], // optional
          data: [0.4, 0.6, 0.8],
        }}
        width={SIZES.width * 0.9}
        height={220}
        strokeWidth={16}
        radius={32}
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
        hideLegend={false}
        style={{
          marginVertical: 8,
          borderRadius: 16,
        }}
      />
      <View style={styles.row}>
        <View>
          <View style={styles.rowFlex}>
            <Text style={styles.title1} />
            <Text style={styles.title1}>Min</Text>
            <Text style={styles.title1}>Max</Text>
          </View>
          <View style={styles.rowFlex}>
            <Text style={styles.title1}>Normal</Text>
            <Text style={styles.title1}>60</Text>
            <Text style={styles.title1}>70</Text>
          </View>
          <View style={styles.rowFlex}>
            <Text style={styles.title1}>Medium</Text>
            <Text style={styles.title1}>60</Text>
            <Text style={styles.title1}>70</Text>
          </View>
          <View style={styles.rowFlex}>
            <Text style={styles.title1}>High</Text>
            <Text style={styles.title1}> {'>'}120</Text>
          </View>
        </View>
        <View style={styles.avgBox}>
          <Text style={styles.title2}>Your Average</Text>
          <Text style={styles.title2}>109</Text>
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
    width: SIZES.width * 0.6,
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
    fontSize: 15,
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
  },
});
