import { SafeAreaView, StatusBar } from 'react-native';

import MainNavigation from './navigation';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { colors } from './theme';

function App(): React.JSX.Element {
  const backgroundStyle = { backgroundColor: colors.darkGrey };

  return (
    <SafeAreaProvider>
      <SafeAreaView style={[{ flex: 1 }, backgroundStyle]}>
        <StatusBar
          barStyle="light-content"
          backgroundColor={backgroundStyle.backgroundColor}
        />
        <MainNavigation backgroundColor={colors.gray} />
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

export default App;
