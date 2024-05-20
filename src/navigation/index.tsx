import {
  NavigationContainer,
  DefaultTheme,
  Theme,
} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
//@ts-ignore
import IonIcon from 'react-native-vector-icons/Ionicons';

// Screens
import LoginScreen from '../screens/Login';
import ChatListScreen from '../screens/ChatList';
import ChatScreen from '../screens/Chat';
import ProfileScreen from '../screens/Profile';
import { colors } from '../theme';

const AppStack = () => {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator
      initialRouteName="Login"
      screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen
        name="ChatList"
        component={ChatListScreen}
        options={({ navigation }) => ({
          headerShown: true,
          headerBackVisible: false,
          title: 'ChatApp',
          headerTitleStyle: {
            color: colors.white,
            fontSize: 25,
            fontWeight: '700',
          },
          headerStyle: {
            backgroundColor: colors.darkGrey,
          },
          headerRight: () => {
            return (
              <IonIcon
                name="settings-sharp"
                size={25}
                color={colors.white}
                onPress={() => navigation.navigate('Profile')}
              />
            );
          },
        })}
      />
      <Stack.Screen
        name="Chat"
        component={ChatScreen}
        options={({ navigation }) => ({
          headerShown: true,
          headerTintColor: colors.white,
          headerTitleStyle: {
            color: colors.white,
            fontSize: 25,
            fontWeight: '700',
          },
          headerStyle: {
            backgroundColor: colors.darkGrey,
          },
        })}
      />
      <Stack.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          headerShown: true,
          title: 'Profile',
          headerTintColor: colors.white,
          headerTitleStyle: {
            color: colors.white,
            fontSize: 25,
            fontWeight: '700',
          },
          headerStyle: {
            backgroundColor: colors.darkGrey,
          },
        }}
      />
    </Stack.Navigator>
  );
};

interface MainNavigationProps {
  backgroundColor: string;
}

const MainNavigation: React.FC<MainNavigationProps> = props => {
  const theme: Theme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      background: props.backgroundColor,
    },
  };

  return (
    <NavigationContainer theme={theme}>
      <AppStack />
    </NavigationContainer>
  );
};

export default MainNavigation;
