import { Button, View, Alert, Text } from "react-native";
import { useState } from "react";
import * as Location from 'expo-location';

export default function LocationComp(){
    const [location, seLocation] = useState(null)

    const getLocation = async()=>{
        let { status } = await Location.requestForegroundPermissionsAsync();
        console.log(status) /// GRANTED and DENIED

        if(status !== 'granted'){
            Alert.alert(
                'Oops, no permission!!',
                'This app needs permission to access you location'
            )
            return;
        }

        const location = await Location.getCurrentPositionAsync();
        console.log(location)
        seLocation(location)
    }



    return(
        <View>
            <Button
                title="Get location"
                onPress={getLocation}
            />
        </View>
    )
}