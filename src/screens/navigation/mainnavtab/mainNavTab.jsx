import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { TabBarVisibilityContext,TabBarVisibilityProvider } from '../../../contexts/TabBarVisibilityContext';

import React from 'react'
import NavTab from './navTab';
import Home from '../../main/home/home';
import Mycards from '../../main/mycards/myCards';
import Statistic from '../../main/statistics/statistic';
import SettingsScreen from '../../main/settingsScreen/settingsScreen';
import LanguageScreen from '../../main/settingsScreen/languageScreen';
import ProfileScreen from '../../main/settingsScreen/profileScreen';
import PersonalInfo from '../../main/settingsScreen/personalInfo';
import AllCrads from '../../main/settingsScreen/allCrads';
import AddCards from '../../main/settingsScreen/components/addCards';
import ChangePassword from '../../main/settingsScreen/changePassword';
import PrivacyPolicy from '../../main/settingsScreen/privacyPolicy';
import AllTransactions from '../../main/statistics/allTransactions';
import SendMoney from '../../main/home/sendMoney';


const Tabs = createBottomTabNavigator();
const HomeStack = createStackNavigator();
const CardsStack = createStackNavigator();
const StaticsStack = createStackNavigator();
const SettingsStack = createStackNavigator();


const MyHomeStack = () => {
    return (
      <HomeStack.Navigator initialRouteName='HomePage'>
        <HomeStack.Screen options={{headerShown: false}} name="HomePage" component={Home}/>
        <HomeStack.Screen options={{headerShown: false}} name="SendMoneyScreen" component={SendMoney}/>
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
      <StaticsStack.Screen options={{headerShown:false}} name='AllTransactionsPage' component={AllTransactions}/>
    </StaticsStack.Navigator>
  )
};

const MySettingsStack = () =>{
  return(
    <SettingsStack.Navigator>
      <SettingsStack.Screen options={{headerShown:false}} name='SettingsScreen' component={SettingsScreen}/>
      <SettingsStack.Screen options={{headerShown:false}} name='LanguageScreen' component={LanguageScreen}/>
      <SettingsStack.Screen options={{headerShown:false}} name='ProfileScreen' component={ProfileScreen}/>
      <SettingsStack.Screen options={{headerShown:false}} name='PersonalInfoScreen' component={PersonalInfo}/>
      <SettingsStack.Screen options={{headerShown:false}} name='AllCradsScreen' component={AllCrads}/>
      <SettingsStack.Screen options={{headerShown:false}} name='AddCardsScreen' component={AddCards}/>
      <SettingsStack.Screen options={{headerShown:false}} name='ChangePasswordScreen' component={ChangePassword}/>
      <SettingsStack.Screen options={{headerShown:false}} name='PrivacyPolicyScreen' component={PrivacyPolicy}/>
    </SettingsStack.Navigator>
  )
};

const MainNavTab = () => {
  return (
    <TabBarVisibilityProvider>
      <TabBarVisibilityContext.Consumer>
        {({isTabBarVisible})=>(
          <NavigationContainer>
              <Tabs.Navigator initialRouteName="Home" screenOptions={{headerShown: false}} 
                tabBar={props => isTabBarVisible ? <NavTab {...props} /> : null}>
                  <Tabs.Screen name="Home" component={MyHomeStack}/>
                  <Tabs.Screen name="Cards" component={MyCardsStack}/>
                  <Tabs.Screen name="Statistics" component={MyStaticsStack}/>
                  <Tabs.Screen name="SettingsPg" component={MySettingsStack}/>
              </Tabs.Navigator>
          </NavigationContainer>
        )}
      </TabBarVisibilityContext.Consumer>
    </TabBarVisibilityProvider>
  )
}

export default MainNavTab;