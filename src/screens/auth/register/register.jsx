import React, { useState } from 'react';
import { BankPickLogoSvg, EmailInputSvg, GoBackSvg, PasswordEyeOffSvg, PasswordEyeOnSvg, PasswordSvg, RegisterPhoneSvg, StyledButton, StyledInput, StyledText, StyledView } from '../../../common/StyledComponents';
import { useNavigation } from '@react-navigation/native';

const Register = () => {
    const [isPasswordVisible, setPasswordVisible] = useState(false);
    const navigation = useNavigation();

    const togglePasswordVisibility = () => {
      setPasswordVisible(!isPasswordVisible);
    };

  return (
    <StyledView className='bg-[#161622] h-screen'>
        <StyledButton onPress={()=>navigation.goBack()} className='mt-[50px] mx-[20px]'>
            <GoBackSvg/>
        </StyledButton>
        <StyledView className='mx-[20px] '>
          <StyledText className='text-[34px] text-white mt-[50px] mb-[50px]'>Sign Up</StyledText>

          <StyledView className='mb-[10px]'>
            <StyledText className='text-[15px] text-[#A2A2A7]'>Full Name</StyledText>
            <StyledView className="relative w-full mr-[20px]">
              <EmailInputSvg className="absolute top-1/3" />
              <StyledInput className="border-b-[1px] text-white text-[15px] border-b-[#232533] w-full pl-10" placeholderTextColor="#A2A2A7" placeholder="Tanya Myroniuk" keyboardType="email-address" autoCapitalize="none"/>
            </StyledView>
          </StyledView>

          <StyledView className='mt-[10px]'>
            <StyledText className='text-[15px] text-[#A2A2A7]'>Phone Number</StyledText>
            <StyledView className="relative w-full mr-[20px]">
              <RegisterPhoneSvg className="absolute top-1/3" />
              <StyledInput className="border-b-[1px] text-white text-[15px] border-b-[#232533] w-full pl-10" placeholderTextColor="#A2A2A7" placeholder="+8801712663389" keyboardType="number-pad" autoCapitalize="none"/>
            </StyledView>
          </StyledView>

          <StyledView className='mt-[10px]'>
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
            <StyledText className='text-white text-[16px] text-center py-[20px]'>Sign Up</StyledText>
          </StyledButton>

          <StyledView className='flex-row justify-center py-[20px]'>
            <StyledText className='text-white text-[16px]'>Already have an account.</StyledText>
            <StyledButton onPress={()=>navigation.navigate('LoginScreen')}><StyledText className='text-[#0066FF] text-[16px]'> Sign Up</StyledText></StyledButton>
          </StyledView>
        </StyledView>
    </StyledView>
  )
}

export default Register;