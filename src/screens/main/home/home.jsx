import React, { useRef, useState } from 'react';
import { Animated, FlatList, PanResponder } from 'react-native';
import { HomeSearchSvg, LoanSvg, RecieveSvg, SendISvg, StyledButton, StyledImage, StyledText, StyledView, TopUpSvgs } from '../../../common/StyledComponents';
import Creditcard from '../components/creditcard';
import TransactionItem from './components/transactionItem';

const transactions = [
  { id: '1', type: 'spotify', nameCompany: 'Spotify', companyType: 'Music Streaming', spendedMoney: '+ $10' },
  { id: '2', type: 'marketSpend', nameCompany: 'Amazon', companyType: 'Online Shopping', spendedMoney: '- $50' },
  { id: '3', type: 'apple', nameCompany: 'Apple', companyType: 'App Store', spendedMoney: '- $5' },
  { id: '4', type: 'moneyTransfer', nameCompany: 'Bank Transfer', companyType: 'Money Transfer', spendedMoney: '+ $100' },
  { id: '5', type: 'moneyTransfer', nameCompany: 'Bank Transfer', companyType: 'Money Transfer', spendedMoney: '+ $100' },
  { id: '6', type: 'moneyTransfer', nameCompany: 'Bank Transfer', companyType: 'Money Transfer', spendedMoney: '+ $100' },
  { id: '7', type: 'moneyTransfer', nameCompany: 'Bank Transfer', companyType: 'Money Transfer', spendedMoney: '+ $100' },
  { id: '8', type: 'moneyTransfer', nameCompany: 'Bank Transfer', companyType: 'Money Transfer', spendedMoney: '+ $100' },
  { id: '9', type: 'moneyTransfer', nameCompany: 'Bank Transfer', companyType: 'Money Transfer', spendedMoney: '+ $100' },
  { id: '10', type: 'moneyTransfer', nameCompany: 'Bank Transfer', companyType: 'Money Transfer', spendedMoney: '+ $100' },
  { id: '11', type: 'moneyTransfer', nameCompany: 'Bank Transfer', companyType: 'Money Transfer', spendedMoney: '+ $100' },
];

const Home = () => {
  const [visible, setVisible] = useState(true);
  const translateY = useRef(new Animated.Value(0)).current;

  const panResponder = useRef(
    PanResponder.create({
      onMoveShouldSetPanResponder: (evt, gestureState) => {
        return Math.abs(gestureState.dy) > 20;
      },
      onPanResponderMove: (evt, gestureState) => {
        translateY.setValue(gestureState.dy); 
      },
      onPanResponderRelease: (evt, gestureState) => {
        if (gestureState.dy < -100 && visible) {
          Animated.timing(translateY, {
            toValue: -200,
            duration: 300,
            useNativeDriver: true,
          }).start(() => {
            setVisible(false); 
          });
        } else if (gestureState.dy > 100 && !visible) {
          Animated.timing(translateY, {
            toValue: 0, 
            duration: 300,
            useNativeDriver: true,
          }).start(() => {
            setVisible(true); 
          });
        } else {
          Animated.timing(translateY, {
            toValue: visible ? 0 : -200,
            duration: 300,
            useNativeDriver: true,
          }).start();
        }
      },
    })
  ).current;

  return (
    <StyledView className='bg-[#161622]'>
      <Animated.View style={{ transform: [{ translateY }] }}>
        {visible && (
          <>
            <StyledView className='flex-row m-[20px] justify-between items-center'>
              <StyledView className='flex-row items-center'>
                <StyledImage className='w-[50px] h-[50px]' source={require('../../../assets/images/mepht.png')} />
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
          </>
        )}
      </Animated.View>

      <StyledText className='text-white font-bold text-[18px] my-[10px] mx-[30px]'>Transaction</StyledText>

      <FlatList
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
        contentContainerStyle={{ paddingHorizontal: 20, paddingBottom: 30 }}
        scrollEnabled={true}
        onTouchStart={() => {
          if (!visible) {
            Animated.timing(translateY, {
              toValue: 0,
              duration: 300,
              useNativeDriver: true,
            }).start(() => setVisible(true));
          }
        }}
        {...panResponder.panHandlers} 
      />
    </StyledView>
  );
};

export default Home;
