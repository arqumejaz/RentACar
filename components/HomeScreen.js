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

const HomeScreen = ({ navigation }) => {

  return (
    <ScrollView>
      <SafeAreaView style={styles.container}>
        <Image source={circle} />
        <View style={styles.mainContainer}>
          <View style={styles.welcomeContainer}>
            <Text style={styles.welcomeContainerHeading}>Welcome to Android Auto</Text>
          </View>
          <View>
            <TouchableOpacity
              style={styles.button}
              activeOpacity={0.7}
            >
              <Text style={styles.buttonText}>Get Started</Text>
            </TouchableOpacity>

          </View>
        </View>
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
    marginTop: 170,
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
  button: {
    backgroundColor: "#D12D2D",
    marginTop: 20,
    borderRadius: 40,
    width: 200,
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center",
  },
  buttonText: {
    alignSelf: "center",
    fontSize: 16,
    padding: 15,
    fontWeight: "bold",
    color: "white",
  },

});

export default HomeScreen;