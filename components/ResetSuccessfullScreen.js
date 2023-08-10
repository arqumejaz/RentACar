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
  
const ResetSuccessfullScreen = ({ navigation }) => {

    const handleLoginPage = () => {
      navigation.navigate("LogIn");
    };
  
    return (
      <ScrollView>
        <SafeAreaView style={styles.container}>
          <Image source={circle} />
          <View style={styles.mainContainer}>
            <View style={styles.welcomeContainer}>
              <Text style={styles.welcomeContainerHeading}>Check Your Email</Text>
            </View>
          </View>
          <TouchableOpacity
            style={styles.button}
            activeOpacity={0.7}
            onPress={handleLoginPage}
          >
            <Text style={styles.buttonText}>Click To Goto Login Page</Text>
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
  });

export default ResetSuccessfullScreen;