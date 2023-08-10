import React, { useState } from 'react';
import { Button, View, StyleSheet, ScrollView, Text, TextInput } from 'react-native';
import { getDocs, addDoc, collection, deleteDoc, updateDoc, doc } from 'firebase/firestore'
import { db, storage } from '../../utils/firebaseConfig';

export default function DeleteCar() {
  const [data, setData] = useState({
    make: "",
    model: ""
  });

  const handleChange = (text, value) => {
    setData(prevData => ({
      ...prevData,
      [text]: value,
    }));
  };

  const deleteVehicle = async () => {
    try {
      const make = data.make.trim();
      const model = data.model.trim();

      if (!make || !model) {
        console.error('Please enter both make and model.');
        return;
      }

      const makeCollectionRef = collection(db, "Honda");
      const querySnapshot = await getDocs(makeCollectionRef);
      
      querySnapshot.forEach((doc) => {
        const vehicleData = doc.data();
        if (vehicleData.make.trim() === make && vehicleData.model.trim() === model) {
          deleteVehicleById(doc.id);
        }
      });
    } catch (error) {
      console.error('Error deleting vehicle:', error);
    }
  };

  const deleteVehicleById = async (vehicleId) => {
    try {
      console.log(vehicleId);
      const vehicleDocRef = doc(db, 'Toyota', vehicleId);
      console.log(vehicleDocRef);
      await deleteDoc(vehicleDocRef);
      console.log('Vehicle deleted successfully!');
    } catch (error) {
      console.error('Error deleting vehicle:', error);
    }
  };

  return (
    <View style={styles.container}>
      <ScrollView>
        <Text style={styles.heading}>Enter details of car to delete from showroom</Text>
        <Text style={styles.headings}>Make</Text>
        <TextInput
          style={styles.inputs}
          onChangeText={(text) => { handleChange('make', text) }}
          value={data.make}
        />
        <Text style={styles.headings}>Model</Text>
        <TextInput
          style={styles.inputs}
          onChangeText={(text) => { handleChange('model', text) }}
          value={data.model}
        />
        <Button title='Delete Vehicle'
          onPress={deleteVehicle}
        />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 60,
    paddingLeft: 20,
    paddingRight: 20,
    paddingBottom: 50
  },
  heading: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 5
  },
  headings: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 5
  },
  inputs: {
    backgroundColor: '#d3d3d3',
  }
});
