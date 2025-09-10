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
} from 'react-native';
import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import color from '../../src/Theme/color';
import rfSpacing from '../../src/Theme/rfSpacing';
import LottieView from 'lottie-react-native';

const Login = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleLogin = () => {
    if (!email.trim() || !password.trim()) {
      Alert.alert('Rukk', 'Email or password is missing', [
        {text: 'Acha Krta hu'},
      ]);
      return;
    }

    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      navigation.navigate('Main');
    }, 1000);
  };

  return (
    <SafeAreaView style={styles.wrapper}>
      <KeyboardAvoidingView style={{flex: 1}}>
        <ScrollView
          contentContainerStyle={styles.scrollContainer}
          keyboardShouldPersistTaps="handled">
          <View>
            <Pressable onPress={() => navigation.navigate('Register')}>
              <Image
                style={styles.backIcon}
                resizeMode="contain"
                source={require('../pic/Pre.png')}
              />
            </Pressable>
          </View>

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
        </ScrollView>

        <Pressable style={styles.loginBtn} onPress={handleLogin}>
          <Text style={styles.loginText}>Login</Text>
        </Pressable>
      </KeyboardAvoidingView>
      {loading && (
        <View
          style={{
            ...StyleSheet.absoluteFillObject,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <LottieView
            source={require('../assets/egJFdLXsf7.json')}
            autoPlay
            loop={false}
            style={{width: 200, height: 200}}
          />
        </View>
      )}
    </SafeAreaView>
  );
};

export default Login;

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: color.F_White,
    paddingHorizontal: rfSpacing['16x'],
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
  forgotText: {
    color: color.F_OnBoard,
    textAlign: 'right',
    marginTop: rfSpacing['12x'],
    fontWeight: '500',
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
