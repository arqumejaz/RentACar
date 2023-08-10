import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from "@react-navigation/drawer";
import { Image } from "react-native";
import Toyota from "./components/Toyata";
import Honda from "./components/Honda";
import Lexus from "./components/Lexus";
import BMW from "./components/BMW";
import CarView from "./components/carview";
import LoginScreen from "./components/LoginScreen";
import SignUpScreen from "./components/SignUpScreen";
import AddCar from "./components/admin/addcar";
import AdminToyota from "./components/admin/AdminToyota";
import AdminHonda from "./components/admin/AdminHonda";
import AdminLexus from "./components/admin/AdminLexus";
import AdminBMW from "./components/admin/AdminBMW";
import AdminHome from "./components/admin/AdminHome";
import Administrator from "./components/admin/admin";
import ForgotPasswordScreen from "./components/ForgotpasswordScreen";
import AdminLogin from "./components/AdminLogin";
import DeleteCar from "./components/admin/DeleteCar";

const Stack = createNativeStackNavigator();
const tab = createBottomTabNavigator();
const drawer = createDrawerNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login" screenOptions={{ headerShown: true }}>
      <Stack.Screen name="AddCar" component={AddCar}/>
      <Stack.Screen name="DeleteCar" component={DeleteCar}/>
        <Stack.Screen name="AdminLogin" component={AdminLogin}/>
        <Stack.Screen name="AdminToyota" component={AdminToyota}/>
        <Stack.Screen name="AdminHonda" component={AdminHonda}/>
        <Stack.Screen name="AdminLexus" component={AdminLexus}/>
        <Stack.Screen name="AdminBMW" component={AdminBMW}/>
        <Stack.Screen name="Login" component={LoginScreen}/>
        <Stack.Screen name="SignUp" component={SignUpScreen}/>
        <Stack.Screen name="BMW" component={BMW}/>
        <Stack.Screen name="MyDrawer" component={MyNav} />
        <Stack.Screen name="ForgotPassword" component={ForgotPasswordScreen} />
        <Stack.Screen name="Administrator" component={Administrator}/>
      </Stack.Navigator>
    </NavigationContainer>
      
    
  );
}
const stack1=createNativeStackNavigator();
function ToyotaNav(){
  return(
    <stack1.Navigator initialRouteName="SignUp" screenOptions={{ headerShown: false }}>
      <stack1.Screen name="Toyota" component={Toyota}/>
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