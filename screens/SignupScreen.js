import React, {useState} from "react";
import {View, TextInput, StyleSheet, TouchableOpacity, Text, Button} from "react-native";
import auth from '@react-native-firebase/auth';



const SignupScreen = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const createUser = () => {
        
        auth()
        .createUserWithEmailAndPassword(email, password)
        .then(() => {
            console.log('User account created & signed in!');
        })
        .catch(error => {
            if (error.code === 'auth/email-already-in-use') {
            console.log('That email address is already in use!');
            }

            if (error.code === 'auth/invalid-email') {
            console.log('That email address is invalid!');
            }

            console.error(error);
        });
    }
    const logauot =() => {
        auth().signOut();
    }
    return(
        <View style={styles.container}>
            <TextInput 
                value={email}
                placeholder="mail"
                onChangeText={setEmail}
                autoCapitalize="none"
                type="email"
            />
            <TextInput placeholder="password"
                value={password}
                onChangeText={setPassword}
                type="password"
                secureTextEntry={true}
            />
            <TextInput placeholder="confirm Password"
                type="password"
                secureTextEntry={true}
            />
            <Button title="SingUp" style={styles.buttonContainer} onPress={createUser} />
            <Button title="Logaout" style={styles.buttonContainer} onPress={logauot} />
            
        </View>      
    );
};

export default SignupScreen;

const styles = StyleSheet.create({
    container: {
      backgroundColor: '#f9fafd',
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      padding: 20,
    },
    text: {
      fontFamily: 'Kufam-SemiBoldItalic',
      fontSize: 28,
      marginBottom: 10,
      color: '#051d5f',
    },
    navButton: {
      marginTop: 15,
    },
    navButtonText: {
      fontSize: 18,
      fontWeight: '500',
      color: '#2e64e5',
      fontFamily: 'Lato-Regular',
    },
    textPrivate: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      marginVertical: 35,
      justifyContent: 'center',
    },
    color_textPrivate: {
      fontSize: 13,
      fontWeight: '400',
      fontFamily: 'Lato-Regular',
      color: 'grey',
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