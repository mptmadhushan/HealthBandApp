import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import OnBoard from '../screens/OnBoard';
import LogIn from '../screens/LogIn';
import Home from '../screens/Home';
import Register from '../screens/Register';
import Chat from '../screens/Chat';
import Humidity from '../screens/Humidity';
import Water from '../screens/Water';
import Instruction from '../screens/Instruction';
import SPO2 from '../screens/SPO2';
import Activity from '../screens/Activity';
import {TapGestureHandler} from 'react-native-gesture-handler';

const Stack = createStackNavigator();

function MainStackNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="OnBoard"
        screenOptions={{
          headerShown: TapGestureHandler,
        }}>
        <Stack.Screen
          name="Home"
          options={{headerShown: false}}
          component={Home}
        />
        <Stack.Screen
          name="OnBoard"
          options={{headerShown: false}}
          component={OnBoard}
        />
        <Stack.Screen
          name="Instruction"
          options={{headerShown: false}}
          component={Instruction}
        />
        <Stack.Screen
          name="LogIn"
          options={{headerShown: false}}
          component={LogIn}
        />
        <Stack.Screen
          name="Activity"
          options={{headerShown: false}}
          component={Activity}
        />
        <Stack.Screen
          name="Humidity"
          options={{headerShown: false}}
          component={Humidity}
        />
        <Stack.Screen
          name="Register"
          options={{headerShown: false}}
          component={Register}
        />
        <Stack.Screen
          name="Chat"
          options={{headerShown: false}}
          component={Chat}
        />
        <Stack.Screen
          name="Water"
          options={{headerShown: false}}
          component={Water}
        />
        <Stack.Screen
          name="SPO2"
          options={{headerShown: false}}
          component={SPO2}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default MainStackNavigator;
