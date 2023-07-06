import React from 'react';
import {
  Button,
  View,
  Text,
  Image,
  Linking,
  FlatList,
  Platform,
  TouchableHighlight,
  TextInput,
  Dimensions,
  ScrollView,
  StyleSheet,
} from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

// Tabs
import Profile from './pages/Profile';
import Age from './pages/Age';
import BMI from './pages/BMI';

const ProfileStack = createNativeStackNavigator();
function ProfileStackScreen() {
  return (
    <ProfileStack.Navigator>
      <ProfileStack.Screen name="Profile" component={Profile} />
    </ProfileStack.Navigator>
  );
}

const AgeStack = createNativeStackNavigator();
function AgeStackScreen() {
  return (
    <AgeStack.Navigator>
      <AgeStack.Screen name="Age" component={Age} />
    </AgeStack.Navigator>
  );
}

const BMIStack = createNativeStackNavigator();
function BMIStackScreen() {
  return (
    <BMIStack.Navigator>
      <BMIStack.Screen name="BMI" component={BMI} />
    </BMIStack.Navigator>
  );
}

function AppTabs() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          if (route.name === 'Profile') {
            return <Ionicons name="person" color={color} size={26} />;
          }
          if (route.name === 'Age') {
            return <Ionicons name="receipt" color={color} size={26} />;
          }
          if (route.name === 'BMI') {
            return <Ionicons name="alert-circle" color={color} size={26} />;
          }
        },
        tabBarStyle: {
          backgroundColor: 'white',
          shadowOffset: {
            width: 1,
            height: 1,
          },
          shadowColor: '#000',
          shadowOpacity: 0.3,
          shadowRadius: 3,
        },
        tabBarBackground: () => <></>,
        tabBarInactiveTintColor: 'gray',
        tabBarActiveTintColor: 'black',
        headerShown: false,
      })}>
      <Tab.Screen name="Profile" component={ProfileStackScreen} />
      <Tab.Screen name="Age" component={AgeStackScreen} />
      <Tab.Screen name="BMI" component={BMIStackScreen} />
    </Tab.Navigator>
  );
}

export default class Root extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="App"
            component={AppTabs}
            options={({ navigation, route }) => ({
              header: (props) => null,
            })}
          />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}
