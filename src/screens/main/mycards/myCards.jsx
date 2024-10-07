import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { AddSvg, GoBackSvg, StyledButton, StyledScrollView, StyledText, StyledView } from '../../../common/StyledComponents';
import CreditCardVisa from '../components/creditcardVisa';
import CreditCardMaster from '../components/creditCardMaster';
import TransactionItem from '../home/components/transactionItem';

const Mycards = () => {
  return (
    <StyledView className='bg-[#161622] h-screen'>

        {/* //header */}
        <StyledView className='flex-row justify-between mx-[20px] my-[40px] items-center'>
            <GoBackSvg/>
            <StyledText className='text-white text-[18px]'>My Cards</StyledText>
            <StyledButton>
                <AddSvg/>
            </StyledButton>
        </StyledView>

        <StyledView className='mb-[20px]'>
            <StyledScrollView horizontal={true} >
                <StyledView className='mx-[30px]'>
                    <CreditCardVisa/>
                </StyledView>
                <StyledView className='mx-[30px]'>
                    <CreditCardMaster/>
                </StyledView>
            </StyledScrollView>
        </StyledView>

        {/* last 3 buys */}

        <StyledView className='mx-[20px] my-0'>
            <TransactionItem type="spotify" nameCompany='Spotify' companyType='Music Streaming' spendedMoney='- $10' />
            <TransactionItem type="marketSpend" nameCompany='Amazon' companyType='Online Shopping' spendedMoney='- $15' />
            <TransactionItem type="apple" nameCompany='Apple' companyType='App Store' spendedMoney='- $120' />
        </StyledView>

        <StyledText className='text-white text-[18px] mx-[30px] my-[10px]'>Monthly spending limit</StyledText>

        <StyledView className='mx-[30px] bg-[#232533] p-[10px] rounded-[10px]'>
            <StyledView className='flex-row'>
                <StyledText className='text-white text-[13px]'>Amount: </StyledText>
                <StyledText className='text-white text-[13px]'>$8,545.00</StyledText>
            </StyledView>
            <StyledView>
                
            </StyledView>
        </StyledView>
    </StyledView>
  )
}

export default Mycards;