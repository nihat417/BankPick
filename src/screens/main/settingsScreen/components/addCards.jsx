import React, { useState } from 'react';
import { StyledView, StyledButton, GoBackSvg, StyledText, VisaCreditCardBack, UserSvg, StyledInput, PaymentSvg } from '../../../../common/StyledComponents';
import { useNavigation } from '@react-navigation/native';

const AddCards = () => {
  const navigation = useNavigation()
  const [cardHolderName, setCardHolderName] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [expiryDate, setExpiryDate] = useState({ month: '', year: '' });
  const [cvv, setCvv] = useState('');

  const formatCardNumber = (number) => {
    return number.replace(/\s?/g, '').replace(/(\d{4})/g, '$1 ').trim();
  };

  const handleCardNumberChange = (text) => {
    const rawText = text.replace(/\s/g, '');
    if (rawText.length <= 16) {
      const formattedText = formatCardNumber(rawText);
      setCardNumber(formattedText);
    }
  };

  return (
    <StyledView className='bg-[#161622] h-screen'>
      {/* header */}
      <StyledView className='flex-row justify-between mx-[20px] my-[40px] items-center'>
        <StyledButton onPress={() => navigation.goBack()}>
          <GoBackSvg />
        </StyledButton>
        <StyledText className='mr-[50px] text-white text-[18px]'>Add New Card</StyledText>
        <StyledView />
      </StyledView>

      <StyledView className='m-[20px]'>
        <VisaCreditCardBack />
        {/* Card Information Display */}
        <StyledText className='absolute self-center text-[26px] left-[10%] bottom-[50%] text-white'>
          {cardNumber || 'Card Number'}
        </StyledText>
        <StyledText className='absolute bottom-[37%] left-[6%] text-[14px] text-white'>
          {cardHolderName || 'CardHolder Name'}
        </StyledText>
        <StyledText className='absolute bottom-[17%] left-[4%] text-[13px] text-white'>
          {expiryDate.month || 'MM'}/{expiryDate.year || 'YYYY'}
        </StyledText>
        <StyledText className='absolute bottom-[17%] left-[22%] text-[13px] text-white'>
          {cvv || 'CVV'}
        </StyledText>
      </StyledView>

      {/* Full Name Input */}
      <StyledText className='text-[#A2A2A7] text-[14px] mx-[30px] mt-[30px]'>Full Name</StyledText>
      <StyledView className='flex-row mx-[30px] border-b-[1px] border-[#232533]'>
        <StyledButton className='my-[15px]'>
          <UserSvg />
        </StyledButton>
        <StyledInput
          className='text-[#fff] text-[14px]'
          placeholderTextColor='#fff'
          placeholder='Cardholder Name'
          value={cardHolderName}
          onChangeText={setCardHolderName}
        />
      </StyledView>

      {/* Expiry Date and CVV */}
      <StyledView className='flex-row justify-between mx-[30px] my-[20px]'>
        <StyledView className='border-b-[1px] border-[#232533]'>
          <StyledText className='text-[#A2A2A7] text-[14px]'>Expiry Date</StyledText>
          <StyledView className='flex-row'>
            <StyledInput
              className='text-[#fff]'
              placeholder='MM'
              placeholderTextColor='#fff'
              value={expiryDate.month}
              onChangeText={(text) => setExpiryDate({ ...expiryDate, month: text })}
            />
            <StyledText className='text-[#fff] my-[15px]'>/</StyledText>
            <StyledInput
              className='text-[#fff]'
              placeholder='YYYY'
              placeholderTextColor='#fff'
              value={expiryDate.year}
              onChangeText={(text) => setExpiryDate({ ...expiryDate, year: text })}
            />
          </StyledView>
        </StyledView>
        <StyledView className='border-b-[1px] border-[#232533]'>
          <StyledText className='text-[#A2A2A7] text-[14px]'>4-digit CVV</StyledText>
          <StyledInput
            className='text-[#fff]'
            placeholder='CVV'
            placeholderTextColor='#fff'
            value={cvv}
            onChangeText={setCvv}
          />
        </StyledView>
      </StyledView>

      {/* Card Number Input */}
      <StyledText className='text-[#A2A2A7] text-[14px] mx-[30px] mt-[30px]'>Card Number</StyledText>
      <StyledView className='flex-row mx-[30px] border-b-[1px] border-[#232533]'>
        <StyledButton className='my-[15px]'>
          <PaymentSvg />
        </StyledButton>
        <StyledInput
          className='text-[#fff] text-[14px]'
          placeholderTextColor='#fff'
          placeholder='4562 1122 4595 7852'
          value={cardNumber}
          onChangeText={handleCardNumberChange}
        />
      </StyledView>
    </StyledView>
  );
};

export default AddCards;
