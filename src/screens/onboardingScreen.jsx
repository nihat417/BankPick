import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { FirstIntro, LastIntro, SecondIntro, StyledButton, StyledText, StyledView } from '../common/StyledComponents';

const OnboardingScreen = () => {
  return (
    <StyledView className='bg-[#161622] h-screen'>
        <StyledView className='mt-[150px] self-center'>
            <FirstIntro/>
            {/* <SecondIntro/>
            <LastIntro/> */}
        </StyledView>
        <StyledView>

        </StyledView>

        <StyledView className='self-center mt-[100px]'>
            <StyledText className='text-white text-center font-semibold text-[28px] mx-[80px]'>Fastest Payment in the world</StyledText>
            <StyledText className='text-[#7E848D] text-center font-semibold text-[14px] mx-[50px] my-[20px]'> Integrate multiple payment methoods to help you up the process quickly</StyledText>
        </StyledView>

        <StyledButton className='bg-[#0066FF] rounded-[15px] m-[20px] p-[20px]'>
            <StyledText className='text-white text-center'>Next </StyledText>
        </StyledButton>
    </StyledView>
  )
}

export default OnboardingScreen;