import {
  Image,
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  View,
  KeyboardAvoidingView,
  ScrollView,
  Alert,
  StatusBar,
  ActivityIndicator,
} from 'react-native';
import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import color from '../../src/Theme/color';
import rfSpacing from '../../src/Theme/rfSpacing';
import LinearGradient from 'react-native-linear-gradient';
import { getAuth, createUserWithEmailAndPassword, updateProfile } from '@react-native-firebase/auth';

const Register = () => {
  const navigation = useNavigation();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSignUp = async () => {
    if (!name || !email || !password || !confirmPassword) {
      Alert.alert('Rukk', 'Please fill all fields', [{ text: 'Acha Krta hu' }]);
      return;
    }
    if (password !== confirmPassword) {
      Alert.alert('Rukk', 'Passwords do not match', [{ text: 'Acha Krta hu' }]);
      return;
    }
    if (password.length < 6) {
      Alert.alert('Rukk', 'Password must be at least 6 characters', [
        { text: 'Acha Krta hu' },
      ]);
      return;
    }
    setLoading(true);
    try {
      const auth = getAuth();
      const userCredential = await createUserWithEmailAndPassword(auth, email.trim(), password);
      await updateProfile(userCredential.user, {
        displayName: name.trim(),
      });
      setLoading(false);
      Alert.alert(
        'Success',
        'Account created successfully!',
        [
          {
            text: 'OK',
            onPress: () => navigation.navigate('Main'),
          },
        ],
      );
    } catch (error) {
      let errorMessage = 'An error occurred during registration';
      if (error.code === 'auth/email-already-in-use') {
        errorMessage = 'This email is already registered';
      } else if (error.code === 'auth/invalid-email') {
        errorMessage = 'Invalid email address';
      } else if (error.code === 'auth/weak-password') {
        errorMessage = 'Password is too weak';
      } else if (error.code === 'auth/network-request-failed') {
        errorMessage = 'Network error. Check your internet connection';
      } else {
        errorMessage = `Error: ${error.code}\n${error.message}`;
      }
      setLoading(false);
      Alert.alert('Registration Failed', errorMessage, [{ text: 'OK' }]);
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
          <View>
            <Pressable onPress={() => navigation.goBack()}>
              <Image
                style={styles.backIcon}
                resizeMode="contain"
                source={require('../pic/Pre.png')}
              />
            </Pressable>
          </View>
          <View style={styles.container}>
            <Text style={styles.text}>Create Account</Text>
            <Text style={styles.text2}>
              Sign up to get personalized plant recommendations and care tips
            </Text>
          </View>
          <View style={styles.section}>
            <Text style={styles.label}>Full Name</Text>
            <View style={styles.inputContainer}>
              <Image source={require('../pic/user.png')} style={styles.icon} />
              <TextInput
                style={styles.input}
                placeholder="Enter your full name"
                placeholderTextColor="#7C7C7C"
                value={name}
                onChangeText={setName}
                editable={!loading}
              />
            </View>
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
              <Pressable onPress={() => setShowPassword((prev) => !prev)}>
                <Image
                  source={require('../pic/eye.png')}
                  style={styles.eyeIcon}
                />
              </Pressable>
            </View>
          </View>
          <View style={styles.section}>
            <Text style={styles.label}>Confirm Password</Text>
            <View style={styles.inputContainer}>
              <Image
                source={require('../pic/forgot.png')}
                style={styles.icon}
              />
              <TextInput
                style={styles.input}
                placeholder="Re-enter your password"
                placeholderTextColor="#7C7C7C"
                secureTextEntry={!showConfirmPassword}
                value={confirmPassword}
                onChangeText={setConfirmPassword}
                editable={!loading}
              />
              <Pressable onPress={() => setShowConfirmPassword((prev) => !prev)}>
                <Image
                  source={require('../pic/eye.png')}
                  style={styles.eyeIcon}
                />
              </Pressable>
            </View>
          </View>
          <Pressable onPress={() => navigation.replace('Login')}>
            <Text style={styles.loginText}>
              Already have an account?{' '}
              <Text style={styles.loginLink}>Login</Text>
            </Text>
          </Pressable>
        </ScrollView>
        <LinearGradient
          start={{ x: 0, y: 1 }}
          end={{ x: 1, y: 0 }}
          colors={[color.F_OnBoard, color.F_Main]}
          style={[styles.gradientButton, loading && styles.gradientButtonDisabled]}>
          <Pressable
            style={styles.loginBtn}
            onPress={handleSignUp}
            disabled={loading}>
            {loading ? (
              <ActivityIndicator color={color.F_White} />
            ) : (
              <Text style={styles.loginText2}>SignUp</Text>
            )}
          </Pressable>
        </LinearGradient>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default Register;

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: color.F_White,
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
  eyeIcon: {
    width: rfSpacing['20x'],
    height: rfSpacing['20x'],
    tintColor: color.F_InputContainer,
    resizeMode: 'contain',
  },
  loginText: {
    color: color.F_InputContainer,
    textAlign: 'center',
    marginTop: rfSpacing['10x'],
    fontSize: rfSpacing['14x'],
  },
  loginLink: {
    color: color.F_OnBoard,
    fontWeight: '600',
  },
  gradientButton: {
    marginVertical: rfSpacing['18x'],
    borderRadius: rfSpacing['12x'],
  },
  gradientButtonDisabled: {
    opacity: 0.6,
  },
  loginBtn: {
    flexDirection: 'row',
    paddingVertical: rfSpacing['14x'],
    borderRadius: rfSpacing['12x'],
    justifyContent: 'center',
    alignItems: 'center',
  },
  loginText2: {
    color: color.F_White,
    fontSize: rfSpacing['16x'],
    fontWeight: 'bold',
  },
});