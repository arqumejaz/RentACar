import React, { useState } from 'react';
import { Button, Image, View, Platform, StyleSheet, ScrollView, Text, TextInput } from 'react-native';
import { getDocs, addDoc, collection, deleteDoc, updateDoc, doc } from 'firebase/firestore'
import { db, storage } from '../../utils/firebaseConfig';
import {fetch} from "react-native"
import * as ImagePicker from 'expo-image-picker';

export default function UpdateCar() {
    const[detail,setDetail]=useState({
        make:"",
        model:"",
    });
  const [image, setImage] = useState(null);
  const[data,setData]=useState({
    make:"",
    model:"",
    engine:"",
    seats:"",
    doors:"",
    rent:""
  });


  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.cancelled) {
      setImage(result.uri);
    }
  };

  const handleChange = (text,value) => {
    setDetail(prevData => ({
      ...prevData,
      [text]: value,
    }));
  };

  const handleChange2 = (text,value) => {
    setData(prevData => ({
      ...prevData,
      [text]: value,
    }));
  };
  

  async function uploadImageToFirebase() {
    if (image) {
      try {
        const response = await fetch(image.uri);
        console.log("response",!!response);
        const blob = await response.blob();
        console.log("blob",!!blob);
        const imageName = Date.now().toString();
        console.log("imageName",!!imageName);
        const ref = storage.ref().child(`images/${imageName}`);
        console.log("ref",!!ref);
        await ref.put(blob);
        const imageUrl = await ref.getDownloadURL();
        console.log("imageUrl",!!imageUrl);
        return imageUrl;
      } catch (error) {
        console.error('Error uploading image:', error);
      }
    }
    return null;
  }
  

  async function writeData() {
    console.log("Add Vehicle button is pressed");
    const imageUrl = await uploadImageToFirebase();
    
    const makeCollectionRef = collection(db, data.make); // Dynamic collection reference based on data.make

    await addDoc(makeCollectionRef, {
      //Pic: imageUrl,
      make: data.make,
      model: data.model,
      engine: data.engine,
      seats: data.seats,
      doors: data.doors,
      rent: data.rent,
    });

    console.log("Data added successfully!");
  }

  return (
    <View style={styles.container}>
    <ScrollView >    
            <Text style={styles.heading}>Identify car you want to update</Text>
            <Text style={styles.headings}>Make</Text>
             <TextInput style={styles.inputs} onChangeText={(text)=>{handleChange2('make',text)}}/>
             <Text style={styles.headings}>Model</Text>
             <TextInput style={styles.inputs} onChangeText={(text)=>{handleChange2('model',text)}}/>
            <Text style={styles.heading}>Enter new details of car to update to showroom</Text>
             <Text style={styles.headings}>Upload image</Text>
             <Button title="Pick an image from your phone" onPress={pickImage}/>
             <View style={styles.image}>
              {image && <Image source={{ uri: image }} style={{ width: 200, height: 200, marginTop:30, marginBottom:20 }} />}
              </View>
             <Text style={styles.headings}>Make</Text>
             <TextInput style={styles.inputs} onChangeText={(text)=>{handleChange('make',text)}}/>
             <Text style={styles.headings}>Model</Text>
             <TextInput style={styles.inputs} onChangeText={(text)=>{handleChange('model',text)}}/>
             <Text style={styles.headings}>Engine</Text>
             <TextInput style={styles.inputs} onChangeText={(text)=>{handleChange('engine',text)}}/>
             <Text style={styles.headings}>Seats</Text>
             <TextInput style={styles.inputs} onChangeText={(text)=>{handleChange('seats',text)}}/>
             <Text style={styles.headings}>Doors</Text>
             <TextInput style={styles.inputs} onChangeText={(text)=>{handleChange('doors',text)}}/>
             <Text style={styles.headings}>Rent</Text>
             <TextInput style={styles.inputs} onChangeText={(text)=>{handleChange('rent',text)}}/>
             <Button title='Add Vehicle'
              onPress={writeData}
             />
    </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop:50,
    paddingLeft:20,
    paddingRight:20,
    paddingBottom:50
  },
  heading:{
    fontSize: 30,
    fontWeight:'bold',
    marginBottom: 5
  },
  headings:{
    fontSize: 20,
    fontWeight:'bold',
    marginBottom: 5
  },
  inputs: {
    backgroundColor:'#d3d3d3',
  },
  image:{
    alignItems:'center',
    justifyContent:'center'
  }
});
