import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react'
import NavTab from './navTab';
import Home from '../../main/home/home';


const Tabs = createBottomTabNavigator();
const HomeStack = createStackNavigator();
const MyCardsStack = createStackNavigator();
const StaticsStack = createStackNavigator();
const SettingsStack = createStackNavigator();


const MyHomeStack = () => {
    return (
      <HomeStack.Navigator initialRouteName='HomePage'>
        <HomeStack.Screen options={{headerShown: false}} name="HomePage" component={Home}/>
      </HomeStack.Navigator>
    );
  };

const MainNavTab = () => {
  return (
    <NavigationContainer>
        <Tabs.Navigator initialRouteName="Home" screenOptions={{headerShown: false}} tabBar={props => <NavTab {...props} />}>
            <Tabs.Screen name="Home" component={MyHomeStack}/>
        </Tabs.Navigator>
    </NavigationContainer>
  )
}

export default MainNavTab;