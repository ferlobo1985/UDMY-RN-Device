import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';

/// VIEWS
// import BatteryComp from './components/battery';
// import DeviceComp from './components/device';
// import FormElements from './components/formElements';
// import GradientComp from './components/gradient';
import FontsComp from './components/font';
import { useEffect } from 'react';

SplashScreen.preventAutoHideAsync()

export default function App() {
  const [loaded,error] = useFonts({
    'imperial':require('./assets/fonts/ImperialScript-Regular.ttf')
  });

  useEffect(()=>{
    if(loaded || error){
      SplashScreen.hideAsync();
    }
  },[loaded,error]);
  if(!loaded && !error) { return null }

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
