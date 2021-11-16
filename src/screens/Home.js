/* eslint-disable react-native/no-inline-styles */
import React, {useState, useEffect} from 'react';
import {
  View,
  Image,
  TouchableOpacity,
  ImageBackground,
  Text,
  StyleSheet,
} from 'react-native';
import {icons, images, SIZES, COLORS, FONTS} from '../helpers';
import Icon from 'react-native-vector-icons/Ionicons';
import LinearGradient from 'react-native-linear-gradient';

export default function Home({navigation}) {
  useEffect(() => {}, []);

  return (
    <ImageBackground
      style={styles.container}
      source={require('../assets/home.jpg')}>
      <LinearGradient
        colors={['transparent', COLORS.black, COLORS.black]}
        style={styles.overlay}>
        <View
          style={{
            marginTop: SIZES.height * 0.15,
          }}>
          <Text style={styles.title2}>Hello Jeffry!</Text>
          <Text style={styles.title1}>What's new today?</Text>
        </View>
        <View style={styles.rowNorm}>
          <TouchableOpacity
            onPress={() => navigation.navigate('Activity')}
            style={styles.slide1}>
            <View style={styles.centerFlex}>
              <Image
                source={require('../assets/reminder.png')}
                resizeMode="contain"
                style={{
                  width: SIZES.width * 0.15,
                  height: SIZES.width * 0.15,
                }}
              />
              <Text style={styles.text001}>Activity</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate('BloodPre')}
            style={styles.slide1}>
            <View style={styles.centerFlex}>
              <Image
                source={require('../assets/blood.png')}
                resizeMode="contain"
                style={{
                  width: SIZES.width * 0.15,
                  height: SIZES.width * 0.15,
                }}
              />
              <Text style={styles.text001}>Blood pressure</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate('Glucose')}
            style={styles.slide1}>
            <View style={styles.centerFlex}>
              <Image
                source={require('../assets/glu.png')}
                resizeMode="contain"
                style={{
                  width: SIZES.width * 0.15,
                  height: SIZES.width * 0.15,
                }}
              />
              <Text style={styles.text001}>Glucose Info</Text>
            </View>
          </TouchableOpacity>
        </View>
        <View style={styles.rowNorm2}>
          <TouchableOpacity
            // onPress={() => navigation.navigate('Instruction')}
            style={styles.slide1}>
            <View style={styles.centerFlex}>
              <Image
                source={require('../assets/instruction.png')}
                resizeMode="contain"
                style={{
                  width: SIZES.width * 0.15,
                  height: SIZES.width * 0.15,
                }}
              />
              <Text style={styles.text001}>Instructions</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate('Chat')}
            style={styles.slide1}>
            <View style={styles.centerFlex}>
              <Image
                source={require('../assets/chat.png')}
                resizeMode="contain"
                style={{
                  width: SIZES.width * 0.15,
                  height: SIZES.width * 0.15,
                }}
              />
              <Text style={styles.text001}>Chat Bot</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate('SPO2')}
            style={styles.slide1}>
            <View style={styles.centerFlex}>
              <Image
                source={require('../assets/spo2.png')}
                resizeMode="contain"
                style={{
                  width: SIZES.width * 0.15,
                  height: SIZES.width * 0.15,
                }}
              />
              <Text style={styles.text001}>SPO2 Info</Text>
            </View>
          </TouchableOpacity>
        </View>
      </LinearGradient>
    </ImageBackground>
  );
}
const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: COLORS.black},
  slide1: {
    // backgroundColor: COLORS.secondary,
    borderColor: COLORS.secondary,
    borderWidth: 0.6,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 2,
    flex: 1,
    maxWidth: SIZES.width * 0.27,
    height: SIZES.width * 0.25,
    shadowColor: COLORS.secondary,
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowOpacity: 1,
    shadowRadius: 0.84,
    elevation: 45,
  },
  centerFlex: {
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
  },
  title2: {
    color: COLORS.white,
    fontWeight: 'bold',
    marginLeft: SIZES.width * 0.06,
    fontSize: 25,
  },
  text001: {
    color: COLORS.white,
    fontSize: 13,
    fontWeight: 'bold',
    marginTop: 5,
  },
  overlay: {
    marginTop: SIZES.height * 0.2,
    height: SIZES.height * 0.8,
    // alignItems: 'center',
  },
  title1: {
    color: COLORS.white,
    fontWeight: 'bold',
    fontSize: 30,
    marginLeft: SIZES.width * 0.06,
  },
  rowNorm: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    flexWrap: 'wrap',
    maxWidth: SIZES.width,
    marginTop: SIZES.height * 0.1,
    marginLeft: SIZES.width * 0.06,
    marginRight: SIZES.width * 0.06,
  },
  rowNorm2: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    maxWidth: SIZES.width,
    marginTop: SIZES.height * 0.02,
    marginLeft: SIZES.width * 0.06,
    marginRight: SIZES.width * 0.06,
  },
});
