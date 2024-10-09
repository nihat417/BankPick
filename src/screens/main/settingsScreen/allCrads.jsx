import React,{useContext,useCallback, useEffect} from 'react';
import { StyledScrollView,StyledView,StyledButton,GoBackSvg,StyledText, AddSvg, AddCardBtnSvg } from '../../../common/StyledComponents';
import { useNavigation,useFocusEffect } from '@react-navigation/native';
import { TabBarVisibilityContext } from '../../../contexts/TabBarVisibilityContext';
import CreditCardMaster from '../components/creditCardMaster';
import CreditCardVisa from '../components/creditcardVisa';

const AllCrads = () => {
    const navigation = useNavigation();
    const { setTabBarVisible } = useContext(TabBarVisibilityContext);
     
    useEffect(()=>{
        setTabBarVisible(false);
    })

  return (
    <StyledView className='bg-[#161622] h-screen'>

        {/* header */}
        <StyledView className='flex-row justify-between mx-[20px] my-[40px] items-center'>
            <StyledButton onPress={()=>navigation.goBack()}>
                <GoBackSvg/>
            </StyledButton>
            <StyledText className='mr-[50px] text-white text-[18px]'>All Cards</StyledText>
            <StyledView/>
        </StyledView>

        <StyledScrollView>
            <StyledView className='mx-[20px] mt-[10px]'>
                <CreditCardMaster/>
            </StyledView>

            <StyledView className='mx-[20px] mt-[20px]'>
                <CreditCardVisa/>
            </StyledView>

            <StyledView className='mx-[20px] mt-[20px]'>
                <CreditCardMaster/>
            </StyledView>

            <StyledView className='mb-[150px]'/>
        </StyledScrollView>
        

        <StyledButton className='absolute bottom-0 self-center mb-[40px] mx-[20px] rounded-[10px] bg-[#0066FF] p-[10px]'>
            <StyledView className='flex-row justify-center px-[100px] py-[10px] items-center'>
                <StyledText className="text-white mr-[5px]">Add Card</StyledText>
                <AddCardBtnSvg/>
            </StyledView>
        </StyledButton>

    </StyledView>
  )
}

export default AllCrads;