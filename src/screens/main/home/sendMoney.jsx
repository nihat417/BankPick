import { Dimensions, StyleSheet, FlatList } from 'react-native';
import Animated, {
  useSharedValue,
  useAnimatedScrollHandler,
} from 'react-native-reanimated';
import React from 'react'
import {  AddFriend, GoBackSvg, LogOut, RightArrowSvg, StyledButton, StyledImage, StyledScrollView, StyledText, StyledView } from '../../../common/StyledComponents';
import AnimatedCard from '../mycards/components/AnimatedCard';
import cardsData from '../mycards/data/cardsData';
import { useNavigation } from '@react-navigation/native';


const { width } = Dimensions.get('window');
const CARD_WIDTH = width - 60; 
const CARD_SPACING = 20;

const SendMoney = () => {
    const scrollX = useSharedValue(0);
    const navigation = useNavigation();

    const scrollHandler = useAnimatedScrollHandler((event) => {
        scrollX.value = event.contentOffset.x;
    });

    const renderItem = ({ item, index }) => (
        <AnimatedCard scrollX={scrollX} index={index} card={item} />
    );
  return (
    <StyledScrollView className='bg-[#161622] h-screen'>

        {/* header */}
        <StyledView className='flex-row justify-between mx-[20px] my-[40px] items-center'>
            <StyledButton onPress={()=>navigation.goBack()}>
                <GoBackSvg/>
            </StyledButton>
            <StyledText className='mr-[50px] text-white text-[18px]'>Send Money</StyledText>
            <StyledView/>
        </StyledView>


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


      <StyledView className='bg-[#1E1E2D] p-[10px] mb-[20px] mx-[30px] rounded-[15px]'>
        <StyledText className='text-[#fff] mx-[10px] mt-[5px] text-[14px]'>Send to</StyledText>
        <StyledView className='flex-row'>
            <StyledButton className='my-[10px] mx-[10px]'>
                <AddFriend/>
                <StyledText className='text-[#fff] text-[11px] text-center mt-[5px]'>Add </StyledText>
            </StyledButton>

            <StyledButton className='mx-[20px] my-[10px]'>
                <StyledImage className='w-[48px] h-[48px] rounded-full' source={require('../../../assets/images/yamiletpng.png')}/>
                <StyledText className='text-[#fff] text-[11px] text-center mt-[5px]'>Yamiled</StyledText>
            </StyledButton>

            <StyledButton className='mx-[20px] my-[10px]'>
                <StyledImage className='w-[48px] h-[48px] rounded-full' source={require('../../../assets/images/alexapng.png')}/>
                <StyledText className='text-[#fff] text-[11px] text-center mt-[5px]'>Yamiled</StyledText>
            </StyledButton>
            
            <StyledButton className='mx-[20px] my-[10px]'>
                <StyledImage className='w-[48px] h-[48px] rounded-full' source={require('../../../assets/images/yamiletpng.png')}/>
                <StyledText className='text-[#fff] text-[11px] text-center mt-[5px]'>Yamiled</StyledText>
            </StyledButton>
        </StyledView>
      </StyledView>


      <StyledView className='bg-[#1E1E2D] p-[10px] my-[20px] mx-[30px] rounded-[15px]'>
        <StyledView className='flex-row justify-between my-[10px]'>
            <StyledText className='text-[#9CB1D1] text-[11px]'>Enter Your Amount</StyledText>
            <StyledText className='text-[#FF3F60] text-[11px]'>Change Currency?</StyledText>
        </StyledView>

        <StyledView className='flex-row justify-start mt-[10px] mb-[20px]'>
            <StyledText className='text-[#9CB1D1] text-[24px] mr-[10px]'>USD</StyledText>
            <StyledText className='text-[#fff] text-[24px]'>36.00</StyledText>
        </StyledView>
      </StyledView>

      {/* button */}
      <StyledButton className='mx-[30px] mb-[50px] p-[20px] rounded-[15px] bg-[#0066FF]'>
        <StyledText className='text-center text-[#fff] text-[16px]'>Send Money</StyledText>
      </StyledButton>

    </StyledScrollView>
  )
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

export default SendMoney;