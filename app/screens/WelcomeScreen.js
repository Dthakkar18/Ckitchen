import React from 'react';
import { Text, ImageBackground, StyleSheet, View, SafeAreaView} from 'react-native';

function WelcomeScreen(props) {
    return (
        <ImageBackground style={styles.background} source={require("../assets/nightBackground.jpg")}>
            
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    background: {
        flex: 1,

    }
})

export default WelcomeScreen;