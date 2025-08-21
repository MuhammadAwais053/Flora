import {
  Image,
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import rfSpacing from '../../src/Theme/rfSpacing';

const Login = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <SafeAreaView style={styles.wrapper}>
      <View>
        <Pressable onPress={() => navigation.navigate('Register')}>
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
        <Text style={styles.text}>Login Here</Text>
        <Text style={styles.text2}>
          Log in to discover plant recommendations, expert care guides and more
        </Text>
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
          <Image source={require('../pic/forgot.png')} style={styles.icon} />
          <TextInput
            style={styles.input}
            placeholder="Enter your password"
            placeholderTextColor="#7C7C7C"
            secureTextEntry
            value={password}
            onChangeText={setPassword}
          />
        </View>
      </View>

      <Pressable>
        <Text style={styles.forgotText}>Forgot Password?</Text>
      </Pressable>

      <TouchableOpacity
        style={styles.loginBtn}
        onPress={() => navigation.navigate('Main')}>
        <Text style={styles.loginText}>Login</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default Login;

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: rfSpacing['20x'],
  },
  container: {
    justifyContent: 'center',
    alignContent: 'center',
    marginTop: '5%',
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
    color: '#7C7C7C',
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
    borderColor: '#ccc',
    borderWidth: rfSpacing['1x'],
    borderRadius: rfSpacing['12x'],
    paddingHorizontal: rfSpacing['10x'],
  },
  icon: {
    width: rfSpacing['24x'],
    height: rfSpacing['24x'],
    tintColor: '#7C7C7C',
    marginRight: rfSpacing['10x'],
  },
  input: {
    flex: 1,
    height: rfSpacing['50x'],
    fontSize: rfSpacing['16x'],
    color: 'black',
  },
  forgotText: {
    color: '#628A73',
    textAlign: 'right',
    marginTop: rfSpacing['10x'],
    fontWeight: '500',
  },
  loginBtn: {
    flexDirection: 'row',
    backgroundColor: '#628A73',
    marginTop: rfSpacing['30x'],
    paddingVertical: rfSpacing['15x'],
    borderRadius: rfSpacing['12x'],
    justifyContent: 'center',
    alignItems: 'center',
  },
  loginText: {
    color: '#fff',
    fontSize: rfSpacing['18x'],
    fontWeight: '600',
  },
  registerContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: rfSpacing['25x'],
  },
});
