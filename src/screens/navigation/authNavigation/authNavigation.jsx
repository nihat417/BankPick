import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import Login from '../../auth/login/login';
import Register from '../../auth/register/register';
import IntroScreen from '../../onboardingScreen';

const AuthStack = createNativeStackNavigator();

const AuthNavigation = () =>{
    return(
    <NavigationContainer>
        <AuthStack.Navigator initialRouteName="LoginScreen" screenOptions={{headerShown:false}}>
            <AuthStack.Screen name='LoginScreen' component={Login}/>
            <AuthStack.Screen name='RegisterScreen' component={Register}/>
            <AuthStack.Screen name='IntroScreen' component={IntroScreen}/>
        </AuthStack.Navigator>
    </NavigationContainer>
    )
};

export default AuthNavigation;