import {Text, View, Image, ScrollView,TextInput,TouchableOpacity} from 'react-native';
import { styled } from "nativewind";

import BankPickLogoSvg from '../assets/svg/BankPickLogo'
import EmailInputSvg from '../assets/svg/EmailInputSvg'
import PasswordSvg from '../assets/svg/PasswordSvg'
import PasswordEyeOnSvg from '../assets/svg/PasswordEyeOnSvg'
import PasswordEyeOffSvg from '../assets/svg/PasswordEyeOffSvg'



export const StyledView = styled(View);
export const StyledText = styled(Text);
export const StyledInput = styled(TextInput);
export const StyledButton = styled(TouchableOpacity);
export const StyledScrollView = styled(ScrollView);
export const StyledImage = styled(Image);

export {BankPickLogoSvg,EmailInputSvg,PasswordSvg,PasswordEyeOnSvg,PasswordEyeOffSvg}