import React from 'react';
import { StyleSheet, View } from 'react-native';
import Button from '../../components/Button';
import Input from '../../components/Input';
import Text from '../../components/Text';

//@ts-ignore
import IonIcon from 'react-native-vector-icons/Ionicons';
//@ts-ignore
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import { colors } from '../../theme';

const LoginScreen = ({ navigation }: any) => {
  const [inputData, setInputData] = React.useState({
    username: '',
    password: '',
  });
  const [error, setError] = React.useState({ error: false, message: '' });

  const onInputChange = (key: string, input: string) => {
    if (error.error) setError({ error: false, message: '' });

    setInputData({ ...inputData, [key]: input });
  };

  const onLogin = () => {
    if (inputData.username === '')
      return setError({ error: true, message: 'Username cannot be empty' });
    if (inputData.password === '')
      return setError({ error: true, message: 'Password cannot be empty' });

    navigation.navigate('ChatList');
  };

  const renderLogo = () => {
    return (
      <View style={styles.logo}>
        <IonIcon name="chatbubbles-sharp" size={80} color={colors.lightBlue} />
        <Text style={styles.textLogo}>ChatApp</Text>
      </View>
    );
  };

  const renderError = () => {
    return (
      <View style={styles.errorContainer}>
        <Text style={{ flex: 1 }}>User or password are incorrect</Text>
        <MaterialIcon name="error" size={25} />
      </View>
    );
  };

  return (
    <View style={{ flex: 1, margin: 20 }}>
      {renderLogo()}
      <View style={{ flex: 1, justifyContent: 'flex-start' }}>
        <Input
          value={inputData.username}
          title="Username"
          titleColor={colors.lightBlue}
          style={{ marginBottom: 25 }}
          placeholder="username"
          onChangeText={input => onInputChange('username', input)}
          inputStyle={{ borderColor: colors.lightBlue }}
        />
        <Input
          value={inputData.password}
          title="Password"
          titleColor={colors.lightBlue}
          placeholder="password"
          onChangeText={input => onInputChange('password', input)}
          inputStyle={{ borderColor: colors.lightBlue }}
          inputType="password"
        />
        {error.error && renderError()}
      </View>
      <Button style={{ bottom: 0 }} title="Login" onPress={onLogin} />
    </View>
  );
};

const styles = StyleSheet.create({
  logo: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textLogo: {
    fontSize: 30,
    fontWeight: '800',
    color: colors.lightBlue,
  },
  errorContainer: {
    padding: 10,
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 10,
    marginTop: 20,
    backgroundColor: colors.error,
  },
});

export default LoginScreen;
