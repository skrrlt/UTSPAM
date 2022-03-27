import * as React from 'react';
import { Button, Text, View, SafeAreaView, Image, TextInput, TouchableOpacity } from 'react-native';



export default function PembatalanScreen({ navigation }) {
  return (
    <View style={{justifyContent:"center", alignItems:"center"}}>
        <Image
          source={require('../assets/cancelled.png')}
          style={{ width: 250, height: 250, margin:50, padding:50, justifyContent:"center", alignItems:"center"}}
        >
        </Image>
        <Text style={{fontSize:14, fontWeight:"bold", textAlign:"center", color:"blue"}}>
          Tidak Ada Aktivitas Pembatalan Tiket
        </Text>

        </View> 

  );
}