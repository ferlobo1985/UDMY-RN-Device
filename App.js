import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { useFonts } from 'expo-font';

/// VIEWS
// import BatteryComp from './components/battery';
// import DeviceComp from './components/device';
// import FormElements from './components/formElements';
// import GradientComp from './components/gradient';
import FontsComp from './components/font';

export default function App() {
  useFonts({
    'imperial':require('./assets/fonts/ImperialScript-Regular.ttf')
  })


  return (
    <View style={styles.container}>
        <FontsComp/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
