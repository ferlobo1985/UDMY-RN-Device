import { Button, Text, View } from "react-native";
import * as Battery from 'expo-battery'

export default function BatteryComp(){
    const levelHandle = async()=>{
        const level = await Battery.getBatteryLevelAsync();
        alert(level)
    }
    const powerState = async()=>{
        const state = await Battery.getPowerStateAsync();
        alert(JSON.stringify(state))
    }
    Battery.addBatteryLevelListener((event)=>{
        console.log(event)
    })

    return(
        <View>
            <Button
                title="Level"
                onPress={levelHandle}
            />
            <Button
                title="State"
                onPress={powerState}
            />
        </View>
    )
}