import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, View, Button, Alert } from 'react-native';
import auth from '@react-native-firebase/auth';
import { useNavigation } from '@react-navigation/native';
import { GoogleSignin, GoogleSigninButton, statusCodes } from '@react-native-google-signin/google-signin';
import GoogleLogin from './GoogleLogin';

const LoginScreen = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigation = useNavigation();

    const handleLogin = () => {
        auth().signInWithEmailAndPassword(email, password)
            .then(() => {
                Alert.alert('Đăng nhập thành công');
                // Chuyển hướng đến màn hình chính hoặc màn hình mong muốn sau khi đăng nhập thành công
                navigation.navigate('Home');
            })
            .catch(error => {
                Alert.alert('Đăng nhập thất bại', `${error.message}`);
            });
    };

    const goToSignUp = () => {
        navigation.navigate('SignUp');
    };



    return (
        <View style={styles.container}>
            <Text style={styles.title}>Đăng nhập</Text>
            <TextInput
                style={styles.input}
                placeholder="Email"
                value={email}
                onChangeText={setEmail}
                keyboardType="email-address"
            />
            <TextInput
                style={styles.input}
                placeholder="Password"
                value={password}
                onChangeText={setPassword}
            />
            <Button title="Đăng nhập" onPress={handleLogin} />
            <Text
                style={{ alignSelf: 'center', fontSize: 20, fontWeight: 'bold', color: 'red', marginTop: 30 }}
                onPress={goToSignUp}
            >
                Go To SignUp
            </Text>
            <GoogleLogin/>

        </View>
    );
};

export default LoginScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        padding: 16,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 24,
        textAlign: 'center',
    },
    input: {
        height: 40,
        borderColor: '#ccc',
        borderWidth: 1,
        marginBottom: 12,
        paddingHorizontal: 8,
    },
});
