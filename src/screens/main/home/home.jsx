import React from 'react';
import { StyleSheet, Dimensions } from 'react-native';
import Animated, {useSharedValue,useAnimatedScrollHandler,useAnimatedStyle,interpolate,Extrapolate,} from 'react-native-reanimated';
import {HomeSearchSvg,LoanSvg,RecieveSvg,SendISvg,StyledButton,StyledImage,StyledText,StyledView,TopUpSvgs,} from '../../../common/StyledComponents';
import Creditcard from '../components/creditcard';
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

const Home = () => {
  const scrollY = useSharedValue(0);

  const scrollHandler = useAnimatedScrollHandler({
    onScroll: (event) => {
      scrollY.value = event.contentOffset.y;
    },
  });

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

  return (
    <StyledView style={styles.container}>
      <Animated.View style={[styles.header, headerAnimatedStyle]}>
        <StyledView className='flex-row m-[20px] justify-between items-center'>
          <StyledView className='flex-row items-center'>
            <StyledImage
              className='w-[50px] h-[50px]'
              source={require('../../../assets/images/mepht.png')}
            />
            <StyledView className='mx-[20px]'>
              <StyledText className='text-[#7E848D] text-[12px]'>Welcome back,</StyledText>
              <StyledText className='text-white text-[18px]'>Tanya Myroniuk</StyledText>
            </StyledView>
          </StyledView>
          <HomeSearchSvg />
        </StyledView>

        <StyledView className='mx-[20px] my-[20px]'>
          <Creditcard />
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
    marginBottom:40
  },
});

export default Home;
