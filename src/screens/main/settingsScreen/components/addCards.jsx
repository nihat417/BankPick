import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { StyledView,StyledButton,GoBackSvg,StyledText, VisaCreditCardBack,UserSvg, StyledInput, PaymentFinanceSvg, PaymentSvg } from '../../../../common/StyledComponents';

const AddCards = () => {
  return (
    <StyledView className='bg-[#161622] h-screen'>

         {/* header */}
         <StyledView className='flex-row justify-between mx-[20px] my-[40px] items-center'>
            <StyledButton onPress={()=>navigation.goBack()}>
                <GoBackSvg/>
            </StyledButton>
            <StyledText className='mr-[50px] text-white text-[18px]'>Add New Card</StyledText>
            <StyledView/>
        </StyledView>

        <StyledView className='m-[20px]'>
            <VisaCreditCardBack/>
        </StyledView>

        <StyledText className='text-[#A2A2A7] text-[14px] mx-[30px] mt-[30px]'>Full Name</StyledText>
        <StyledView className='flex-row  mx-[30px]  border-b-[1px] border-[#232533]'>
            <StyledButton className='my-[15px]'>
                <UserSvg/>
            </StyledButton>
            <StyledInput className='text-[#fff] text-[14px]' placeholderTextColor='#fff' placeholder='Cardholder Name'/>
        </StyledView>

        <StyledView className='flex-row justify-between mx-[30px] my-[20px]'>
          <StyledView className=' border-b-[1px] border-[#232533]'>
            <StyledText className='text-[#A2A2A7] text-[14px]'>Expiry Date</StyledText>
            <StyledView className='flex-row'>
              <StyledInput className='text-[#fff]' placeholder='day' placeholderTextColor='#fff'/>
              <StyledText className='text-[#fff] my-[15px]'>/</StyledText>
              <StyledInput className='text-[#fff]' placeholder='month' placeholderTextColor='#fff'/>
              <StyledText className='text-[#fff] my-[15px]'>/</StyledText>
              <StyledInput className='text-[#fff]' placeholder='year' placeholderTextColor='#fff'/>
            </StyledView>
          </StyledView>
          <StyledView className=' border-b-[1px] border-[#232533]'>
            <StyledText className='text-[#A2A2A7] text-[14px]'>4-digit CVV</StyledText>
            <StyledInput className='text-[#fff]' placeholder='1111' placeholderTextColor='#fff'/>
          </StyledView>
        </StyledView>

        <StyledText className='text-[#A2A2A7] text-[14px] mx-[30px] mt-[30px]'>Card Number</StyledText>
        <StyledView className='flex-row  mx-[30px]  border-b-[1px] border-[#232533]'>
            <StyledButton className='my-[15px]'>
                <PaymentSvg/>
            </StyledButton>
            <StyledInput className='text-[#fff] text-[14px]' placeholderTextColor='#fff' placeholder='4562 1122 4595 7852'/>
        </StyledView>

    </StyledView>
  )
}

export default AddCards;