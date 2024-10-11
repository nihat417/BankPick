import React, { useState, useRef } from 'react';
import { View, Text, ScrollView, Dimensions, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { FirstIntro, LastIntro, SecondIntro } from '../common/StyledComponents';
import { StyledButton,StyledText,StyledView } from '../common/StyledComponents';

const { width } = Dimensions.get('window');

const IntroScreen = ({ onFinish }) => {
  const slides = [
    {
      image: <FirstIntro />, 
      title: 'Fastest Payment in the world',
      description: 'Integrate multiple payment methoods to help you up the process quickly',
    },
    {
      image: <SecondIntro/>, 
      title: 'The most Secoure Platfrom for Customer',
      description: 'Built-in Fingerprint, face recognition and more, keeping you completely safe',
    },
    {
      image: <LastIntro/>,
      title: 'Paying for Everything is Easy and Convenient',
      description: 'Built-in Fingerprint, face recognition and more, keeping you completely safe',
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollViewRef = useRef(null);

  const handleNext = () => {
    if (currentIndex < slides.length - 1) {
      setCurrentIndex(prevIndex => prevIndex + 1);
      scrollViewRef.current.scrollTo({ x: (currentIndex + 1) * width, animated: true });
    } else {
      onFinish();
    }
  };


  return (
    <View style={styles.container}>
      <ScrollView
        ref={scrollViewRef}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        scrollEnabled={false}
        style={styles.scrollView}>
        {slides.map((slide, index) => (
          <View key={index} style={styles.slide}>
            {typeof slide.image === 'string' ? (
              <Image source={{ uri: slide.image }} style={styles.image} />
            ) : (
              <View style={styles.image}>{slide.image}</View> 
            )}
             <StyledView className='self-center mt-[150px]'>
                <StyledText className='text-white text-center font-semibold text-[28px] mx-[80px]'>{slide.title}</StyledText>
                <StyledText className='text-[#7E848D] text-center font-semibold text-[14px] mx-[50px] my-[20px]'> {slide.description}</StyledText>
            </StyledView>
          </View>
        ))}
      </ScrollView>

        <StyledButton onPress={handleNext} className='bg-[#0066FF] rounded-[15px] m-[20px] p-[20px]'>
            <StyledText className='text-white text-center'>Next </StyledText>
        </StyledButton>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#161622',
  },
  scrollView: {
    flex: 0.8,
  },
  slide: {
    width: width,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 300,
    height: 200,
    borderRadius: 10,
  },
  title: {
    color: '#FFF',
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 20,
  },
  description: {
    color: '#7E848D',
    fontSize: 14,
    textAlign: 'center',
    marginHorizontal: 40,
    marginTop: 10,
  },
  buttonContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  button: {
    backgroundColor: '#0066FF',
    padding: 15,
    borderRadius: 15,
  },
  buttonText: {
    color: '#FFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default IntroScreen;
