import React from 'react'
import { HomeSearchSvg, StyledImage, StyledScrollView, StyledText, StyledView } from '../../../common/StyledComponents';
import Creditcard from '../components/creditcard';

const Home = () => {
  return (
    <StyledScrollView className='bg-[#161622]'>
        <StyledView className='flex-row m-[20px] justify-between items-center'>
            <StyledView className='flex-row items-center'>
                <StyledImage className='w-[50px] h-[50px]' source={require('../../../assets/images/mepht.png')}/>
                <StyledView className='mx-[20px]'>
                    <StyledText className='text-[#7E848D] text-[12px]'>Welcome back,</StyledText>
                    <StyledText className='text-white text-[18px]'>Tanya Myroniuk</StyledText>
                </StyledView>
            </StyledView>
            <HomeSearchSvg/>
        </StyledView>
        <StyledView className='mx-[20px] my-[20px]'>
            <Creditcard/>
        </StyledView>
    </StyledScrollView>
  )
}

export default Home;