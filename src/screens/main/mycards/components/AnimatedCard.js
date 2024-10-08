// components/AnimatedCard.js

import React from 'react';
import { StyleSheet, Dimensions } from 'react-native';
import Animated, { useAnimatedStyle, interpolate, Extrapolate } from 'react-native-reanimated';
import { StyledView } from '../../../common/StyledComponents';

const { width } = Dimensions.get('window');
const CARD_WIDTH = width - 50; 
const CARD_SPACING = 30;

const AnimatedCard = ({ scrollX, index, card }) => {
  const animatedStyle = useAnimatedStyle(() => {
    const inputRange = [
      (index - 1) * (CARD_WIDTH + CARD_SPACING * 2),
      index * (CARD_WIDTH + CARD_SPACING * 2),
      (index + 1) * (CARD_WIDTH + CARD_SPACING * 2),
    ];
    const translateX = interpolate(
      scrollX.value,
      inputRange,
      [-50, 0, 50],
      Extrapolate.CLAMP
    );

    return {
      transform: [{ translateX }],
    };
  });

  return (
    <Animated.View style={[styles.cardContainer, animatedStyle]}>
      {card.component}
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    width: CARD_WIDTH,
    marginHorizontal: CARD_SPACING,
  },
});

export default AnimatedCard;
