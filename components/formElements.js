import { Text, View } from "react-native";
import Checkbox from "expo-checkbox";
import { useState } from "react";

export default function FormElements(){
    const [isChecked,setChecked] = useState(false)

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
        </View>
    )
}