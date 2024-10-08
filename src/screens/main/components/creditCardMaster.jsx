import React, { useState } from 'react';
import { TouchableWithoutFeedback } from 'react-native';
import Animated, { Easing, useSharedValue, useAnimatedStyle, withTiming } from 'react-native-reanimated';
import { StyledView, VisaCreditCardBack, MasterCardFrontSvg, StyledText, CardUnionSvg, MasterCreditCardBack } from '../../../common/StyledComponents';


const AnimatedStyledView = Animated.createAnimatedComponent(StyledView);

const CreditCardMaster = () => {

    const [flipped, setFlipped] = useState(false);
  
  const rotateValue = useSharedValue(0);

  const flipCard = () => {
    rotateValue.value = withTiming(flipped ? 0 : 2, {
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
                    <MasterCardFrontSvg/>
                    <StyledView className='absolute left-10 bottom-10'>
                        <StyledText className='text-white text-[18px]'>4802   2215   ****   ****</StyledText>
                        <StyledText className='text-white text-[14px] mt-[20px]'>Mellissa Mccarthy</StyledText>
                    </StyledView>
                </AnimatedStyledView>


                <AnimatedStyledView style={[{ position: 'absolute', width: '100%', height: '100%' }, backOpacityStyle]}>
                    <MasterCreditCardBack/>
                    <StyledText className='absolute self-center text-[26px] left-[10%] bottom-[52%] text-white' >4562   1122   4595   7852</StyledText>
                    <StyledText className='absolute bottom-[30%] left-[4%] text-[13px] text-white' >Tanya Myr</StyledText>
                    <StyledText className='absolute bottom-[5%] left-[4%] text-[13px] text-white' >07/2027</StyledText>
                    <StyledText className='absolute bottom-[5%] left-[25.5%] text-[13px] text-white' >4567</StyledText>
                </AnimatedStyledView>
            </Animated.View>
        </AnimatedStyledView>
    </TouchableWithoutFeedback>
  )
}

export default CreditCardMaster;