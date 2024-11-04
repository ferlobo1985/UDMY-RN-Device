import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

/// VIEWS
import BatteryComp from './components/battery';

export default function App() {
  return (
    <View style={styles.container}>
        <BatteryComp/>
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
