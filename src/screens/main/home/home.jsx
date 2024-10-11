import React, { useState,useEffect } from 'react';
import { Dimensions,View,Text, StyleSheet, useWindowDimensions,TouchableOpacity } from 'react-native';
import Animated, {useSharedValue,useAnimatedScrollHandler,useAnimatedStyle,interpolate,Extrapolate,withTiming} from 'react-native-reanimated';
import {BellSvg, HomeSearchSvg,LoanSvg,RecieveSvg,SendISvg,StyledButton,StyledImage,StyledText,StyledView,TopUpSvgs,} from '../../../common/StyledComponents';
import { PieChart } from "react-native-gifted-charts";
import { BlurView } from '@react-native-community/blur';
import CreditCardVisa from '../components/creditcardVisa';
import TransactionItem from './components/transactionItem';

const AnimatedFlatList = Animated.FlatList;

const { height } = Dimensions.get('window');
const HEADER_HEIGHT = 200; 

const transactions = [
  { id: '1', type: 'spotify', nameCompany: 'Spotify', companyType: 'Music Streaming', spendedMoney: '+ $10' },
  { id: '2', type: 'marketSpend', nameCompany: 'Amazon', companyType: 'Online Shopping', spendedMoney: '- $50' },
  { id: '3', type: 'apple', nameCompany: 'Apple', companyType: 'App Store', spendedMoney: '- $5' },
  { id: '6', type: 'moneyTransfer', nameCompany: 'Bank Transfer', companyType: 'Money Transfer', spendedMoney: '+ $100' },
  { id: '7', type: 'moneyTransfer', nameCompany: 'Bank Transfer', companyType: 'Money Transfer', spendedMoney: '+ $100' },
  { id: '8', type: 'moneyTransfer', nameCompany: 'Bank Transfer', companyType: 'Money Transfer', spendedMoney: '+ $100' },
  { id: '9', type: 'moneyTransfer', nameCompany: 'Bank Transfer', companyType: 'Money Transfer', spendedMoney: '+ $100' },
  { id: '10', type: 'moneyTransfer', nameCompany: 'Bank Transfer', companyType: 'Money Transfer', spendedMoney: '+ $100' },
  { id: '11', type: 'moneyTransfer', nameCompany: 'Bank Transfer', companyType: 'Money Transfer', spendedMoney: '+ $100' },
  { id: '12', type: 'moneyTransfer', nameCompany: 'Bank Transfer', companyType: 'Money Transfer', spendedMoney: '+ $100' },
  { id: '13', type: 'moneyTransfer', nameCompany: 'Bank Transfer', companyType: 'Money Transfer', spendedMoney: '+ $100' },
  { id: '14', type: 'moneyTransfer', nameCompany: 'Bank Transfer', companyType: 'Money Transfer', spendedMoney: '+ $100' },
  { id: '15', type: 'moneyTransfer', nameCompany: 'Bank Transfer', companyType: 'Money Transfer', spendedMoney: '+ $100' },
  { id: '16', type: 'moneyTransfer', nameCompany: 'Bank Transfer', companyType: 'Money Transfer', spendedMoney: '+ $100' },
];

const pieData = [
  {
    value: 47,
    color: '#009FFF',
    gradientCenterColor: '#006DFF',
    focused: true,
  },
  {value: 40, color: '#93FCF8', gradientCenterColor: '#3BE9DE'},
  {value: 16, color: '#BDB2FA', gradientCenterColor: '#8F80F3'},
  {value: 3, color: '#FFA5BA', gradientCenterColor: '#FF7F97'},
];

