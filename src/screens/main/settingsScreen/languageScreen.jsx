import React, { useState } from 'react';
import { StyledScrollView, StyledView, StyledButton, GoBackSvg, StyledText, SearchSvg, StyledInput, AzerbaijanFlag, SelectedLangSvg, EnglanFlag, TrukeyFalg, RussiaFalg, SpainFlag } from '../../../common/StyledComponents';
import { useNavigation } from '@react-navigation/native';

const LanguageScreen = () => {
    const [selectedLanguage, setSelectedLanguage] = useState('1'); 
    const navigation = useNavigation();

    const languages = [
        { id: '1', name: 'Azerbaijan', flag: <AzerbaijanFlag /> },
        { id: '2', name: 'English', flag: <EnglanFlag /> },
        { id: '3', name: 'Turkish', flag: <TrukeyFalg /> },
        { id: '4', name: 'Russian', flag: <RussiaFalg /> },
        { id: '5', name: 'Spanish', flag: <SpainFlag /> },
    ];

    const handleSelect = (id) => {
        setSelectedLanguage(id);
    };

    return (
        <StyledScrollView className='bg-[#161622] h-screen'>
            {/* Header */}
            <StyledView  className='relative mx-[20px] my-[40px] h-[50px]'>
                <StyledButton onPress={()=>navigation.goBack()} className='absolute left-0 top-0 bottom-0 justify-center'>
                    <GoBackSvg />
                </StyledButton>
                <StyledText className='text-white text-[18px] text-center'>
                    Language
                </StyledText>
            </StyledView>

            {/* Search */}
            <StyledView className='bg-[#232533] mx-[20px] rounded-[10px] mb-[30px] flex-row items-center'>
                <StyledView className='p-2'>
                    <SearchSvg />
                </StyledView>
                <StyledInput 
                    placeholder='Search Language' 
                    placeholderTextColor='#BBBBC1' 
                    className='flex-1 text-white'
                />
            </StyledView>

            {/* Languages */}
            {languages.map((lang) => (
                <StyledButton 
                    key={lang.id} 
                    onPress={() => handleSelect(lang.id)} 
                    className='flex-row items-center mx-[20px] mb-[10px] p-[10px] border-b-[1px] border-[#232533] justify-between'
                >
                    <StyledView className='flex-row items-center'>
                        {lang.flag}
                        <StyledText className='mx-[20px] text-[16px] text-[#fff]'>{lang.name}</StyledText>
                    </StyledView>
                    {selectedLanguage === lang.id && <SelectedLangSvg />}
                </StyledButton>
            ))}
        </StyledScrollView>
    );
};

export default LanguageScreen;