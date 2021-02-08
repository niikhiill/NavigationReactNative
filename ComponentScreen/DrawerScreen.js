import React from "react";
import {View, Text} from 'react-native';
import { createDrawerNavigator } from "@react-navigation/drawer";

const Drawer = createDrawerNavigator();


function LoginScreen(){
    return(
    <View>
        <Text>
            Welcome to login screen
        </Text>
    </View>
    )
}


function SignUpScreen(){
    return(
    <View>
        <Text>
            Welcome to SignUp screen
        </Text>
    </View>
    )
}

function drawerScreen(){
    return(
<Drawer.Navigator>
    <Drawer.Screen name = "Login" component= {LoginScreen} />
    <Drawer.Screen name = "Signup" component= {SignUpScreen}/>
</Drawer.Navigator>
    )
}

export default drawerScreen;