import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';

/// VIEWS
// import BatteryComp from './components/battery';
// import DeviceComp from './components/device';
// import FormElements from './components/formElements';
// import GradientComp from './components/gradient';
import FontsComp from './components/font';
import LocationComp from './components/location';


SplashScreen.preventAutoHideAsync()

export default function App() {
  const [loaded,error] = useFonts({
    'imperial':require('./assets/fonts/imperial.ttf')
  });

  useEffect(()=>{
    if(loaded || error){
      SplashScreen.hideAsync();
    }
  },[loaded,error]);
  if(!loaded && !error) { return null }

  return (
    <View style={styles.container}>
        <LocationComp/>
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
