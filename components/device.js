import { Text, View } from "react-native";
import * as Device from 'expo-device';


export default function DeviceComp(){
    return(
        <View>
            <Text style={{fontSize:20}}>
                Is EMU: {Device.isDevice ? 'Real':'Emu'}
            </Text>
            <Text style={{fontSize:20}}>
                OS: {Device.osName}
            </Text>
            <Text style={{fontSize:20}}>
                OS version: {Device.osVersion}
            </Text>
            <Text style={{fontSize:20}}>
                Manufaturer: {Device.manufacturer}
            </Text>
            <Text style={{fontSize:20}}>
                Model id: {Device.modelId ? 'IOS':'Not IOS'}
            </Text>
        </View>
    )
}