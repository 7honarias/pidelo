import React from "react";
import {View, TextInput, StyleSheet, TouchableOpacity, Text} from "react-native";

const LoginScreen = ({navigation}) => {
    return(
        <View style={styles.container}>
            <TextInput placeholder="mail"
                type="email"
            />
            <TextInput placeholder="password"
                type="password"
                secureTextEntry={true}
            />

            <TouchableOpacity style={styles.buttonContainer}>
                <Text style={styles.buttonText}>Login</Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={styles.forgotButton}
                onPress={() => navigation.navigate('Signup')}>
                <Text>
                Don't have an acount? Create here
                </Text>
            </TouchableOpacity>
        </View>      
    );
};

export default LoginScreen;

const styles = StyleSheet.create({
    container: {
      justifyContent: 'center',
      alignItems: 'center',
      padding: 20,
      paddingTop: 50
    },
    forgotButton: {
        marginVertical: 35,
    },
    buttonText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#ffffff',
    },
    buttonContainer: {
        marginTop: 10,
        width: '100%',
        height: 50,
        backgroundColor: '#2e64e5',
        padding: 10,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 3,
    },
});