const Home = () => {
  const [isPanelVisible, setIsPanelVisible] = useState(false);
  const { width } = useWindowDimensions();

  const scrollY = useSharedValue(0);

  const scrollHandler = useAnimatedScrollHandler({
    onScroll: (event) => {
      scrollY.value = event.contentOffset.y;
    },
  });

  const isPanelVisibleShared = useSharedValue(false);
  const PANEL_HEIGHT = height * 0.7;

  useEffect(() => {
    isPanelVisibleShared.value = isPanelVisible ? 1 : 0;
  }, [isPanelVisible]);

  const panelAnimatedStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateY: withTiming(isPanelVisibleShared.value ? 0 : PANEL_HEIGHT, { duration: 300 }),
        },
      ],
    };
  });
  
  const blurAnimatedStyle = useAnimatedStyle(() => {
    return {
      opacity: withTiming(isPanelVisibleShared.value ? 1 : 0, { duration: 300 }),
      display: isPanelVisibleShared.value ? 'flex' : 'none',
    };
  });

  const togglePanel = () => {
    setIsPanelVisible((prev) => !prev);
  };

  const headerAnimatedStyle = useAnimatedStyle(() => {
    const translateY = interpolate(
      scrollY.value,
      [0, HEADER_HEIGHT],
      [0, -HEADER_HEIGHT],
      Extrapolate.CLAMP
    );

    const scale = interpolate(
      scrollY.value,
      [0, HEADER_HEIGHT / 2, HEADER_HEIGHT],
      [1, 0.95, 0.9],
      Extrapolate.CLAMP
    );

    const opacity = interpolate(
      scrollY.value,
      [0, HEADER_HEIGHT / 2, HEADER_HEIGHT],
      [1, 0.7, 0],
      Extrapolate.CLAMP
    );

    return {
      transform: [
        { translateY },
        { scale },
        { perspective: 1000 }, 
      ],
      opacity,
    };
  });

  const contentAnimatedStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          scale: interpolate(
            scrollY.value,
            [0, HEADER_HEIGHT],
            [1, 0.98],
            Extrapolate.CLAMP
          ),
        },
      ],
    };
  });

  const marginHorizontal = width * 0.05;

  const renderDot = color => {
    return (
      <View
        style={{
          height: 10,
          width: 10,
          borderRadius: 5,
          backgroundColor: color,
          marginRight: 10,
        }}
      />
    );
  };

  const renderLegendComponent = () => {
    return (
      <>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            marginBottom: 10,
          }}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              width: 120,
              marginRight: 20,
            }}>
            {renderDot('#006DFF')}
            <Text style={{color: 'white'}}>Excellent: 47%</Text>
          </View>
          <View
            style={{flexDirection: 'row', alignItems: 'center', width: 120}}>
            {renderDot('#8F80F3')}
            <Text style={{color: 'white'}}>Okay: 16%</Text>
          </View>
        </View>
        <View style={{flexDirection: 'row', justifyContent: 'center'}}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              width: 120,
              marginRight: 20,
            }}>
            {renderDot('#3BE9DE')}
            <Text style={{color: 'white'}}>Good: 40%</Text>
          </View>
          <View
            style={{flexDirection: 'row', alignItems: 'center', width: 120}}>
            {renderDot('#FF7F97')}
            <Text style={{color: 'white'}}>Poor: 3%</Text>
          </View>
        </View>
      </>
    );
  };

  return (
    <StyledView style={styles.container}>
      {/* Header */}
      <Animated.View style={[styles.header, headerAnimatedStyle]}>
        <StyledView className='flex-row m-[20px] justify-between items-center'>
          <StyledView className='flex-row items-center'>
            <StyledImage 
              className='w-[50px] h-[50px]' 
              source={require('../../../assets/images/mepht.png')}
            />
            <StyledView className='mx-[20px]'>
              <StyledText className='text-[#7E848D] text-[12px]'>Welcome back,</StyledText>
              <StyledText className='text-white text-[18px]'>Nihat Akremi</StyledText>
            </StyledView>
          </StyledView>
          <StyledButton onPress={togglePanel}>
            <BellSvg />
          </StyledButton>
        </StyledView>

        <StyledView style={{ marginHorizontal, marginVertical: 20 }}>
          <CreditCardVisa />
        </StyledView>

        <StyledView className='flex-row justify-between mx-[30px] my-[20px]'>
          <StyledButton>
            <SendISvg />
            <StyledText className='text-[#A2A2A7] text-center my-[10px]'>Send</StyledText>
          </StyledButton>
          <StyledButton>
            <RecieveSvg />
            <StyledText className='text-[#A2A2A7] text-center my-[10px]'>Receive</StyledText>
          </StyledButton>
          <StyledButton>
            <LoanSvg />
            <StyledText className='text-[#A2A2A7] text-center my-[10px]'>Loan</StyledText>
          </StyledButton>
          <StyledButton>
            <TopUpSvgs />
            <StyledText className='text-[#A2A2A7] text-center my-[10px]'>Topup</StyledText>
          </StyledButton>
        </StyledView>

        <Animated.Text style={[styles.transactionHeader, contentAnimatedStyle]}>
          Transaction
        </Animated.Text>
      </Animated.View>

      {/* Transactions List */}
      <AnimatedFlatList
        data={transactions}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TransactionItem
            type={item.type}
            nameCompany={item.nameCompany}
            companyType={item.companyType}
            spendedMoney={item.spendedMoney}
          />
        )}
        contentContainerStyle={{
          paddingHorizontal: 20,
          paddingBottom: 30,
          paddingTop: HEADER_HEIGHT + 300, 
        }}
        onScroll={scrollHandler}
        scrollEventThrottle={16} 
        showsVerticalScrollIndicator={false}
        style={styles.flatList}
      />

      {/* Overlay to detect taps outside the panel */}
      {isPanelVisible && (
        <TouchableOpacity 
          style={styles.overlay} 
          activeOpacity={1} 
          onPress={togglePanel}
        >
          <BlurView
            style={StyleSheet.absoluteFill}
            blurType="light"
            blurAmount={10}
            reducedTransparencyFallbackColor="rgba(0,0,0,0.5)"
          />
        </TouchableOpacity>
      )}

      {/* Sliding Panel */}
      <Animated.View
        style={[
          styles.panel,
          {
            height: PANEL_HEIGHT,
            width: width,
            bottom: 0,
          },
          panelAnimatedStyle,
        ]}
      >
        <StyledView style={styles.panelContent}>
          <StyledText style={styles.panelTitle}>Category Chart</StyledText>
              <View style={{padding: 20, alignItems: 'center'}}>
                <PieChart
                  data={pieData}
                  donut
                  showGradient
                  sectionAutoFocus
                  radius={90}
                  innerRadius={60}
                  innerCircleColor={'#232B5D'}
                  centerLabelComponent={() => {
                    return (
                      <View style={{justifyContent: 'center', alignItems: 'center'}}>
                        <Text style={{fontSize: 22, color: 'white', fontWeight: 'bold'}}>
                          55%
                        </Text>
                        <Text style={{fontSize: 14, color: 'white'}}>Transaction</Text>
                      </View>
                    );
                  }}
                />
              </View>
              {renderLegendComponent()}
        </StyledView>
      </Animated.View>
    </StyledView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#161622',
  },
  header: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: HEADER_HEIGHT,
    backgroundColor: '#161622',
    zIndex: 1,
  },
  transactionHeader: {
    position: 'absolute',
    top: HEADER_HEIGHT + 270,
    left: 30,
    color: 'white',
    fontWeight: 'bold',
    fontSize: 18,
    zIndex: 0,
  },
  flatList: {
    flex: 1,
    marginBottom: 40,
  },
  panel: {
    position: 'absolute',
    left: 0,
    backgroundColor: '#1E1E2D',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 20,
    zIndex: 3, 
  },
  panelContent: {
    flex: 1,
  },
  panelTitle: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: 2,
  },
});

export default Home;
