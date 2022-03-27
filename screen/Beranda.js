import * as React from 'react';
import { Button, Text, View, SafeAreaView, Image, TextInput, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { FontAwesome, FontAwesome5, MaterialCommunityIcons, Feather } from '@expo/vector-icons';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


export default function BerandaScreen({ navigation }) {
  return (
    <SafeAreaView>
    
      <View style={{marginTop:10,  marginBottom:20, marginRight:15, marginLeft:15,padding:30, backgroundColor:'white', flex:1}}>  

        <Text style={{textAlign:'center', fontSize:30, fontWeight: 'bold', color:'blue'}}>
          Kapalzy
        </Text>
        
        <Text style={{marginTop:30, marginBottom:8, fontSize:13,flexDirection: "row"}}>
          Pelabuhan Awal
        </Text>

        <View style={{flexDirection:"row"}}>
          <Image
            source={require('../assets/ship.png')}
            style={{ width: 30, height: 25 }}
          >
          </Image>
          <TextInput
            style={{ flex:1, height: 25, marginLeft: 10, padding: 5, borderWidth: 1, borderRadius: 5, fontSize:12}} 
            placeholder={'Pilih Pelabuhan Awal'}
          />
        </View> 


        <Text style={{marginTop:15, marginBottom:8, fontSize:13,flexDirection: "row"}}>
          Pelabuhan Tujuan
        </Text>

        <View style={{flexDirection:"row"}}>
          <Image
            source={require('../assets/ship.png')}
            style={{ width: 30, height: 25 }}
          >
          </Image>
          <TextInput
            style={{ flex:1, height: 25, marginLeft: 10, padding: 5, borderWidth: 1, borderRadius: 5, fontSize:12 }} 
            placeholder={'Pilih Pelabuhan Tujuan'}
          />
        </View> 


        <Text style={{marginTop:15, marginBottom:8, fontSize:13,flexDirection: "row"}}>
          Kelas Layanan
        </Text>

        <View style={{flexDirection:"row"}}>
          <Image
            source={require('../assets/seat.png')}
            style={{ width: 27, height: 30 }}
          >
          </Image>
          <TextInput
            style={{ flex:1, height: 25, marginLeft: 10, padding: 5, borderWidth: 1, borderRadius: 5, fontSize:12 }} 
            placeholder={'Pilih Layanan'}
          />
        </View> 


      
        <Text style={{marginTop:15, marginBottom:8, fontSize:13,flexDirection: "row"}}>
          Tanggal Masuk Pelabuhan
        </Text>

        <View style={{flexDirection:"row"}}>
          <Image
            source={require('../assets/calendar.png')}
            style={{ width: 25, height: 25 }}
          >
          </Image>
          <TextInput 
            style={{ flex:1, height: 25, marginLeft: 12, padding: 5, borderWidth: 1, borderRadius: 5, fontSize:12 }} 
            placeholder={'Pilih Tanggal Masuk'} 
          />
        </View> 


        
        <Text style={{marginTop:15, marginBottom:8, fontSize:13,flexDirection: "row"}}>
          Jam Masuk Pelabuhan
        </Text>

        <View style={{flexDirection:"row"}}>
          <Image
            source={require('../assets/clock.png')}
            style={{ width: 28, height: 26 }}
          >
          </Image>
          <TextInput
            style={{ flex:1, height: 25, marginLeft: 10, padding: 5, borderWidth: 1, borderRadius: 5, fontSize:12 }} 
            placeholder={'Pilih Jam Masuk'}  
          />
        </View> 

        <View style={{flexDirection:"row", marginTop:20}}>
          <TextInput 
            style={{ width:100, height: 25,  padding: 5, borderWidth: 1, borderRadius: 5, fontSize:12, textAlign:'center' }} 
            placeholder={'Dewasa'}  
          />

          <TextInput
            style={{ width:100, height: 25, marginLeft: 45,padding: 5, borderWidth: 1, borderRadius: 5, fontSize:12, textAlign:'center'}} 
            placeholder={'1 Orang'}  
          />
        </View>
        <View>
          <TouchableOpacity style={{flexDirection:"row",marginTop: 20 , backgroundColor: "orange", borderRadius: 8, justifyContent:"center", padding: 10}}>
            
            <Image
              source={require('../assets/search.png')}
              style={{ width: 18, height: 18 }}
            >
            </Image> 
            <Text style={{ marginLeft:10, color:'white', fontWeight:"bold" }}> 
              Buat Tiket
            </Text>
          
          </TouchableOpacity>
      </View>
      </View>          
    </SafeAreaView>

  );
}