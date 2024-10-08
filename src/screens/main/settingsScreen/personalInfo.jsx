import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { StyledScrollView,StyledView,StyledButton,GoBackSvg,StyledText, StyledImage, UserSvg, EmailInputSvg, RegisterPhoneSvg } from '../../../common/StyledComponents';
import { useNavigation } from '@react-navigation/native';

const PersonalInfo = () => {
    const navigation = useNavigation();
  return (
    <StyledScrollView className='bg-[#161622] h-screen'>

        {/* header */}
        <StyledView className='flex-row justify-between mx-[20px] my-[40px] items-center'>
            <StyledButton onPress={()=>navigation.goBack()}>
                <GoBackSvg/>
            </StyledButton>
            <StyledText className='mr-[50px] text-white text-[18px]'>Edit Profile</StyledText>
            <StyledView/>
        </StyledView>


        
        <StyledImage className='self-center w-[90px] h-[90px] rounded-full' source={require('../../../assets/images/mephoto.jpg')}/>
        <StyledText className='text-[#fff] text-center text-[17px] my-[10px]'>Tanya Myroniuk</StyledText>
        <StyledText className='text-[#7E848D] text-center text-[12px]'>Tanya Myroniuk</StyledText>


        <StyledText className='text-[#A2A2A7] text-[14px] mx-[30px] mt-[30px]'>Full Name</StyledText>
        <StyledView className='flex-row  mx-[20px] p-[10px] border-b-[1px] border-[#232533]'>
            <StyledButton className='mr-[10px]'>
                <UserSvg/>
            </StyledButton>
            <StyledText className='text-[#fff] text-[14px]'>Nihat Akremi</StyledText>
        </StyledView>

        <StyledText className='text-[#A2A2A7] text-[14px] mx-[30px] mt-[20px]'>Email Address</StyledText>
        <StyledView className='flex-row  mx-[20px] p-[10px] border-b-[1px] border-[#232533]'>
            <StyledButton className='mr-[10px]'>
                <EmailInputSvg/>
            </StyledButton>
            <StyledText className='text-[#fff] text-[14px]'>admin@gmail.com</StyledText>
        </StyledView>

        <StyledText className='text-[#A2A2A7] text-[14px] mx-[30px] mt-[20px]'>Phone Number</StyledText>
        <StyledView className='flex-row  mx-[20px] p-[10px] border-b-[1px] border-[#232533]'>
            <StyledButton className='mr-[10px]'>
                <RegisterPhoneSvg/>
            </StyledButton>
            <StyledText className='text-[#fff] text-[14px]'>055 000 00 00</StyledText>
        </StyledView>

        <StyledText className='text-[#A2A2A7] text-[14px] mx-[30px] mt-[20px]'>Birth Date</StyledText>
        <StyledView className='mx-[50px] mt-[20px] flex-row justify-between'>
            <StyledView className='border-b-[1px] border-[#232533] p-[10px]'>
                <StyledText className='text-[#fff] text-[14px]'>16</StyledText>
            </StyledView>
            <StyledView className='border-b-[1px] border-[#232533] p-[10px]'>
                <StyledText className='text-[#fff] text-[14px]'>May</StyledText>
            </StyledView>
            <StyledView className='border-b-[1px] border-[#232533] p-[10px]'>
                <StyledText className='text-[#fff] text-[14px]'>2003</StyledText>
            </StyledView>
        </StyledView>

    </StyledScrollView>
  )
}

export default PersonalInfo;