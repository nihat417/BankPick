import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react'
import NavTab from './navTab';
import Home from '../../main/home/home';
import Mycards from '../../main/mycards/myCards';
import Statistic from '../../main/statistics/statistic';
import SettingsScreen from '../../main/settingsScreen/settingsScreen';
import LanguageScreen from '../../main/settingsScreen/languageScreen';
import ProfileScreen from '../../main/settingsScreen/profileScreen';


const Tabs = createBottomTabNavigator();
const HomeStack = createStackNavigator();
const CardsStack = createStackNavigator();
const StaticsStack = createStackNavigator();
const SettingsStack = createStackNavigator();


const MyHomeStack = () => {
    return (
      <HomeStack.Navigator initialRouteName='HomePage'>
        <HomeStack.Screen options={{headerShown: false}} name="HomePage" component={Home}/>
      </HomeStack.Navigator>
    );
  };

const MyCardsStack = () =>{
  return(
    <CardsStack.Navigator>
      <CardsStack.Screen options={{headerShown:false}} name="CardPage" component={Mycards}/>
    </CardsStack.Navigator>
  )
};

const MyStaticsStack = () =>{
  return(
    <StaticsStack.Navigator>
      <StaticsStack.Screen options={{headerShown:false}} name='StatisticsPage' component={Statistic}/>
    </StaticsStack.Navigator>
  )
};

const MySettingsStack = () =>{
  return(
    <SettingsStack.Navigator>
      <SettingsStack.Screen options={{headerShown:false}} name='SettingsScreen' component={SettingsScreen}/>
      <SettingsStack.Screen options={{headerShown:false}} name='LanguageScreen' component={LanguageScreen}/>
      <SettingsStack.Screen options={{headerShown:false}} name='ProfileScreen' component={ProfileScreen}/>
    </SettingsStack.Navigator>
  )
};

const MainNavTab = () => {
  return (
    <NavigationContainer>
        <Tabs.Navigator initialRouteName="Home" screenOptions={{headerShown: false}} tabBar={props => <NavTab {...props} />}>
            <Tabs.Screen name="Home" component={MyHomeStack}/>
            <Tabs.Screen name="Cards" component={MyCardsStack}/>
            <Tabs.Screen name="Statistics" component={MyStaticsStack}/>
            <Tabs.Screen name="SettingsPg" component={MySettingsStack}/>
        </Tabs.Navigator>
    </NavigationContainer>
  )
}

export default MainNavTab;