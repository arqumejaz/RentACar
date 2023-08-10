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
import { circle } from "../assets/images/images.js";
import { auth } from '../utils/firebaseConfig'
import { createUserWithEmailAndPassword } from "firebase/auth";


const SignUpScreen = ({ navigation }) => {
  const [fullName, setfullName] = useState("");
  const [email, setemail] = useState("");
  const [newPassword, setnewPassword] = useState("");
  const [confirmPassword, setconfirmPassword] = useState("");

  const showToast = (message) => {
    ToastAndroid.showWithGravity(
      message,
      ToastAndroid.SHORT,
      ToastAndroid.BOTTOM,
    );
  }

  const handleRegisteration = () => {
    if (!fullName) {
      showToast("Please enter your name");
    }

    if (!email) {
      showToast('Please enter your email');
      return;
    }

    if (!newPassword) {
      showToast('Please enter your password');
      return;
    }

    if (!confirmPassword) {
      showToast('Please confirm your password');
      return;
    }

    if (newPassword !== confirmPassword) {
      showToast('Passwords do not match');
      return;
    }

    showToast('Processing Your Request');

    createUserWithEmailAndPassword(auth, email, newPassword)
      .then(() => {
        // Signed in
        navigation.navigate('MyDrawer');
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        switch (errorCode) {
          case 'auth/invalid-email':
            showToast('Invalid Email');
            break;
          case 'auth/email-already-in-use':
            showToast('An account already exists');
            break;
          default:
            showToast(errorMessage);
        }
        //console.log(errorCode + ' ' + errorMessage);
        //setIsError(true);
      });

  }

  const handleSignIN = () => {
    navigation.navigate("Login");
  };

  return (
    <ScrollView>
      <SafeAreaView style={styles.container}>
        <Image source={circle} />
        <View style={styles.mainContainer}>
          <View style={styles.welcomeContainer}>
            <Text style={styles.welcomeContainerHeading}>Welcome On Android Auto</Text>
            <Text style={styles.welcomeContainerMessage}>
              Quality never goes out of style
            </Text>
          </View>
          <View style={styles.loginForm}>
            <TextInput
              style={styles.inputText}
              onChangeText={(text) => setfullName(text)}
              value={fullName}
              placeholder="Enter Your Full Name"
              placeholderTextColor="black"
            ></TextInput>
            <TextInput
              autoComplete="email"
              style={styles.inputText}
              value={email}
              onChangeText={(text) => setemail(text)}
              placeholder="Enter your Mail"
              placeholderTextColor="black"
            ></TextInput>
            <TextInput
              autoComplete="password-new"
              value={newPassword}
              style={styles.inputText}
              onChangeText={(text) => setnewPassword(text)}
              placeholder="New Password"
              placeholderTextColor="black"
              secureTextEntry={true}
            ></TextInput>
            <TextInput
              autoComplete="password-new"
              value={confirmPassword}
              style={styles.inputText}
              onChangeText={(text) => setconfirmPassword(text)}
              placeholder="Confirm Password"
              placeholderTextColor="black"
              secureTextEntry={true}
            ></TextInput>
          </View>
        </View>
        <TouchableOpacity
          style={styles.button}
          activeOpacity={0.7}
          onPress={handleRegisteration}
        >
          <Text style={styles.buttonText}>Registration</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.signIN}
          activeOpacity={0.6}
          onPress={handleSignIN}
        >
          <Text style={styles.signINText}>
            Already Have An Account?{" "}
            <Text style={{ color: "#D12D2D", fontWeight: "900" }}>Log In</Text>
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
  welcomeContainerMessage: {
    fontSize: 14,
    margin: 10,
  },
  loginForm: {
    margin: 40,
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
    top: 10,
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
  signIN: {
    marginVertical: 40,
    alignSelf: "center",
  },
  signINText: {
    fontWeight: 'bold',
    fontSize: 15,
  },
});
export default SignUpScreen;
