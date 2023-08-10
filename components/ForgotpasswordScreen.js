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
import { circle} from "../assets/images/images.js";
import {auth} from '../utils/firebaseConfig.js'
import { sendPasswordResetEmail } from 'firebase/auth';
  
const ForgotPasswordScreen = ({ navigation }) => {
    const [email, setemail] = useState("");
    
    const showToast = (message) =>{
      ToastAndroid.showWithGravity(
                  message,
                  ToastAndroid.SHORT,
                  ToastAndroid.BOTTOM,
              );
    }
  
    const handleForgetPassword = () => {
          if (!email) {
              showToast('Please enter your email');
              return;
          }
          
          showToast('Processing Your Request');

          sendPasswordResetEmail(auth, email)
              .then(() => {
                  // Signed in
                  navigation.navigate('ResetSuccessfull');
              })
              .catch((error) => {
                  const errorCode = error.code;
                  const errorMessage = error.message;
                  switch (errorCode) {
                      case 'auth/invalid-email':
                          showToast('Invalid Email');
                          break;
                      case 'auth/user-not-found':
                          showToast('No account found with this email');
                          break;
                      default:
                          showToast(errorMessage);
                  }
                  //console.log(errorCode + ' ' + errorMessage);
                  setIsError(true);
              });
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
              <Text style={styles.welcomeContainerHeading}>Forgot Password?</Text>
              <Text style={styles.welcomeContainerHeading}>Don't Worry We got You</Text>
            </View>
            <View style={styles.loginForm}>
              <TextInput
                autoComplete="email"
                style={styles.inputText}
                placeholder="Email"
                value={email}
                onChangeText={(text) => setemail(text)}
                placeholderTextColor="black"
              ></TextInput>
            </View>
          </View>
          <TouchableOpacity
            style={styles.button}
            activeOpacity={0.7}
            onPress={handleForgetPassword}
          >
            <Text style={styles.buttonText}>Click To Forget</Text>
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
    loginForm: {
      justifyContent: "center",
      width: "85%",
      marginTop: 20,
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
    signUP: {
      marginVertical: 90,
      alignSelf: "center",
    },
    signUPText: {
      fontWeight: 'bold',
      fontSize: 15,
    },
  });

export default ForgotPasswordScreen;