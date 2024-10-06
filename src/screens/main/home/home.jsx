import React, { useRef, useState } from 'react';
import { Animated, FlatList, PanResponder } from 'react-native';
import {
  HomeSearchSvg,
  LoanSvg,
  RecieveSvg,
  SendISvg,
  StyledButton,
  StyledImage,
  StyledText,
  StyledView,
  TopUpSvgs,
} from '../../../common/StyledComponents';
import Creditcard from '../components/creditcard';
import TransactionItem from './components/transactionItem';

const transactions = [
  { id: '1', type: 'spotify', nameCompany: 'Spotify', companyType: 'Music Streaming', spendedMoney: '+ $10' },
  { id: '2', type: 'marketSpend', nameCompany: 'Amazon', companyType: 'Online Shopping', spendedMoney: '- $50' },
  { id: '3', type: 'apple', nameCompany: 'Apple', companyType: 'App Store', spendedMoney: '- $5' },
  { id: '4', type: 'moneyTransfer', nameCompany: 'Bank Transfer', companyType: 'Money Transfer', spendedMoney: '+ $100' },
  // ... другие транзакции
];

const Home = () => {
  const [visible, setVisible] = useState(true); // состояние видимости заголовка и кредитной карты
  const translateY = useRef(new Animated.Value(0)).current; // для анимации

  const panResponder = useRef(
    PanResponder.create({
      onMoveShouldSetPanResponder: (_, { dy }) => Math.abs(dy) > 20, // порог для определения жеста
      onPanResponderMove: (_, { dy }) => {
        // изменяем позицию при свайпе
        translateY.setValue(dy);
      },
      onPanResponderRelease: (_, { dy }) => {
        if (dy < -100) {
          // свайп вниз, скрыть элементы
          Animated.timing(translateY, {
            toValue: -100,
            duration: 300,
            useNativeDriver: true,
          }).start(() => setVisible(false)); // скрыть элементы после анимации
        } else if (dy > 100 && !visible) {
          // свайп вверх, показать элементы
          setVisible(true);
          Animated.timing(translateY, {
            toValue: 0,
            duration: 300,
            useNativeDriver: true,
          }).start();
        } else {
          // если не достигнуто пороговое значение, возвращаем назад
          Animated.timing(translateY, {
            toValue: visible ? 0 : -100, // Возвращаем к скрытому значению, если элементы скрыты
            duration: 300,
            useNativeDriver: true,
          }).start(() => {
            if (dy > 100) {
              setVisible(true); // Убедимся, что элементы видимы, если возвращаем их обратно
            }
          });
        }
      },
    })
  ).current;

  return (
    <StyledView className='bg-[#161622] h-screen' {...panResponder.panHandlers}>
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
        scrollEnabled={true}
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
      />
    </StyledView>
  );
};

export default Home;
