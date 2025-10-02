import {
    Image,
    Pressable,
    SafeAreaView,
    StyleSheet,
    Text,
    TextInput,
    View,
    Alert,
    ScrollView,
    KeyboardAvoidingView,
    StatusBar,
    ActivityIndicator,
} from 'react-native';
import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import color from '../../src/Theme/color';
import rfSpacing from '../../src/Theme/rfSpacing';
import { getAuth, signInWithEmailAndPassword } from '@react-native-firebase/auth';

const Login = () => {
    const navigation = useNavigation();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [loading, setLoading] = useState(false);

    const handleLogin = async () => {
        if (!email.trim() || !password.trim()) {
            Alert.alert('Wait', 'Email or password is missing', [{ text: 'OK' }]);
            return;
        }
        setLoading(true);
        try {
            const auth = getAuth();
            await signInWithEmailAndPassword(auth, email.trim(), password);
            await AsyncStorage.setItem('isLoggedIn', 'true');
            Alert.alert('Success', 'Login successful!', [{ text: 'OK' }]);
            // Don't navigate. Auth state will update and App.tsx will change screen.
        } catch (error) {
            let errorMessage = 'An error occurred during login';
            if (error.code === 'auth/invalid-email') {
                errorMessage = 'Invalid email address';
            } else if (error.code === 'auth/user-not-found') {
                errorMessage = 'No account found with this email';
            } else if (error.code === 'auth/wrong-password') {
                errorMessage = 'Incorrect password';
            } else if (error.code === 'auth/invalid-credential') {
                errorMessage = 'Invalid email or password';
            }
            Alert.alert('Login Failed', errorMessage, [{ text: 'OK' }]);
        } finally {
            setLoading(false);
        }
    };

    return (
        <SafeAreaView style={styles.wrapper}>
            <StatusBar
                translucent={true}
                barStyle={'dark-content'}
                backgroundColor={'transparent'}
            />
            <KeyboardAvoidingView style={{ flex: 1 }}>
                <ScrollView
                    contentContainerStyle={styles.scrollContainer}
                    keyboardShouldPersistTaps="handled">
                    <View style={styles.container}>
                        <Text style={styles.text}>Login Here</Text>
                        <Text style={styles.text2}>
                            Log in to discover plant recommendations, expert care guides and
                            more
                        </Text>
                    </View>
                    <View style={styles.section}>
                        <Text style={styles.label}>Email</Text>
                        <View style={styles.inputContainer}>
                            <Image source={require('../pic/mail.png')} style={styles.icon} />
                            <TextInput
                                style={styles.input}
                                placeholder="Enter your email"
                                placeholderTextColor="#7C7C7C"
                                value={email}
                                onChangeText={setEmail}
                                keyboardType="email-address"
                                autoCapitalize="none"
                                editable={!loading}
                            />
                        </View>
                    </View>
                    <View style={styles.section}>
                        <Text style={styles.label}>Password</Text>
                        <View style={styles.inputContainer}>
                            <Image
                                source={require('../pic/forgot.png')}
                                style={styles.icon}
                            />
                            <TextInput
                                style={styles.input}
                                placeholder="Enter your password"
                                placeholderTextColor="#7C7C7C"
                                secureTextEntry={!showPassword}
                                value={password}
                                onChangeText={setPassword}
                                editable={!loading}
                            />
                            <Pressable onPress={() => setShowPassword(!showPassword)}>
                                <Image
                                    source={require('../pic/eye.png')}
                                    style={styles.eyeIcon}
                                />
                            </Pressable>
                        </View>
                    </View>
                    <Pressable onPress={() => navigation.navigate('Forgot')}>
                        <Text style={styles.forgotText}>Forgot Password?</Text>
                    </Pressable>
                    <Pressable onPress={() => navigation.replace('Register')}>
                        <Text style={styles.signupText}>
                            Don't have an account? <Text style={styles.signupLink}>Sign Up</Text>
                        </Text>
                    </Pressable>
                </ScrollView>
                <Pressable
                    style={[styles.loginBtn, loading && styles.loginBtnDisabled]}
                    onPress={handleLogin}
                    disabled={loading}>
                    {loading ? (
                        <ActivityIndicator color={color.F_White} />
                    ) : (
                        <Text style={styles.loginText}>Login</Text>
                    )}
                </Pressable>
            </KeyboardAvoidingView>
        </SafeAreaView>
    );
};

export default Login;


const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        paddingHorizontal: rfSpacing['16x'],
        paddingTop: StatusBar.currentHeight,
    },
    scrollContainer: {
        flexGrow: 1,
        paddingBottom: rfSpacing['20x'],
    },
    backIcon: {
        marginTop: rfSpacing['8x'],
        width: rfSpacing['32x'],
        height: rfSpacing['32x'],
    },
    container: {
        marginTop: rfSpacing['14x'],
        justifyContent: 'center',
        alignItems: 'flex-start',
        marginTop: rfSpacing['16x'],
    },
    text: {
        fontSize: rfSpacing['24x'],
        fontFamily: 'Adamina-Regular',
        color: color.F_Black,
        fontWeight: '400',
        marginBottom: rfSpacing['8x'],
    },
    text2: {
        fontFamily: 'Adamina-Regular',
        fontSize: rfSpacing['16x'],
        color: color.F_InputContainer,
        textAlign: 'left',
        lineHeight: rfSpacing['22x'],
    },
    section: {
        marginTop: rfSpacing['20x'],
    },
    label: {
        fontSize: rfSpacing['16x'],
        fontWeight: '500',
        marginBottom: rfSpacing['8x'],
        color: color.F_Black,
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        borderColor: color.F_LightText,
        borderWidth: rfSpacing['1x'],
        borderRadius: rfSpacing['12x'],
        paddingHorizontal: rfSpacing['10x'],
        paddingVertical: rfSpacing['4x'],
        backgroundColor: 'rgba(255, 255, 255, 0.9)',
    },
    icon: {
        width: rfSpacing['20x'],
        height: rfSpacing['20x'],
        tintColor: color.F_InputContainer,
        marginRight: rfSpacing['8x'],
        resizeMode: 'contain',
    },
    input: {
        flex: 1,
        minHeight: rfSpacing['44x'],
        fontSize: rfSpacing['16x'],
        color: color.F_Black,
    },
    forgotText: {
        color: color.F_OnBoard,
        textAlign: 'right',
        marginTop: rfSpacing['14x'],
        fontWeight: '500',
        fontSize: rfSpacing['14x'],
    },
    signupText: {
        color: color.F_InputContainer,
        textAlign: 'center',
        marginTop: rfSpacing['10x'],
        fontSize: rfSpacing['14x'],
    },
    signupLink: {
        color: color.F_OnBoard,
        fontWeight: '600',
    },
    loginBtn: {
        flexDirection: 'row',
        backgroundColor: color.F_OnBoard,
        marginVertical: rfSpacing['16x'],
        paddingVertical: rfSpacing['14x'],
        borderRadius: rfSpacing['12x'],
        justifyContent: 'center',
        alignItems: 'center',
    },
    loginBtnDisabled: {
        opacity: 0.6,
    },
    loginText: {
        color: color.F_White,
        fontSize: rfSpacing['16x'],
        fontWeight: '600',
    },
    eyeIcon: {
        width: rfSpacing['20x'],
        height: rfSpacing['20x'],
        tintColor: color.F_InputContainer,
        resizeMode: 'contain',
    },
});