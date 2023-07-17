import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from "@react-navigation/drawer";
import { Image } from "react-native";
import Toyota from "./Components/Toyota";
import Honda from "./Components/Honda";
import Lexus from "./Components/Lexus";
import BMW from "./Components/BMW";
import CarView from "./Components/CarView";
import Login from "./Components/Login";
import SignUp from "./Components/SignUp";
import Admin from "./Components/Admin/Admin";
import AddCar from "./Components/Admin/AddCar";

const Stack = createNativeStackNavigator();
const tab = createBottomTabNavigator();
const drawer = createDrawerNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="AddCar" component={AddCar}/>
        <Stack.Screen name="Login" component={Login}/>
        <Stack.Screen name="SignUp" component={SignUp}/>
        <Stack.Screen name="MyDrawer" component={MyNav} />
        <Stack.Screen name="Admin" component={Admin}/>
      </Stack.Navigator>
    </NavigationContainer>
      
    
  );
}
const stack1=createNativeStackNavigator();
function ToyotaNav(){
  return(
    <stack1.Navigator initialRouteName="SignUp" screenOptions={{ headerShown: false }}>
      <stack1.Screen name="Toyota" component={Toyota} />
      <stack1.Screen name="CarView" component={CarView}/>
    </stack1.Navigator>
  );
}
const stack2=createNativeStackNavigator();
function HondaNav(){
  return(
    <stack2.Navigator screenOptions={{ headerShown: false }}>
      <stack2.Screen name="Honda" component={Honda} />
      <stack2.Screen name="CarView" component={CarView}/>
    </stack2.Navigator>
  );
}
const stack3=createNativeStackNavigator();
function BMWNav(){
  return(
    <stack3.Navigator screenOptions={{ headerShown: false }}>
      <stack3.Screen name="BMW" component={BMW} />
      <stack3.Screen name="CarView" component={CarView}/>
    </stack3.Navigator>
  );
}
const stack4=createNativeStackNavigator();
function LexusNav(){
  return(
    <stack4.Navigator screenOptions={{ headerShown: false }}>
      <stack4.Screen name="Lexus" component={Lexus} />
      <stack4.Screen name="CarView" component={CarView}/>
    </stack4.Navigator>
  );
}

function MyNav() {
  return(
      <drawer.Navigator initialRouteName="Toyota" >
    <drawer.Screen name="Toyota Cars" component={ToyotaNav} />
      <drawer.Screen name="Honda Cars" component={HondaNav} />
      <drawer.Screen name="Lexus Cars" component={LexusNav} />
      <drawer.Screen name="BMW Cars" component={BMWNav} />
      </drawer.Navigator>
  );
}
export default App;
