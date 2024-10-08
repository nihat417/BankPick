import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { StyledScrollView,StyledView,StyledButton,GoBackSvg,StyledText, SearchSvg, StyledInput, StyledImage, AzerbaijanFlag, SelectedLangSvg, EnglanFlag, TrukeyFalg, RussiaFalg, SpainFlag } from '../../../common/StyledComponents';

const LanguageScreen = () => {
    const [selected,setSelected]= useState(true);
  return (
    <StyledScrollView className='bg-[#161622] h-screen'>

        {/* header */}

        <StyledView className='flex-row justify-between mx-[20px] my-[40px] items-center'>
            <StyledButton>
                <GoBackSvg/>
            </StyledButton>
            <StyledText className='mr-[30px] text-white text-[18px]'>Language</StyledText>
            <StyledView></StyledView>
        </StyledView>

        {/* search */}

        <StyledView className='bg-[#232533] mx-[20px] rounded-[10px] flex-row items-center'>
            <StyledView className='p-2'>
                <SearchSvg />
            </StyledView>
            <StyledInput placeholder='Search Language' placeholderTextColor='#BBBBC1' className='flex-1 text-white'/>
        </StyledView>

        {/* flags */}

        <StyledView className={`flex-row items-center ${selected ? 'justify-between': '' } mx-[20px] mb-[10px] mt-[30px] p-[10px] border-b-[1px] border-[#232533]`}>
            <StyledView className='flex-row items-center'>
                <AzerbaijanFlag/>
                <StyledText className='mx-[20px] text-[16px] text-[#fff]'>Azerbaijan</StyledText>
            </StyledView>
            {selected? <SelectedLangSvg/> : ''}
        </StyledView>
        
        <StyledView className={`flex-row items-center ${selected ? 'justify-between': '' } mx-[20px] mb-[10px] p-[10px] border-b-[1px] border-[#232533]`}>
            <StyledView className='flex-row items-center'>
                <EnglanFlag/>
                <StyledText className='mx-[20px] text-[16px] text-[#fff]'>English</StyledText>
            </StyledView>
            {selected? <SelectedLangSvg/> : ''}
        </StyledView>

        <StyledView className={`flex-row items-center ${selected ? 'justify-between': '' } mx-[20px] mb-[10px]  p-[10px] border-b-[1px] border-[#232533]`}>
            <StyledView className='flex-row items-center'>
                <TrukeyFalg/>
                <StyledText className='mx-[20px] text-[16px] text-[#fff]'>Turkish</StyledText>
            </StyledView>
            {selected? <SelectedLangSvg/> : ''}
        </StyledView>

        <StyledView className={`flex-row items-center ${selected ? 'justify-between': '' } mx-[20px] mb-[10px] p-[10px] border-b-[1px] border-[#232533]`}>
            <StyledView className='flex-row items-center'>
                <RussiaFalg/>
                <StyledText className='mx-[20px] text-[16px] text-[#fff]'>Russian</StyledText>
            </StyledView>
            {selected? <SelectedLangSvg/> : ''}
        </StyledView>

        <StyledView className={`flex-row items-center ${selected ? 'justify-between': '' } mx-[20px] mb-[10px] p-[10px] border-b-[1px] border-[#232533]`}>
            <StyledView className='flex-row items-center'>
                <SpainFlag/>
                <StyledText className='mx-[20px] text-[16px] text-[#fff]'>Spainish</StyledText>
            </StyledView>
            {selected? <SelectedLangSvg/> : ''}
        </StyledView>



    </StyledScrollView>
  )
}

export default LanguageScreen;