// screens/Mycards.js

import React, { useState } from 'react';
import { Dimensions, StyleSheet, FlatList } from 'react-native';
import Animated, {
  useSharedValue,
  useAnimatedScrollHandler,
} from 'react-native-reanimated';
import { AddSvg, GoBackSvg, StyledButton, StyledText, StyledView } from '../../../common/StyledComponents';
import TransactionItem from '../home/components/transactionItem';
import { Slider } from 'react-native-awesome-slider';
import cardsData from './data/cardsData';
import AnimatedCard from './components/AnimatedCard';

const { width } = Dimensions.get('window');
const CARD_WIDTH = width - 80; 
const CARD_SPACING = 0;

const Mycards = () => {
  const scrollX = useSharedValue(0);

  const scrollHandler = useAnimatedScrollHandler((event) => {
    scrollX.value = event.contentOffset.x;
  });

  const progress = useSharedValue(30);
    const min = useSharedValue(0);
    const max = useSharedValue(100);

  const renderItem = ({ item, index }) => (
    <AnimatedCard scrollX={scrollX} index={index} card={item} />
  );

  return (
    <StyledView className='bg-[#161622] flex-1'>
      {/* Header */}
      <StyledView className='flex-row justify-between m-[20px] items-center'>
        <GoBackSvg />
        <StyledText className='text-white text-[18px]'>My Cards</StyledText>
        <StyledButton>
          <AddSvg />
        </StyledButton>
      </StyledView>

      {/* horizontal parallax*/}
      <StyledView className='mb-[20px]'>
        <Animated.FlatList
          data={cardsData}
          keyExtractor={(item) => item.id}
          horizontal
          pagingEnabled
          onScroll={scrollHandler}
          scrollEventThrottle={16}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.scrollContainer}
          renderItem={renderItem}
          snapToAlignment='start'
          decelerationRate='fast'
        />
      </StyledView>

      <StyledView className='mx-[20px]'>
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
    paddingHorizontal: CARD_SPACING,
  },
  cardContainer: {
    width: CARD_WIDTH,
    marginHorizontal: CARD_SPACING,
  },
});

export default Mycards;
