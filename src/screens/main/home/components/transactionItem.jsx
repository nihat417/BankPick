import React from 'react'
import { AppleSvg, MarketSpendSvg, MonetTransferSvg, SpotifySvg, StyledText, StyledView } from '../../../../common/StyledComponents';

const TransactionItem = ({type,nameCompany,companyType,spendedMoney}) => {

    const renderIcon = (type) => {
        switch (type) {
          case 'spotify':
            return <SpotifySvg />;
          case 'marketSpend':
            return <MarketSpendSvg />;
          case 'apple':
            return <AppleSvg />;
          case 'moneyTransfer':
            return <MonetTransferSvg />;
          default:
            return null;
        }
      };
  return (
    <StyledView className='flex-row justify-between items-center p-[10px] my-[5px]'>
        <StyledView className='flex-row'>
            {renderIcon(type)}
            <StyledView className='mx-[10px]'>
                <StyledText className='text-[#fff] text-[16px] font-medium'>{nameCompany}</StyledText>
                <StyledText className='text-[#707070] text-[13px]'>{companyType}</StyledText>
            </StyledView>
        </StyledView>
            <StyledText className='text-[#fff] text-[17px] font-medium'>{spendedMoney}</StyledText>
    </StyledView>
  )
}

export default TransactionItem;