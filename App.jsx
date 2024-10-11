import React, { useState, useEffect } from 'react';
import {SafeAreaView,ScrollView,StatusBar,StyleSheet,Text,useColorScheme,View,} from 'react-native';
import AuthNavigation from './src/screens/navigation/authNavigation/authNavigation';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import AsyncStorage from '@react-native-async-storage/async-storage';
import MainNavTab from './src/screens/navigation/mainnavtab/mainNavTab';
import IntroScreen from './src/screens/onboardingScreen';

const App = () => {
  const [authorized,setAuthorized] = useState(true);
  const [isFirstLaunch, setIsFirstLaunch] = useState(null);
  const isDarkMode = useColorScheme() === 'dark';

  useEffect(() => {
    checkFirstLaunch();
  }, []);

  const checkFirstLaunch = async () => {
    try {
      const hasLaunched = await AsyncStorage.getItem('hasLaunched');
      if (hasLaunched === null) 
        setIsFirstLaunch(true); 
       else 
        setIsFirstLaunch(false);
      
    } catch (error) {
      console.error('Error checking first launch:', error);
    }
  };

  const handleFinishOnboarding = async () => {
    try {
      await AsyncStorage.setItem('hasLaunched', 'true'); 
      setIsFirstLaunch(false); 
    } catch (error) {
      console.error('Error saving first launch status:', error);
    }
  };

  return (
    <SafeAreaProvider>
      <SafeAreaView  style={{ flex: 1, backgroundColor: '#161622' }}>
          <StatusBar backgroundColor='#161622'/>
          {isFirstLaunch  ? (
            <IntroScreen onFinish={handleFinishOnboarding} />
          ):(authorized ? <MainNavTab/> : <AuthNavigation/>)}
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

export default App;
