import React from "react";
import {View, Text} from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


const Tab = createBottomTabNavigator();

function ProfileScreen(){
    return(
    <View>
        <Text>
            Welcome to profile screen
        </Text>
    </View>
    )
}


function SettingsScreen(){
    return(
    <View>
        <Text>
            Welcome to settings screen
        </Text>
    </View>
    )
}

function TabScreen(){
return (

     <Tab.Navigator>
          <Tab.Screen name="profile" component= {ProfileScreen} options={{ tabBarBadge: 3 }} />
          <Tab.Screen name="settings" component= {SettingsScreen} />
     </Tab.Navigator>

);
}

export default TabScreen;