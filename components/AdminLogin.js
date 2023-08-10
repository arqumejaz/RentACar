import {
    View,
    Text,
    StyleSheet,
    SafeAreaView,
    ScrollView,
    Image,
    TextInput,
    TouchableOpacity,
    ToastAndroid,
  } from "react-native";
  import { useState } from "react";
  import { circle, loginVector } from "../assets/images/images.js";
  import { auth } from '../utils/firebaseConfig'
  import { signInWithEmailAndPassword } from "firebase/auth";
  
  const AdminLogin = ({ navigation }) => {
    const [email, setemail] = useState("");
    const [password, setpassword] = useState("");
  
    const showToast = (message) => {
      ToastAndroid.showWithGravity(
        message,
        ToastAndroid.SHORT,
        ToastAndroid.BOTTOM,
      );
    }
  
    const handleLogin = () => {
      if(email.toString()=="123"){
        navigation.navigate("Administrator");
      }
      else{
      console.log("bla bla bla");
      }
  
    };
  
    const handleForgetPassword = () => {
      navigation.navigate("ForgotPassword");
    };
    const handleSignUP = () => {
      navigation.navigate("SignUp");
    };
    return (
      <ScrollView>
        <SafeAreaView style={styles.container}>
          <Image source={circle} />
          <View style={styles.mainContainer}>
            <View style={styles.welcomeContainer}>
              <Text style={styles.welcomeContainerHeading}>Welcome To Android Auto</Text>
            </View>
            <Image source={loginVector} style={styles.loginVector} />
            <View style={styles.loginForm}>
              <TextInput
                autoComplete="email"
                style={styles.inputText}
                placeholder="Email"
                value={email}
                onChangeText={(text) => setemail(text)}
                placeholderTextColor="black"
              ></TextInput>
              <TextInput
                autoComplete="password"
                style={styles.inputText}
                placeholder="Password"
                value={password}
                onChangeText={(text) => setpassword(text)}
                placeholderTextColor="black"
                secureTextEntry={true}
              ></TextInput>
            </View>
          </View>
          <TouchableOpacity
            style={styles.button}
            activeOpacity={0.7}
            onPress={handleLogin}
          >
            <Text style={styles.buttonText}>Login</Text>
          </TouchableOpacity>
  
          <TouchableOpacity
            style={styles.forgotPassword}
            activeOpacity={0.6}
            onPress={handleForgetPassword}
          >
            <Text style={styles.forgotPasswordText}>Forget Password?</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.signUP}
            activeOpacity={0.6}
            onPress={handleSignUP}
          >
            <Text style={styles.signUPText}>
              Don't Have An Account ?{" "}
              <Text style={{ color: "#D12D2D", fontWeight: "900" }}>Sign Up</Text>
            </Text>
          </TouchableOpacity>
        </SafeAreaView>
      </ScrollView>
    );
  };
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#F5F5F5",
    },
    mainContainer: {
      justifyContent: "center",
      alignItems: "center",
    },
    welcomeContainer: {
      marginTop: 40,
      justifyContent: "center",
      alignItems: "center",
    },
    welcomeContainerHeading: {
      fontWeight: '900',
      fontSize: 16,
    },
    loginVector: {
      marginTop: 15,
    },
    loginForm: {
      justifyContent: "center",
      width: "85%",
    },
    inputText: {
      paddingRight: 10,
      backgroundColor: "white",
      borderRadius: 50,
      height: 60,
      marginVertical: 10,
      paddingLeft: 40,
    },
    button: {
      backgroundColor: "#D12D2D",
      top: 50,
      borderRadius: 40,
      width: "73%",
      alignItems: "center",
      justifyContent: "center",
      alignSelf: "center",
    },
    buttonText: {
      alignSelf: "center",
      fontSize: 20,
      padding: 13,
      fontWeight: "bold",
      color: "white",
    },
    forgotPassword: {
      top: 60,
      alignSelf: "center",
    },
    forgotPasswordText: {
      fontWeight: '900',
      fontSize: 15,
    },
    signUP: {
      marginVertical: 90,
      alignSelf: "center",
    },
    signUPText: {
      fontWeight: 'bold',
      fontSize: 15,
    },
  });
  export default AdminLogin;
  