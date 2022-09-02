import React from 'react';
import { Text, ImageBackground, StyleSheet, View, SafeAreaView, Button} from 'react-native';

function WelcomeScreen(props) {
    return (
        <ImageBackground style={styles.background} source={require("../assets/kitchenBackground.jpg")}>
            <SafeAreaView style={styles.titleView}>
                <Text style={styles.text}>Ck's Kitchen</Text>
            </SafeAreaView>
            <SafeAreaView style={styles.buttonView}>
                <Button
                    title="Place Order"
                    color="white"
                    onPress={() => alert("Place Order Clicked!!")}
                />
            </SafeAreaView>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
    },
    titleView: {
        position: "absolute",
        top: 200,
        bottom: 0,
        right: 0,
        left: 0,
        textAlign: "center",
        alignItems: "center"
    },
    buttonView: {
        position: "absolute",
        top: 450,
        bottom: 355,
        right: 120,
        left: 120,
        textAlign: "center",
        alignItems: "center",
        backgroundColor: "black",
        borderRadius: 10
    },
    text: {
        fontFamily: "Arial",
        fontSize: 30,
        fontWeight: "bold"
    },
    button: {

    }
})

export default WelcomeScreen;