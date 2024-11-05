import { LinearGradient } from "expo-linear-gradient"
import { Text } from "react-native"

export default function GradientComp(){
    return(
        <LinearGradient
            style={{flex:1,alignItems:'center',justifyContent:'center',width:'100%'
            }}
            colors={['#00ffe985','#ff8383','#001d6e']}
            start={{x:0.2,y:0.2}}
            end={{x:0.7,y:0.8}}
        >

            <LinearGradient
                style={{padding:15,alignItems:'center',borderRadius:5}}
                colors={['#4c669f','#3b5998','#192f6a']}
            >
                <Text style={{color:'white'}}>Welcome to the app</Text>
            </LinearGradient>


        </LinearGradient>
    )
}