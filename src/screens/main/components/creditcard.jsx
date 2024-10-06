import React, { useState } from 'react';
import { TouchableWithoutFeedback } from 'react-native';
import Animated, { Easing, useSharedValue, useAnimatedStyle, withTiming } from 'react-native-reanimated';
import { StyledView, VisaCreditCardBack, VisaCreditCardFront, StyledText } from '../../../common/StyledComponents';

const AnimatedStyledView = Animated.createAnimatedComponent(StyledView);

const CreditCard = () => {
  const [flipped, setFlipped] = useState(false);
  
  const rotateValue = useSharedValue(0);

  const flipCard = () => {
    rotateValue.value = withTiming(flipped ? 0 : 1, {
      duration: 700,
      easing: Easing.inOut(Easing.ease),
    });
    setFlipped(!flipped);
  };

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ perspective: 1000 }, { rotateY: `${rotateValue.value * 180}deg` }],
    };
  });

  const frontOpacityStyle = useAnimatedStyle(() => {
    return {
      opacity: withTiming(rotateValue.value <= 0.5 ? 1 : 0, { duration: 300 }),
    };
  });

  const backOpacityStyle = useAnimatedStyle(() => {
    return {
      opacity: withTiming(rotateValue.value > 0.5 ? 1 : 0, { duration: 300 }),
    };
  });

  return (
    <TouchableWithoutFeedback onPress={flipCard}>
      <AnimatedStyledView>
        <Animated.View style={animatedStyle}>
          <AnimatedStyledView style={[{ }, frontOpacityStyle]}>
            <VisaCreditCardFront />
            <StyledView className='absolute left-10 bottom-10'>
              <StyledText className='text-white text-[18px]'>4802   2215   ****   ****</StyledText>
              <StyledText className='text-white text-[14px] mt-[20px]'>Mellissa Mccarthy</StyledText>
            </StyledView>
          </AnimatedStyledView>

          <AnimatedStyledView style={[{ position: 'absolute', width: '100%', height: '100%' }, backOpacityStyle]}>
            <VisaCreditCardBack />
            <StyledText className='absolute self-center text-[26px] bottom-[50%] text-white' style={{ transform: [{ scaleX: -1 }] }}>4562   1122   4595   7852</StyledText>
            <StyledText className='absolute bottom-[35%] left-[6%] text-[14px] text-white' style={{ transform: [{ scaleX: -1 }] }}>Tanya Myr</StyledText>
            <StyledText className='absolute bottom-[10%] left-[6%] text-[13px] text-white' style={{ transform: [{ scaleX: -1 }] }}>24/2000</StyledText>
            <StyledText className='absolute bottom-[10%] left-[30%] text-[13px] text-white' style={{ transform: [{ scaleX: -1 }] }}>6986</StyledText>
          </AnimatedStyledView>
        </Animated.View>
      </AnimatedStyledView>
    </TouchableWithoutFeedback>
  );
};

export default CreditCard;
