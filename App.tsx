import React from 'react';
import {SafeAreaView,ScrollView,StatusBar,StyleSheet,Text,useColorScheme,View,} from 'react-native';
import { StyledText } from './src/common/StyledComponents';
import Login from './src/screens/auth/login/login';

function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <SafeAreaView>
      <Login/>
    </SafeAreaView>
  );
}

export default App;
