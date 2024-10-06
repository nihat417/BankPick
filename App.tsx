import React, { useState, useEffect } from 'react';
import {SafeAreaView,ScrollView,StatusBar,StyleSheet,Text,useColorScheme,View,} from 'react-native';
import { StyledText } from './src/common/StyledComponents';
import Login from './src/screens/auth/login/login';
import AuthNavigation from './src/screens/navigation/authNavigation/authNavigation';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Register from './src/screens/auth/register/register';
import MainNavTab from './src/screens/navigation/mainnavtab/mainNavTab';

function App(): React.JSX.Element {
  const [authorized,setAuthorized] = useState(true);
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <SafeAreaProvider>
      <SafeAreaView  style={{ flex: 1, backgroundColor: '#161622' }}>
          <StatusBar backgroundColor='#161622'/>
          {authorized ? <MainNavTab/> : <AuthNavigation/>}
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

export default App;
