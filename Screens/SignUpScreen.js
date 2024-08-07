import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, View, Button, Alert } from 'react-native';
import auth from '@react-native-firebase/auth';
import { useNavigation } from '@react-navigation/native';


const SignUpScreen = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigation = useNavigation()

    const next = () => {
        navigation.navigate('Login')
    }

    const handleSignUp = () => {
        auth().createUserWithEmailAndPassword(email, password)
            .then(() => {
                Alert.alert('tạo tài khoản thành công')
            })
            .catch(error => {
                Alert.alert(`${error}`)
            })
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Đăng ký</Text>
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
            <Button title="Đăng ký" onPress={handleSignUp} />
            <Text style={{alignSelf: 'center', fontSize: 20, fontWeight: 'bold', color: 'red', marginTop: 30}} onPress={next}>
                Go To Login
            </Text>
        </View>
    );
};

export default SignUpScreen;

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
