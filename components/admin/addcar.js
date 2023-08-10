import React, { useState } from 'react';
import { Button, Image, View, Platform, StyleSheet, ScrollView, Text, TextInput } from 'react-native';
import { getDocs, addDoc, collection, deleteDoc, updateDoc, doc } from 'firebase/firestore';
import { db } from '../../utils/firebaseConfig';
import * as ImagePicker from 'expo-image-picker';


export default function AddCar() {

  // const [image, setImage] = useState(null);
  const[data,setData]=useState({
    make:"",
    model:"",
    engine:"",
    seats:"",
    doors:"",
    rent:""
  });


  // const pickImage = async () => {
  //   // No permissions request is necessary for launching the image library
  //   let result = await ImagePicker.launchImageLibraryAsync({
  //     mediaTypes: ImagePicker.MediaTypeOptions.All,
  //     allowsEditing: true,
  //     aspect: [4, 3],
  //     quality: 1,
  //   });

  //   console.log(result);

  //   if (!result.canceled) {
  //     setImage(result.uri);
  //   }
  // };

  const handleChange = (text,value) => {
    setData(prevData => ({
      ...prevData,
      [text]: value,
    }));
  };
  

  // async function uploadImageToFirebase() {
  //   if (image) {
  //     try {
  //       const response = await fetch(image); // Use the correct image URI here
  //       console.log("response", !!response);
  //       const blob = await response.blob();
  //       console.log("blob", !!blob);
  //       const imageName = Date.now().toString();
  //       console.log("imageName", !!imageName);
  //       const ref = fire.storage().ref().child(`images/${imageName}`);
  //       console.log("ref", !!ref);
  //       await ref.put(blob);
  //       const imageUrl = await ref.getDownloadURL();
  //       console.log("imageUrl", !!imageUrl);
  //       return imageUrl;
  //     } catch (error) {
  //       console.error('Error uploading image:', error);
  //     }
  //   }
  //   return null;
  // }
  
  
  

  async function writeData() {
    console.log("Add Vehicle button is pressed");
    
    
    const makeCollectionRef = collection(db, data.make); // Dynamic collection reference based on data.make

    await addDoc(makeCollectionRef, {
      
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
            <Text style={styles.heading}>Enter details of car to add to showroom</Text>
             {/* <Text style={styles.headings}>Upload image</Text>
             <Button title="Pick an image from your phone" onPress={pickImage} />
             <View style={styles.image}>
              {image && <Image source={{ uri: image }} style={{ width: 200, height: 200, marginTop:30, marginBottom:20 }} />}
              </View> */}
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
    paddingTop:60,
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
