import React from "react";
import { Home,  } from "@/screens";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { RootStackParamList } from "@/utils/types";

const Stack = createNativeStackNavigator<RootStackParamList>()

const HomeStack = () =>{
    return (
        <Stack.Navigator screenOptions={{headerShown: false}}>
            <Stack.Screen name="Home" component={Home}/>
            
        </Stack.Navigator>
    )
}
export default HomeStack;