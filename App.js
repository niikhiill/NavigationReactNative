import 'react-native-gesture-handler';
import * as React from 'react';
import { View, Text, Button, TextInput } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

function HomeScreen({route, navigation}) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
      <Text style={{ margin: 10 }}>Post: {route.params?.post}</Text>
      <Button
      title= "Go to details"
      onPress= {()=> {navigation.navigate('Details', {
        itemId: 86,
        otherParam: 'anything you want here',
      });
    }}
      />
      <Button
        title="Create post"
        onPress={() => navigation.navigate('CreatePost')}
      />
    </View>
  );
}
function DetailsScreen({route, navigation}) {
  const { itemId, otherParam } = route.params;
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Details Screen</Text>
      <Text>itemId: {JSON.stringify(itemId)}</Text>
      <Text>otherParam: {JSON.stringify(otherParam)}</Text>
      <Button
        title="Go to Details... again"
        onPress={() =>
          navigation.push('Details', {
            itemId: Math.floor(Math.random() * 100),
          })
        }
      />

      <Button
      title="Go Back"
      onPress = {()=> navigation.goBack()}
      />
       <Button
      title="Home Screen"
      onPress = {()=> navigation.popToTop()}
      />
    </View>
  );
}

function CreatePostScreen({ navigation, route }) {
  const [postText, setPostText] = React.useState('');

  return (
    <>
      <TextInput
        multiline
        placeholder="What's on your mind?"
        style={{ height: 200, padding: 10, backgroundColor: 'white' }}
        value={postText}
        onChangeText={setPostText}
      />
      <Button
        title="Done"
        onPress={() => {
          // Pass params back to home screen
          navigation.navigate('Home', { post: postText });
        }}
      />
    </>
  );
}



const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} options= {{title: 'Overview'}} />
        <Stack.Screen name="CreatePost" component={CreatePostScreen} />
        <Stack.Screen name="Details" component={DetailsScreen} initialParams={{ itemId: 42 }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;