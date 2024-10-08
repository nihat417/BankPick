import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { GoBackSvg, LogOut, RightArrowSvg, StyledButton, StyledText, StyledView } from '../../../common/StyledComponents';

const SettingsScreen = () => {
  return (
    <StyledView className='bg-[#161622] h-screen'>


        {/* header */}
        <StyledView className='flex-row justify-between mx-[20px] my-[40px] items-center'>
            <StyledButton>
                <GoBackSvg/>
            </StyledButton>
            <StyledText className='text-white text-[18px]'>Settings</StyledText>
            <StyledButton>
                <LogOut/>
            </StyledButton>
        </StyledView>

        <StyledText className='text-[#A2A2A7] text-[15px] self-start mx-[30px] my-[20px]'>General</StyledText>


        <StyledButton className='flex-row justify-between mx-[20px] p-[10px] border-b-[1px] border-[#232533]'>
            <StyledText className='text-white text-[17px]'>Language</StyledText>
            <StyledView className='flex-row'>
                <StyledText className='mx-[10px] text-[14px] text-[#707070]'>English</StyledText>
                <RightArrowSvg/>
            </StyledView>
        </StyledButton>

        <StyledButton className='flex-row justify-between mx-[20px] mt-[20px] p-[10px] border-b-[1px] border-[#232533]'>
            <StyledText className='text-white text-[17px]'>My Profile</StyledText>
            <RightArrowSvg/>
        </StyledButton>

        <StyledButton className='flex-row justify-between mx-[20px] mt-[20px] p-[10px] border-b-[1px] border-[#232533]'>
            <StyledText className='text-white text-[17px]'>Contact Us</StyledText>
            <RightArrowSvg/>
        </StyledButton>

        <StyledText className='text-[#A2A2A7] text-[15px] self-start mx-[30px] my-[20px]'>Security</StyledText>


        <StyledButton className='flex-row justify-between mx-[20px]  p-[10px] border-b-[1px] border-[#232533]'>
            <StyledText className='text-white text-[17px]'>Change Password</StyledText>
            <RightArrowSvg/>
        </StyledButton>

        <StyledButton className='flex-row justify-between mx-[20px] mt-[20px] p-[10px] border-b-[1px] border-[#232533]'>
            <StyledText className='text-white text-[17px]'>Privacy Policy</StyledText>
            <RightArrowSvg/>
        </StyledButton>

        <StyledText className='text-[#A2A2A7] text-[14px] self-start mx-[30px] my-[20px]'>Choose what data you share with us</StyledText>

        <StyledButton className='flex-row justify-between mx-[20px] p-[10px] border-b-[1px] border-[#232533]'>
            <StyledText className='text-white text-[17px]'>Biometric</StyledText>
            <RightArrowSvg/>
        </StyledButton>

    </StyledView>
  )
}

export default SettingsScreen;