import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

/// VIEWS
// import BatteryComp from './components/battery';
// import DeviceComp from './components/device';
// import FormElements from './components/formElements';
import GradientComp from './components/gradient';

export default function App() {
  return (
    <View style={styles.container}>
        <GradientComp/>
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
