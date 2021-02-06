import React from 'react';
import {Text, Button, View} from 'react-native';


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

export default DetailsScreen;
  