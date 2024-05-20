import { StyleSheet, View } from 'react-native';
import Input from '../../components/Input';
import { User } from '../../interfaces';
import Button from '../../components/Button';
import { colors } from '../../theme';
import Text from '../../components/Text';
// @ts-ignore
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import { useState } from 'react';

const UserProfile: User['profile'] =
  require('../../../assets/mocks/users.json').profile;

const ProfileScreen = () => {
  const [userData, setUserData] = useState(UserProfile);
  const [success, setSuccess] = useState(false);

  const handleProfileChange = (key: string, value: string) => {
    setUserData({ ...userData, [key]: value });
  };

  const onSubmit = () => {
    if (userData.name === '') return;
    if (userData.phone === '') return;
    if (userData.photo === '') return;
    setSuccess(true);
    setTimeout(() => {
      setSuccess(false);
    }, 2000);
    renderSuccess();
  };

  const renderSuccess = () => {
    return (
      <View style={styles.successContainer}>
        <Text style={{ flex: 1 }}>User data are updated</Text>
        <MaterialIcon name="check" size={25} />
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <View style={{ flex: 1 }}>
        <Input
          style={styles.input}
          title="Name"
          value={userData.name}
          onChangeText={value => handleProfileChange('name', value)}
        />
        <Input
          style={styles.input}
          title="Avatar"
          value={userData.photo}
          onChangeText={value => handleProfileChange('photo', value)}
        />
        <Input
          style={styles.input}
          title="Phone"
          value={userData.phone}
          onChangeText={value => handleProfileChange('phone', value)}
        />
      </View>
      {success && renderSuccess()}
      <Button title="Save" onPress={onSubmit} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 20,
    flex: 1,
  },
  input: {
    margin: 5,
  },
  successContainer: {
    padding: 10,
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 10,
    marginBottom: 20,
    backgroundColor: colors.success,
  },
});

export default ProfileScreen;
