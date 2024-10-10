import React, { useState } from 'react';
import { StyledView,GoBackSvg,StyledText,StyledButton,PasswordSvg,StyledInput,PasswordEyeOffSvg,PasswordEyeOnSvg } from '../../../common/StyledComponents';
import { useNavigation } from '@react-navigation/native';

const ChangePassword = () => {
    const [isPasswordVisible, setPasswordVisible] = useState(false);
    const navigation = useNavigation();

    const togglePasswordVisibility = () => {
        setPasswordVisible(!isPasswordVisible);
      };

  return (
    <StyledView className='bg-[#161622] h-screen'>

        {/* header */}
        <StyledView className='flex-row justify-between mx-[20px] my-[40px] items-center'>
            <StyledButton onPress={()=>navigation.goBack()}>
                <GoBackSvg/>
            </StyledButton>
            <StyledText className='mr-[50px] text-white text-[18px]'>Change Password</StyledText>
            <StyledView/>
        </StyledView>

        <StyledView className='mx-[30px] mt-[10px]'>
            <StyledText className='text-[15px] text-[#A2A2A7]'>Current Password</StyledText>
            <StyledView className="flex-row relative w-full mr-[20px]">
              <PasswordSvg className="absolute top-1/3" />
              <StyledInput className="border-b-[1px] text-white text-[15px] border-b-[#232533] w-full pl-10" placeholderTextColor="#A2A2A7" placeholder="Enter your password" secureTextEntry={!isPasswordVisible}/>
              <StyledButton onPress={togglePasswordVisibility} className="absolute top-1/3 right-3">
                {isPasswordVisible ? (<PasswordEyeOnSvg className="absolute right-3" />) : (<PasswordEyeOffSvg className="absolute right-3" />)}
              </StyledButton>
            </StyledView>
        </StyledView>

        <StyledView className='mx-[30px] mt-[10px]'>
            <StyledText className='text-[15px] text-[#A2A2A7]'>New Password</StyledText>
            <StyledView className="flex-row relative w-full mr-[20px]">
              <PasswordSvg className="absolute top-1/3" />
              <StyledInput className="border-b-[1px] text-white text-[15px] border-b-[#232533] w-full pl-10" placeholderTextColor="#A2A2A7" placeholder="Enter your password" secureTextEntry={!isPasswordVisible}/>
              <StyledButton onPress={togglePasswordVisibility} className="absolute top-1/3 right-3">
                {isPasswordVisible ? (<PasswordEyeOnSvg className="absolute right-3" />) : (<PasswordEyeOffSvg className="absolute right-3" />)}
              </StyledButton>
            </StyledView>
        </StyledView>

        <StyledView className='mx-[30px] mt-[10px]'>
            <StyledText className='text-[15px] text-[#A2A2A7]'>Cofirm New Password</StyledText>
            <StyledView className="flex-row relative w-full mr-[20px]">
              <PasswordSvg className="absolute top-1/3" />
              <StyledInput className="border-b-[1px] text-white text-[15px] border-b-[#232533] w-full pl-10" placeholderTextColor="#A2A2A7" placeholder="Enter your password" secureTextEntry={!isPasswordVisible}/>
              <StyledButton onPress={togglePasswordVisibility} className="absolute top-1/3 right-3">
                {isPasswordVisible ? (<PasswordEyeOnSvg className="absolute right-3" />) : (<PasswordEyeOffSvg className="absolute right-3" />)}
              </StyledButton>
            </StyledView>
        </StyledView>

        <StyledButton className='mx-[30px] my-[20px] bg-[#0066FF] p-[20px] rounded-[15px]'>
            <StyledText className='text-white text-[16px] text-center'>Change Password</StyledText>
        </StyledButton>

    </StyledView>
  )
}

export default ChangePassword;