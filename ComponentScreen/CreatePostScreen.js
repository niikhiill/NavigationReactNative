import React from 'react';
import {TextInput, Button, View} from 'react-native';

function CreatePostScreen({ navigation, route }) {
    const [postText, setPostText] = React.useState('');
  
    return (
        <View>
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
  </View>
    );
  }
export default CreatePostScreen;  