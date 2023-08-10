import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';

const CarView = ({route}) => {
    
  return (
    <ScrollView style={styles.container}>
      
      <View style={styles.avatarContainer}>
        <Image
          source={{ uri : route.params.image}}
          style={styles.avatar}
        />
        <Text style={styles.name}>{route.params.model} </Text>
      </View>
      <View style={styles.infoContainer}>
        <Text style={styles.infoLabel}>Engine:</Text>
        <Text style={styles.infoValue}>The engine of the car is {route.params.engine}. The engine provides smooth acceleration keeping the drive peaceful</Text>
      </View>
      <View style={styles.infoContainer}>
        <Text style={styles.infoLabel}>Seats:</Text>
        <Text style={styles.infoValue}>The car contains {route.params.seats} seats which are quite comfortable givng home like experince</Text>
      </View>
      <View style={styles.infoContainer}>
        <Text style={styles.infoLabel}>Doors:</Text>
        <Text style={styles.infoValue}>The car contains {route.params.doors} soundproof doors which gives quite an astonishing experience while driving </Text>
      </View>
      <View style={styles.infoContainer}>
        <Text style={styles.infoLabel}>Rent:</Text>
        <Text style={styles.infoValue}>The rent of the car is absolutely limited according to its features. The car is providing such astonishing feature on the rate of just {route.params.rent} rupees per day</Text>
      </View>
      {/* <TouchableOpacity style={styles.booking}>
        <Text style={styles.bookingText}>
          Book this vehicle
          </Text>
      </TouchableOpacity> */}
      
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    
    backgroundColor: '#121313',
    padding: 20,
    
  },
  avatarContainer: {
    alignItems: 'center',
    borderRadius:10,
    backgroundColor: '#fff',
    marginTop: 20,
  },
  avatar: {
    width: 350,
    height: 150,
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 10,
  },
  infoContainer: {
    marginTop: 20,
    borderRadius:15,
    padding: 20,
    backgroundColor: '#fff',
    
  },
  booking:{
    marginTop:20,
    marginBottom:20,
    backgroundColor: '#C0C0C0',
    alignItems:'center',
    justifyContent:'center',
    borderRadius:30,
    
  },
  bookingText: {
    padding:15,
    fontSize: 30,
    fontFamily: 'sans-serif-condensed',
    fontWeight: 'bold',
    textAlign: 'center',
    
  },
  infoLabel: {
    fontWeight: 'bold',
  },
  infoValue: {
    marginTop: 5,
  },
});

export default CarView;