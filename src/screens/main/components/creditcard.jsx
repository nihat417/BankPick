import React, { useState } from 'react';
import { TouchableWithoutFeedback } from 'react-native';
import Animated, { Easing, useSharedValue, useAnimatedStyle, withTiming, runOnJS } from 'react-native-reanimated';
import { StyledView, VisaCreditCardBack, VisaCreditCardFront, StyledText } from '../../../common/StyledComponents';

const CreditCard = () => {
  const [flipped, setFlipped] = useState(false);
  
  const rotateValue = useSharedValue(0);

  const flipCard = () => {
    rotateValue.value = withTiming(flipped ? 0 : 1, {
      duration: 700,
      easing: Easing.inOut(Easing.ease),
    }, (isFinished) => {
      if (isFinished) {
        runOnJS(setFlipped)(!flipped);
      }
    });
  };

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ perspective: 1000 }, { rotateY: `${rotateValue.value * 180}deg` }],
    };
  });

  return (
    <TouchableWithoutFeedback onPress={flipCard}>
      <StyledView>
        <Animated.View style={animatedStyle}>
          {rotateValue.value >= 0.5 ? (
            <StyledView>
              <VisaCreditCardBack />
              <StyledText className='absolute self-center text-[26px] bottom-[50%] text-white'>4562   1122   4595   7852</StyledText>
              <StyledText className='absolute bottom-[35%] left-[6%] text-[14px] text-white'>Tanya Myr</StyledText>
              <StyledText className='absolute bottom-[10%] left-[6%] text-[13px] text-white'>24/2000</StyledText>
              <StyledText className='absolute bottom-[10%] left-[30%] text-[13px] text-white'>6986</StyledText>
            </StyledView>
          ) : (
            <StyledView>
              <VisaCreditCardFront />
              <StyledView className='absolute left-10 bottom-10'>
                <StyledText className='text-white text-[18px]'>4802   2215   ****   ****</StyledText>
                <StyledText className='text-white text-[14px] mt-[20px]'>Mellissa Mccarthy</StyledText>
              </StyledView>
            </StyledView>
          )}
        </Animated.View>
      </StyledView>
    </TouchableWithoutFeedback>
  );
};

export default CreditCard;
