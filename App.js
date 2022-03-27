import * as React from 'react';
import { Button, Text, View, SafeAreaView, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { FontAwesome, FontAwesome5, MaterialCommunityIcons, Feather } from '@expo/vector-icons';
import BerandaScreen from './screen/Beranda'
import PembatalanScreen from './screen/Pembatalan'
import PesananScreen from './screen/Pesanan';
import LainnyaScreen from './screen/Lainnya';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={{ headerShown: true }}>
        <Tab.Screen name=" " 
          component={BerandaScreen} 
          options={{
            tabBarLabel: 'Beranda',
            tabBarIcon: ({ color }) => (
              <FontAwesome name="home" color={color} size={27} />
            ),
          }}
        />
        <Tab.Screen name="Pesanan Saya" 
          component={PesananScreen}
          options={{
            tabBarLabel: 'Pesanan Saya',
            tabBarIcon: ({ color }) => (
              <FontAwesome5 name="book" color={color} size={24} />
            ),
          }}
        />
        <Tab.Screen name="Pembatalan" 
          component={PembatalanScreen} 
          options={{
            tabBarLabel: 'Pembatalan',
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="cancel" color={color} size={25} />
            ),
          }}
        />
        <Tab.Screen name="Lainnya" 
          component={LainnyaScreen} 
          options={{
            tabBarLabel: 'Lainnya',
            tabBarIcon: ({ color }) => (
              <Feather name="menu" color={color} size={25} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
