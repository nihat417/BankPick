import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { GoBackSvg, StyledView,StyledText,StyledButton, BellSvg } from '../../../common/StyledComponents';
import { LineChart } from "react-native-gifted-charts";

const Statistic = () => {
    const data =[{value: 0},{value: 20},{value: 18},{value: 40},{value: 36},{value: 60},{value: 54},{value: 85}];

  return (
    <StyledView className='bg-[#161622] h-screen'>
        {/* header */}
        <StyledView className='flex-row justify-between mx-[20px] my-[40px] items-center'>
            <StyledButton>
                <GoBackSvg/>
            </StyledButton>
            <StyledText className='text-white text-[18px]'>My Cards</StyledText>
            <StyledButton>
                <BellSvg/>
            </StyledButton>
        </StyledView>


        <StyledView className='mx-[10px]'>
            <StyledView className='self-center'>
                <StyledText className='text-[#A2A2A7] text-[18px]'>Current Balance</StyledText>
                <StyledText className='text-[#fff] text-[26px]'>$8,545.00</StyledText>
            </StyledView>
            <LineChart
                curved
                isAnimated
                areaChart
                data={data}
                animationDuration={1200}
                startOpacity={1}
                endOpacity={0.3}
                initialSpacing={10}
                pointerConfig={{}}
                hideRules
                hideDataPoints1
                hideYAxisText
                startFillColor="#0066FF"
                endFillColor="#0066FF"
                color="#0066FF"
                dataPointsColor='#fff'

                />
        </StyledView>

    </StyledView>
  )
}

export default Statistic;