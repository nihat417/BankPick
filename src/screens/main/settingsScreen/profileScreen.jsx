import React,{useContext,useCallback} from 'react';
import { TabBarVisibilityContext } from '../../../contexts/TabBarVisibilityContext';
import { StyledView,StyledButton,GoBackSvg,StyledText,ProfileSvg, StyledImage, UserSvg, RightArrowSvg, PaymentSvg, PaymentFinanceSvg, ProfileBellSvg, MessageSvg, LocationSvg, TabSettingsSvg } from '../../../common/StyledComponents';
import { useNavigation,useFocusEffect } from '@react-navigation/native';

const ProfileScreen = () => {
    const { setTabBarVisible } = useContext(TabBarVisibilityContext);
    const navigation = useNavigation();
    
    useFocusEffect(
        useCallback(() => {
          setTabBarVisible(false);
          return () => {
            setTabBarVisible(true);
          };
        }, [])
      );
  return (
    <StyledView className='bg-[#161622] h-screen'>

        {/* header */}
        <StyledView className='flex-row justify-between mx-[20px] my-[40px] items-center'>
            <StyledButton onPress={()=>navigation.goBack()}>
                <GoBackSvg/>
            </StyledButton>
            <StyledText className='text-white text-[18px]'>Settings</StyledText>
            <StyledButton>
                <ProfileSvg/>
            </StyledButton>
        </StyledView>

        <StyledView className='flex-row mx-[20px] items-center'>
            <StyledImage className='w-[70px] h-[70px] rounded-full' source={require('../../../assets/images/mephoto.jpg')}/>
            <StyledView className='mx-[20px]'>
                <StyledText className='text-[19px] text-[#fff]'>Nihat Akremi</StyledText>
                <StyledText className='text-[12px] text-[#7E848D]'>Full-Stack Developer</StyledText>
            </StyledView>
        </StyledView>


        <StyledButton onPress={()=>navigation.navigate('PersonalInfoScreen')} className='mx-[20px] mt-[20px] mb-[10px] p-[10px] border-b-[1px] border-[#232533]'>
            <StyledView className='flex-row justify-between'>
                <StyledView className='flex-row'>
                    <UserSvg/>
                    <StyledText className='text-white text-[16px] mx-[10px]'>Personal Information</StyledText>
                </StyledView>
                <RightArrowSvg/>
            </StyledView>
        </StyledButton>
        <StyledButton className='mx-[20px] mb-[10px] p-[10px] border-b-[1px] border-[#232533]'>
            <StyledView className='flex-row justify-between'>
                <StyledView className='flex-row'>
                    <PaymentSvg/>
                    <StyledText className='text-white text-[16px] mx-[10px]'>Payment Preferences</StyledText>
                </StyledView>
                <RightArrowSvg/>
            </StyledView>
        </StyledButton>
        <StyledButton className='mx-[20px] mb-[10px] p-[10px] border-b-[1px] border-[#232533]'>
            <StyledView className='flex-row justify-between'>
                <StyledView className='flex-row'>
                    <PaymentFinanceSvg/>
                    <StyledText className='text-white text-[16px] mx-[10px]'>Banks and Cards</StyledText>
                </StyledView>
                <RightArrowSvg/>
            </StyledView>
        </StyledButton>
        <StyledButton className='mx-[20px] mb-[10px] p-[10px] border-b-[1px] border-[#232533]'>
            <StyledView className='flex-row justify-between'>
                <StyledView className='flex-row'>
                    <ProfileBellSvg/>
                    <StyledText className='text-white text-[16px] mx-[10px]'>Notifications</StyledText>
                </StyledView>
                <RightArrowSvg/>
            </StyledView>
        </StyledButton>
        <StyledButton className='mx-[20px] mb-[10px] p-[10px] border-b-[1px] border-[#232533]'>
            <StyledView className='flex-row justify-between'>
                <StyledView className='flex-row'>
                    <MessageSvg/>
                    <StyledText className='text-white text-[16px] mx-[10px]'>Message Center</StyledText>
                </StyledView>
                <RightArrowSvg/>
            </StyledView>
        </StyledButton>
        <StyledButton className='mx-[20px] mb-[10px] p-[10px] border-b-[1px] border-[#232533]'>
            <StyledView className='flex-row justify-between'>
                <StyledView className='flex-row'>
                    <LocationSvg/>
                    <StyledText className='text-white text-[16px] mx-[10px]'>Address</StyledText>
                </StyledView>
                <RightArrowSvg/>
            </StyledView>
        </StyledButton>
        <StyledButton className='mx-[20px] mb-[10px] p-[10px] border-b-[1px] border-[#232533]'>
            <StyledView className='flex-row justify-between'>
                <StyledView className='flex-row'>
                    <TabSettingsSvg/>
                    <StyledText className='text-white text-[16px] mx-[10px]'>Settings</StyledText>
                </StyledView>
                <RightArrowSvg/>
            </StyledView>
        </StyledButton>

    </StyledView>
  )
}

export default ProfileScreen;