import { Text, View } from "react-native";
import { useBatteryLevel, useLowPowerMode } from "expo-battery";

export default function BatteryComp(){
    const batteryLevel = useBatteryLevel();
    const lowPowerMode = useLowPowerMode();

    return(
        <View>
            <Text style={{fontSize:20}}>
                Battery Level:{batteryLevel}
            </Text>
            <Text style={{fontSize:20}}>
                Power mode:{lowPowerMode? 'Yes':'No'}
            </Text>
        </View>
    )
}