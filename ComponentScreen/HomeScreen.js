import React from 'react';
import {Text, Button, View} from 'react-native';

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

        <Button
          title="Tab Screen"
          onPress={() => navigation.navigate('Tab')}
        />
      </View>

  

      
    
    );
  }

  export default HomeScreen;