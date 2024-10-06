import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { CreditCardRectangleSvg, StyledImage, StyledText, StyledView, VisaCreditCardFront } from '../../../common/StyledComponents';

const Creditcard = () => {
  return (
    <StyledView className='relative'>
        <VisaCreditCardFront/>
        <StyledView className='absolute left-10 bottom-10'>
            <StyledText className='text-white text-[18px]'>4802   2215   ****   ****</StyledText>
            <StyledText className='text-white text-[14px] mt-[20px]'>Mellissa Mccarthy</StyledText>
        </StyledView>
    </StyledView>
  )
}

export default Creditcard;


