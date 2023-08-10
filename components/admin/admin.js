import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Image } from "react-native";
import AdminBMW from "./AdminBMW";
import AdminHonda from "./AdminHonda";
import AdminLexus from "./AdminLexus";
import AdminToyota from "./AdminToyota";
import AdminHome from "./AdminHome";
import DeleteCar from "./DeleteCar";
import UpdateCar from "./UpdateCar";
import CarView from "../carview";
import AddCar from "./addcar";

const Stack = createNativeStackNavigator();
const tab = createBottomTabNavigator();

function Administrator(){
  return(
    <Stack.Navigator >
        <Stack.Screen name="AdminHome" component={AdminHome}/>
        <Stack.Screen name="UpdateCar" component={UpdateCar}/>
        <Stack.Screen name="AddCar" component={AddCar}/>
        <Stack.Screen name="DeleteCar" component={DeleteCar}/>
        <Stack.Screen name="Admin" component={Admin} screenOptions={{ headerShown: false }}/>
    </Stack.Navigator>
  );
}
function Admin(){
    return(
            <tab.Navigator initialRouteName="Toyota" screenOptions={{ headerShown: false }}>
    <tab.Screen name="Toyota Cars" component={ToyotaNav} options={{          
          tabBarIcon: ({ color, size }) => (
            <Image source={require('./AdminImages/toyota.png')} style={{ width: size, height: size}} />
          ),
        }}/>
      <tab.Screen name="Honda Cars" component={HondaNav} options={{          
          tabBarIcon: ({ color, size }) => (
            <Image source={require('./AdminImages/honda.jpg')} style={{ width: size, height: size}} />
          ),
        }}/>
      <tab.Screen name="Lexus Cars" component={LexusNav} options={{          
          tabBarIcon: ({ color, size }) => (
            <Image source={require('./AdminImages/lexus.png')} style={{ width: size, height: size}} />
          ),
        }}/>
      <tab.Screen name="BMW Cars" component={BMWNav} options={{          
          tabBarIcon: ({ color, size }) => (
            <Image source={require('./AdminImages/bmw.png')} style={{ width: size, height: size}} />
          ),
        }}/>
      </tab.Navigator>
    )
}
const stack1=createNativeStackNavigator();
function ToyotaNav(){
  return(
    <stack1.Navigator screenOptions={{ headerShown: false }}>
      <stack1.Screen name="Toyota" component={AdminToyota} />
      <stack1.Screen name="CarView" component={CarView}/>
    </stack1.Navigator>
  );
}
const stack2=createNativeStackNavigator();
function HondaNav(){
  return(
    <stack2.Navigator screenOptions={{ headerShown: false }}>
      <stack2.Screen name="Honda" component={AdminHonda} />
      <stack2.Screen name="CarView" component={CarView}/>
    </stack2.Navigator>
  );
}
const stack3=createNativeStackNavigator();
function BMWNav(){
  return(
    <stack3.Navigator screenOptions={{ headerShown: false }}>
      <stack3.Screen name="BMW" component={AdminBMW} />
      <stack3.Screen name="CarView" component={CarView}/>
    </stack3.Navigator>
  );
}
const stack4=createNativeStackNavigator();
function LexusNav(){
  return(
    <stack4.Navigator screenOptions={{ headerShown: false }}>
      <stack4.Screen name="Lexus" component={AdminLexus} />
      <stack4.Screen name="CarView" component={CarView}/>
    </stack4.Navigator>
  );
}

function TabNav() {
  return(
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="CarView" component={CarView}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}


export default Administrator;