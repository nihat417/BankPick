import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import { StyledScrollView, GoBackSvg, StyledView, StyledText, StyledButton, AllTransactionsSvg, StyledInput, SearchSvg, XButtonSvg, XbuttonSvg } from '../../../common/StyledComponents';
import TransactionItem from '../home/components/transactionItem';
import { useNavigation } from '@react-navigation/native';
import Animated, { useAnimatedStyle, withTiming } from 'react-native-reanimated';

const AllTransactions = () => {
  const navigation = useNavigation();
  const [isSearchVisible, setIsSearchVisible] = useState(false); 

  const animatedStyle = useAnimatedStyle(() => {
    return {
      height: withTiming(isSearchVisible ? 50 : 0, { duration: 300 }),
      opacity: withTiming(isSearchVisible ? 1 : 0, { duration: 300 }),
    };
  });

  const toggleSearch = () => {
    setIsSearchVisible((prev) => !prev);
  };

  return (
    <StyledView className="bg-[#161622] h-screen">
      {/* header */}
      <StyledView className="flex-row justify-between mx-[20px] mt-[40px] mb-[10px] items-center">
        <StyledButton onPress={() => navigation.goBack()}>
          <GoBackSvg />
        </StyledButton>
        <StyledText className="text-white text-[18px]">Transaction History</StyledText>

        <StyledButton onPress={toggleSearch}>
          {isSearchVisible ? <XbuttonSvg /> : <AllTransactionsSvg />}
        </StyledButton>
      </StyledView>

      <Animated.View style={[styles.searchContainer, animatedStyle]}>
        <StyledView className="bg-[#232533] mx-[20px] rounded-[10px] flex-row items-center">
          <StyledView className="p-2">
            <SearchSvg />
          </StyledView>
          <StyledInput
            placeholder="Search Language"
            placeholderTextColor="#BBBBC1"
            className="flex-1 text-white"
          />
        </StyledView>
      </Animated.View>

      <StyledScrollView className="mx-[20px] mb-[20px]">
        <TransactionItem type="spotify" nameCompany="Spotify" companyType="Music Streaming" spendedMoney="- $10" />
        <TransactionItem type="spotify" nameCompany="Spotify" companyType="Music Streaming" spendedMoney="- $10" />
        <TransactionItem type="marketSpend" nameCompany="Amazon" companyType="Online Shopping" spendedMoney="- $15" />
        <TransactionItem type="apple" nameCompany="Apple" companyType="App Store" spendedMoney="- $120" />
        <TransactionItem type="marketSpend" nameCompany="Amazon" companyType="Online Shopping" spendedMoney="- $15" />
        <TransactionItem type="moneyTransfer" nameCompany="Amazon" companyType="Online Shopping" spendedMoney="- $15" />
        <TransactionItem type="marketSpend" nameCompany="Amazon" companyType="Online Shopping" spendedMoney="- $15" />
        <TransactionItem type="moneyTransfer" nameCompany="Amazon" companyType="Online Shopping" spendedMoney="- $15" />
        <TransactionItem type="marketSpend" nameCompany="Amazon" companyType="Online Shopping" spendedMoney="- $15" />
        <TransactionItem type="marketSpend" nameCompany="Amazon" companyType="Online Shopping" spendedMoney="- $15" />
        <TransactionItem type="moneyTransfer" nameCompany="Amazon" companyType="Online Shopping" spendedMoney="- $15" />
        <TransactionItem type="marketSpend" nameCompany="Amazon" companyType="Online Shopping" spendedMoney="- $15" />
      </StyledScrollView>
    </StyledView>
  );
};

const styles = StyleSheet.create({
  searchContainer: {
    overflow: 'hidden',
    marginBottom: 30,
  },
});

export default AllTransactions;
