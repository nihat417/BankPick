import {Text, View, Image, ScrollView,TextInput,TouchableOpacity} from 'react-native';
import { styled } from "nativewind";

import BankPickLogoSvg from '../assets/svg/BankPickLogo'
import EmailInputSvg from '../assets/svg/EmailInputSvg'
import PasswordSvg from '../assets/svg/PasswordSvg'
import PasswordEyeOnSvg from '../assets/svg/PasswordEyeOnSvg'
import PasswordEyeOffSvg from '../assets/svg/PasswordEyeOffSvg'
import GoBackSvg from '../assets/svg/GoBackSvg'
import RegisterPhoneSvg from '../assets/svg/RegisterPhoneSvg'
import TabHomeSvg from '../assets/svg/TabHomeSvg'
import TabSettingsSvg from '../assets/svg/TabSettingsSvg'
import TabMyCardsSvg from '../assets/svg/TabMyCardsSvg'
import TabStaticsSvg from '../assets/svg/TabStaticsSvg'
import HomeSearchSvg from '../assets/svg/HomeSearchSvg'
import VisaCreditCardFront from '../assets/svg/VisaCreditCardFront'
import VisaCreditCardBack from '../assets/svg/VisaCreditCardBack'
import LoanSvg from '../assets/svg/LoanSvg'
import SendISvg from '../assets/svg/SendISvg'
import TopUpSvgs from '../assets/svg/TopUpSvg'
import RecieveSvg from '../assets/svg/RecieveSvg'
import SpotifySvg from '../assets/svg/SpotifySvg'
import AppleSvg from '../assets/svg/AppleSvg'
import MonetTransferSvg from '../assets/svg/MonetTransferSvg'
import MarketSpendSvg from '../assets/svg/MarketSpendSvg'


export const StyledView = styled(View);
export const StyledText = styled(Text);
export const StyledInput = styled(TextInput);
export const StyledButton = styled(TouchableOpacity);
export const StyledScrollView = styled(ScrollView);
export const StyledImage = styled(Image);

export {BankPickLogoSvg,EmailInputSvg,PasswordSvg,PasswordEyeOnSvg,PasswordEyeOffSvg,GoBackSvg,RegisterPhoneSvg
    ,TabHomeSvg,TabStaticsSvg,TabMyCardsSvg,TabSettingsSvg,HomeSearchSvg,
    VisaCreditCardFront,VisaCreditCardBack,RecieveSvg,SendISvg,TopUpSvgs,LoanSvg,
    AppleSvg,SpotifySvg,MonetTransferSvg,MarketSpendSvg}