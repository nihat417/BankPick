import React, { useState } from 'react';
import { Dimensions, StyleSheet } from 'react-native';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  interpolate,
  useAnimatedScrollHandler,
} from 'react-native-reanimated';
import { AddSvg, GoBackSvg, StyledButton, StyledText, StyledView } from '../../../common/StyledComponents';
import CreditCardVisa from '../components/creditcardVisa';
import CreditCardMaster from '../components/creditCardMaster';
import TransactionItem from '../home/components/transactionItem';
import { Slider } from 'react-native-awesome-slider'; 

const { width } = Dimensions.get('window');

const Mycards = () => {
  const scrollX = useSharedValue(0);

  const scrollHandler = useAnimatedScrollHandler((event) => {
    scrollX.value = event.contentOffset.x;
  });

  const cardStyleVisa = useAnimatedStyle(() => {
    const translateX = interpolate(scrollX.value, [0, width], [0, -50]);
    return {
      transform: [{ translateX }],
    };
  });

  const cardStyleMaster = useAnimatedStyle(() => {
    const translateX = interpolate(scrollX.value, [0, width], [50, 0]);
    return {
      transform: [{ translateX }],
    };
  });

    const progress = useSharedValue(30);
    const min = useSharedValue(0);
    const max = useSharedValue(100);

  return (
    <StyledView className='bg-[#161622] h-screen'>
      {/* Header */}
      <StyledView className='flex-row justify-between m-[20px] items-center'>
        <GoBackSvg />
        <StyledText className='text-white text-[18px]'>My Cards</StyledText>
        <StyledButton>
          <AddSvg />
        </StyledButton>
      </StyledView>

      <StyledView className='mb-[20px]'>
        <Animated.ScrollView
          horizontal
          pagingEnabled
          onScroll={scrollHandler}
          scrollEventThrottle={16}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.scrollContainer}
        >
          <Animated.View style={[ cardStyleVisa]}>
            <CreditCardVisa />
          </Animated.View>
          <Animated.View style={[ cardStyleMaster]}>
            <CreditCardMaster />
          </Animated.View>
          
        </Animated.ScrollView>
      </StyledView>

      <StyledView className='mx-[20px] '>
        <TransactionItem type="spotify" nameCompany='Spotify' companyType='Music Streaming' spendedMoney='- $10' />
        <TransactionItem type="marketSpend" nameCompany='Amazon' companyType='Online Shopping' spendedMoney='- $15' />
        <TransactionItem type="apple" nameCompany='Apple' companyType='App Store' spendedMoney='- $120' />
      </StyledView>

      <StyledText className='text-white text-[18px] mx-[30px] my-[20px]'>Monthly spending limit</StyledText>

      <StyledView className='mx-[30px] bg-[#232533] p-[20px] rounded-[15px]'>
        <StyledView className='flex-row'>
          <StyledText className='text-white text-[13px]'>Amount: </StyledText>
          <StyledText className='text-white text-[13px]'>$8,545.00</StyledText>
        </StyledView>

        <StyledView className='my-[20px]'>
            <Slider theme={{
                        maximumTrackTintColor: '#292937',
                        minimumTrackTintColor: '#fff',
                        cacheTrackTintColor: '#333',
                        bubbleBackgroundColor: '#666',
                        heartbeatColor: '#999',}} progress={progress} minimumValue={min} maximumValue={max}/>
          <StyledView className='flex-row justify-between mt-[15px]'>
            <StyledText className='text-white text-[13px]'>$0</StyledText>
            <StyledText className='text-white text-[13px]'>$4,600</StyledText>
            <StyledText className='text-white text-[13px]'>$10,000</StyledText>
          </StyledView>
        </StyledView>
      </StyledView>
    </StyledView>
  );
};

const styles = StyleSheet.create({
  scrollContainer: {
    paddingHorizontal: 30,
  },
});

export default Mycards;
