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
} from 'react-native';
import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import rfSpacing from '../../src/Theme/rfSpacing';
import color from '../../src/Theme/color';

const Register = () => {
  const navigation = useNavigation();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleSignUp = () => {
    if (!name || !email || !password || !confirmPassword) {
      Alert.alert('Rukk', 'Please fill all fields');
      return;
    }
    if (password !== confirmPassword) {
      Alert.alert('Rukk', 'Passwords do not match');
      return;
    }
    navigation.navigate('Login');
  };

  return (
    <SafeAreaView style={styles.wrapper}>
      <KeyboardAvoidingView style={{flex: 1}}>
        <ScrollView
          contentContainerStyle={{
            flexGrow: 1,
            paddingBottom: rfSpacing['20x'],
          }}>
          <View>
            <Pressable onPress={() => navigation.goBack()}>
              <Image
                style={{
                  marginTop: '2%',
                  width: rfSpacing['40x'],
                  height: rfSpacing['40x'],
                }}
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

          <View style={{marginTop: rfSpacing['20x']}}>
            <Text style={styles.label}>Full Name</Text>
            <View style={styles.inputContainer}>
              <Image source={require('../pic/user.png')} style={styles.icon} />
              <TextInput
                style={styles.input}
                placeholder="Enter your full name"
                placeholderTextColor="#7C7C7C"
                value={name}
                onChangeText={setName}
              />
            </View>
          </View>

          <View style={{marginTop: rfSpacing['20x']}}>
            <Text style={styles.label}>Email</Text>
            <View style={styles.inputContainer}>
              <Image source={require('../pic/mail.png')} style={styles.icon} />
              <TextInput
                style={styles.input}
                placeholder="Enter your email"
                placeholderTextColor="#7C7C7C"
                value={email}
                onChangeText={setEmail}
              />
            </View>
          </View>

          <View style={{marginTop: rfSpacing['20x']}}>
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

          <View style={{marginTop: rfSpacing['20x']}}>
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
              />
              <Pressable
                onPress={() => setShowConfirmPassword(!showConfirmPassword)}>
                <Image
                  source={require('../pic/eye.png')}
                  style={styles.eyeIcon}
                />
              </Pressable>
            </View>
          </View>
        </ScrollView>

        <Pressable style={styles.loginBtn} onPress={handleSignUp}>
          <Text style={styles.loginText}>SignUp</Text>
        </Pressable>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default Register;

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: color.F_White,
    paddingHorizontal: rfSpacing['20x'],
  },
  container: {
    justifyContent: 'center',
    alignContent: 'center',
  },
  text: {
    fontSize: rfSpacing['24x'],
    fontFamily: 'Adamina-Regular',
    color: 'black',
    marginTop: '8%',
    fontWeight: '400',
  },
  text2: {
    fontFamily: 'Adamina-Regular',
    fontSize: rfSpacing['19x'],
    color: color.F_InputContainer,
    textAlign: 'left',
    letterSpacing: rfSpacing['0.7x'],
    marginTop: '5%',
  },
  label: {
    fontSize: rfSpacing['16x'],
    fontWeight: '500',
    marginBottom: rfSpacing['8x'],
    color: 'black',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: color.F_LightText,
    borderWidth: rfSpacing['1x'],
    borderRadius: rfSpacing['12x'],
    paddingHorizontal: rfSpacing['10x'],
  },
  icon: {
    width: rfSpacing['24x'],
    height: rfSpacing['24x'],
    tintColor: color.F_InputContainer,
    marginRight: rfSpacing['10x'],
  },
  input: {
    flex: 1,
    height: rfSpacing['50x'],
    fontSize: rfSpacing['16x'],
    color: 'black',
  },
  eyeIcon: {
    width: rfSpacing['24x'],
    height: rfSpacing['24x'],
    tintColor: color.F_InputContainer,
  },
  loginBtn: {
    flexDirection: 'row',
    backgroundColor: color.F_OnBoard,
    marginTop: rfSpacing['10x'],
    marginBottom: rfSpacing['10x'],
    paddingVertical: rfSpacing['15x'],
    borderRadius: rfSpacing['12x'],
    justifyContent: 'center',
    alignItems: 'center',
  },
  loginText: {
    color: color.F_White,
    fontSize: rfSpacing['18x'],
    fontWeight: '600',
  },
  registerContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: rfSpacing['25x'],
  },
});
