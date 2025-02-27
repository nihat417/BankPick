import React, { useState } from 'react';
import { BankPickLogoSvg, EmailInputSvg, PasswordEyeOffSvg, PasswordEyeOnSvg, PasswordSvg, StyledButton, StyledInput, StyledText, StyledView } from '../../../common/StyledComponents';
import { StatusBar } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Login = () => {
  const [isPasswordVisible, setPasswordVisible] = useState(false);
  const navigation = useNavigation();

  const togglePasswordVisibility = () => {
    setPasswordVisible(!isPasswordVisible);
  };

  return (
    <StyledView className='bg-[#161622] h-screen'>
        <StyledView className='mx-[20px] '>
          <StyledText className='text-[34px] text-white mt-[100px] mb-[50px]'>Sign In</StyledText>

          <StyledView className='mb-[10px]'>
            <StyledText className='text-[15px] text-[#A2A2A7]'>Email Address</StyledText>
            <StyledView className="relative w-full mr-[20px]">
              <EmailInputSvg className="absolute top-1/3" />
              <StyledInput className="border-b-[1px] text-white text-[15px] border-b-[#232533] w-full pl-10" placeholderTextColor="#A2A2A7" placeholder="admin@gmail.com" keyboardType="email-address" autoCapitalize="none"/>
            </StyledView>
          </StyledView>

          <StyledView className='my-[15px]'>
            <StyledText className='text-[15px] text-[#A2A2A7]'>Password</StyledText>
            <StyledView className="flex-row relative w-full mr-[20px]">
              <PasswordSvg className="absolute top-1/3" />
              <StyledInput className="border-b-[1px] text-white text-[15px] border-b-[#232533] w-full pl-10" placeholderTextColor="#A2A2A7" placeholder="Enter your password" secureTextEntry={!isPasswordVisible}/>
              <StyledButton onPress={togglePasswordVisibility} className="absolute top-1/3 right-3">
                {isPasswordVisible ? (<PasswordEyeOnSvg className="absolute right-3" />) : (<PasswordEyeOffSvg className="absolute right-3" />)}
              </StyledButton>
            </StyledView>
          </StyledView>

          <StyledButton className='bg-[#0066FF] rounded-[15px] mt-[20px]'>
            <StyledText className='text-white text-[16px] text-center py-[20px]'>Sign In</StyledText>
          </StyledButton>

          <StyledView className='flex-row justify-center py-[20px]'>
            <StyledText className='text-white text-[16px]'>I’m a new user.</StyledText>
            <StyledButton onPress={()=>navigation.navigate('RegisterScreen')}><StyledText className='text-[#0066FF] text-[16px]'> Sign In</StyledText></StyledButton>
          </StyledView>
        </StyledView>
    </StyledView>
  );
};

export default Login;
