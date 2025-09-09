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
  Platform,
} from 'react-native';
import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import rfSpacing from '../../src/Theme/rfSpacing';
import color from '../../src/Theme/color';

const ForgotPasswordScreen = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');

  const handleResetPassword = () => {
    if (!email.trim()) {
      Alert.alert(
        'Rukk',
        'Please enter your registered email.',
        [{text: 'Acha Krta hu'}],
        {cancelable: false},
      );
      return;
    }

    Alert.alert(
      'Reset Link Sent',
      'We have sent a password reset link to your email.',
      [
        {
          text: 'OK',
          onPress: () => navigation.navigate('Login'),
        },
      ],
      {cancelable: false},
    );
  };

  return (
    <SafeAreaView style={styles.wrapper}>
      <KeyboardAvoidingView
        style={{flex: 1}}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
        <ScrollView
          contentContainerStyle={{flexGrow: 1, paddingBottom: rfSpacing['20x']}}
          keyboardShouldPersistTaps="handled">
          <View>
            <Pressable onPress={() => navigation.goBack()}>
              <Image
                style={{
                  marginTop: rfSpacing['10x'],
                  width: rfSpacing['40x'],
                  height: rfSpacing['40x'],
                }}
                source={require('../pic/Pre.png')}
              />
            </Pressable>
          </View>

          <View style={styles.container}>
            <Text style={styles.text}>Forgot Password</Text>
            <Text style={styles.text2}>
              Enter your registered email to receive a password reset link.
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
        </ScrollView>

        <Pressable style={styles.resetBtn} onPress={handleResetPassword}>
          <Text style={styles.resetText}>Send Reset Link</Text>
        </Pressable>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default ForgotPasswordScreen;

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: color.F_White,
    paddingHorizontal: rfSpacing['20x'],
  },
  container: {
    justifyContent: 'center',
    alignContent: 'center',
    marginTop: rfSpacing['20x'],
  },
  text: {
    fontSize: rfSpacing['24x'],
    fontFamily: 'Adamina-Regular',
    color: color.F_Black,
    marginTop: rfSpacing['20x'],
    fontWeight: '400',
  },
  text2: {
    fontFamily: 'Adamina-Regular',
    fontSize: rfSpacing['19x'],
    color: color.F_InputContainer,
    textAlign: 'left',
    letterSpacing: rfSpacing['0.7x'],
    marginTop: rfSpacing['10x'],
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
    color: color.F_Black,
  },
  resetBtn: {
    flexDirection: 'row',
    backgroundColor: color.F_OnBoard,
    marginTop: rfSpacing['20x'],
    marginBottom: rfSpacing['20x'],
    paddingVertical: rfSpacing['15x'],
    borderRadius: rfSpacing['12x'],
    justifyContent: 'center',
    alignItems: 'center',
  },
  resetText: {
    color: color.F_White,
    fontSize: rfSpacing['18x'],
    fontWeight: '600',
  },
});
