import 'react-native-gesture-handler';
import * as React from 'react';
import { View, Text, Button, TextInput, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './ComponentScreen/HomeScreen';
import DetailsScreen from './ComponentScreen/DetailsScreen';
import CreatePostScreen from './ComponentScreen/CreatePostScreen';
import TabScreen from './ComponentScreen/TabScreen';
import DrawerScreen from './ComponentScreen/DrawerScreen';
import PaginationScreen from "./ComponentScreen/PaginationScreen";


const Stack = createStackNavigator();


function LogoTitle() {
  return (
    <Image
      style={{ width: 50, height: 50 }}
      source={require('./assets/download.png')}
    />
  );
}


function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
     <Stack.Screen name="Home" component={HomeScreen} options= {{title: 'Overview', headerStyle:{backgroundColor: '#f4511e',},
                    headerTintColor: '#fff',
                    headerTitleStyle: {
                      fontWeight: 'bold',
                    },
                    headerRight: () => (
                      <Button
                        onPress={() => alert('There is no info to give!')}
                        title="Info"
                        color="#fff"
                      />
                    ),
                    }} /> 


        <Stack.Screen name="CreatePost" component={CreatePostScreen }
                      options={{ headerTitle: props => <LogoTitle {...props} /> }} />



        <Stack.Screen name="Details" component={ DetailsScreen } initialParams={{ itemId: 42 }} 
                      options={({ route }) => ({ title: route.params.name })} />

        <Stack.Screen name="Tab" component={TabScreen}/>         

           <Stack.Screen name="Drawer" component={DrawerScreen}/>    

              <Stack.Screen name="Pagination" component={PaginationScreen}/>     

      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;