import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {  StyledView,GoBackSvg,StyledText,StyledButton } from '../../../common/StyledComponents';
import { useNavigation } from '@react-navigation/native';

const PrivacyPolicy = () => {
    const navigation = useNavigation();
  return (
    <StyledView className='bg-[#161622] h-screen'>

        {/* header */}
        <StyledView className='flex-row justify-between mx-[20px] my-[40px] items-center'>
            <StyledButton onPress={()=>navigation.goBack()}>
                <GoBackSvg/>
            </StyledButton>
            <StyledText className='mr-[50px] text-white text-[18px]'>Terms & Condition</StyledText>
            <StyledView/>
        </StyledView>

        <StyledText className='m-[30px] text-[#A2A2A7]'>
            L15.1 Thank you for visiting our Application Doctor 24×7 and enrolling as a member.
        </StyledText>

        <StyledText className='m-[30px] text-[#A2A2A7]'>
            15.2 Your privacy is important to us. To better protect your privacy, we are providing this notice explaining our policy with regards to the information you share with us. This privacy policy related to the information we collect, online from Application, received through the email, by fax or telephone, or in person or in any other way and retain and use for the purpose of providing you services. If you do not agree to the terms in this Policy, we kindly ask you not to use these portals and/or sign the contract document.
        </StyledText>

        <StyledText className='m-[30px] text-[#A2A2A7]'>
            15.3 In order to use the services of this Application, You are required to register yourself by verifying the authorised device. This Privacy Policy applies to your information that we collect and receive on and through Doctor 24×7; it does not apply to practices of businesses that we do not own or control or people we do not employ.
        </StyledText>

        <StyledText className='m-[30px] text-[#A2A2A7]'>
            15.4 By using this Application, you agree to the terms of this Privacy Policy.
        </StyledText>

    </StyledView>
  )
}

export default PrivacyPolicy;