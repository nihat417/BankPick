import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react'
import NavTab from './navTab';
import Home from '../../main/home/home';
import Mycards from '../../main/mycards/myCards';


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
}

const MainNavTab = () => {
  return (
    <NavigationContainer>
        <Tabs.Navigator initialRouteName="Home" screenOptions={{headerShown: false}} tabBar={props => <NavTab {...props} />}>
            <Tabs.Screen name="Home" component={MyHomeStack}/>
            <Tabs.Screen name="Cards" component={MyCardsStack}/>
        </Tabs.Navigator>
    </NavigationContainer>
  )
}

export default MainNavTab;