import { Text, View } from "react-native";
import Checkbox from "expo-checkbox";
import { useState } from "react";
import { Picker } from "@react-native-picker/picker";

export default function FormElements(){
    const [isChecked,setChecked] = useState(false);
    const [country,setCountry] = useState();

    return(
        <View>
            <View style={{flexDirection:'row',alignItems:'center'}}>
                <Checkbox
                    style={{margin:4}}
                    value={isChecked}
                    onValueChange={setChecked}
                    color={isChecked?'red':undefined}
                />
                <Text>Normal checkbox</Text>
            </View>

            <Picker
                selectedValue={country}
                onValueChange={(value)=> setCountry(value)}
                style={{backgroundColor:'red', color:'white',width:250}}
            >
                <Picker.Item label="Brazil" value="brazil"/>
                <Picker.Item label="Canada" value="canada"/>
            </Picker>

        </View>
    )
}