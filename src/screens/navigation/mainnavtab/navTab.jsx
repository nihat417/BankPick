import React from 'react';
import { StyleSheet } from 'react-native';
import { StyledView, StyledButton, TabHomeSvg, TabMyCardsSvg, TabStaticsSvg, TabSettingsSvg, StyledText } from '../../../common/StyledComponents';

const NavTab = ({ state, navigation }) => {
    const getIconColor = (index) => (state.index === index ? '#0066FF' : '#8B8B94');

    return (
        <StyledView style={styles.container}>
            <StyledButton onPress={() => navigation.navigate('Home', { screen: 'HomePage' })} style={styles.button}>
                <TabHomeSvg color={getIconColor(0)} />
                <StyledText style={[styles.label, { color: getIconColor(0) }]}>Home</StyledText>
            </StyledButton>
            <StyledButton onPress={() => navigation.navigate('Search', { screen: 'SearchPage' })} style={styles.button}>
                <TabMyCardsSvg color={getIconColor(1)} />
                <StyledText style={[styles.label, { color: getIconColor(1) }]}>Search</StyledText>
            </StyledButton>
            <StyledButton onPress={() => navigation.navigate('Youtube', { screen: 'YoutubeVideolistPage' })} style={styles.button}>
                <TabStaticsSvg color={getIconColor(2)} />
                <StyledText style={[styles.label, { color: getIconColor(2) }]}>Statics</StyledText>
            </StyledButton>
            <StyledButton onPress={() => navigation.navigate('Notification', { screen: 'NotificationPage' })} style={styles.button}>
                <TabSettingsSvg color={getIconColor(3)} />
                <StyledText style={[styles.label, { color: getIconColor(3) }]}>Settings</StyledText>
            </StyledButton>
        </StyledView>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#27273A',
        position: 'absolute',
        bottom: 0,
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-around',
        padding: 16,
    },
    button: {
        alignItems: 'center',
    },
    label: {
        marginTop: 4, 
        fontSize: 12,
    },
});

export default NavTab;
