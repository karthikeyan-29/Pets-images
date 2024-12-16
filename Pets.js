import React from 'react';
import {View, Text, Image, ScrollView, TextInput} from 'react-native';

const App = () => {
  return (
    <ScrollView>
      <Text>Hey there ! </Text>
      <View>
        <Text>Iam a persian  cat</Text>
        <Image
          source={{
            uri: 'https://th.bing.com/th/id/OIP.bHarRW7CDYimM3cUGf6y5QHaE7?rs=1&pid=ImgDetMain',
          }}
          style={{width: 200, height: 200}}
        />
         
      </View>
      <Text >You can name me here</Text>
      <TextInput
        style={{
          height: 40,
          borderColor: 'black',
          borderWidth: 1,
          
        }}
        defaultValue="Name me  "
        
      />
       <Text>Hey there ! </Text>
      <View>
        <Text>Iam  retriever</Text>
        <Image
          source={{
            uri: 'https://th.bing.com/th/id/R.1769fc946efb589c2d5a8967cc3ce413?rik=5CFGX%2bypFTGEUg&riu=http%3a%2f%2fwww.publicdomainpictures.net%2fpictures%2f50000%2fvelka%2fgolden-retriever-dog-1370773977VyS.jpg&ehk=buPtMWyhKNSLmjFTl0UmLGcrLBvHmBElUWcaOSwrlFs%3d&risl=&pid=ImgRaw&r=0',
          }}
          style={{width: 200, height: 200}}
        />
         
      </View>
      <Text >You can name me here</Text>
      <TextInput
        style={{
          height: 40,
          borderColor: 'black',
          borderWidth: 1,
          
        }}
        defaultValue="Name me  "
      />
    </ScrollView>
  );
};

export default App;
