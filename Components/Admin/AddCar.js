import React, { useState, useEffect } from 'react';
import { Button, Image, View, Platform, StyleSheet, ScrollView, Text, TextInput } from 'react-native';
import { getDocs, addDoc, collection, deleteDoc, updateDoc, doc } from 'firebase/firestore'
import { db } from '../../firebase';
import * as ImagePicker from 'expo-image-picker';

export default function ImagePickerExample() {
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

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };
  const handleChange = event => {
    const { name, value } = event.currentTarget;
    setData(prevData => ({
      ...prevData,
      [name]: value,
    }));
  };
  async function writeData() {
    
    await addDoc(collection(db, "Toyota"), {
      Pic : image 
    });
   
  }

  return (
    <ScrollView style={styles.container}>
            <Text style={styles.heading}>Enter details of car to add to showroom</Text>
             <Text style={styles.headings}>Upload image</Text>
             <Button title="Pick an image from your phone" onPress={pickImage} />
             <View style={styles.image}>
              {image && <Image source={{ uri: image }} style={{ width: 200, height: 200, marginTop:30, marginBottom:20 }} />}
              </View>
             <Text style={styles.headings}>Make</Text>
             <TextInput style={styles.inputs} onChange={(e)=>{handleChange(e)}}/>
             <Text style={styles.headings}>Model</Text>
             <TextInput style={styles.inputs} onChange={(e)=>{handleChange(e)}}/>
             <Text style={styles.headings}>Engine</Text>
             <TextInput style={styles.inputs} onChange={(e)=>{handleChange(e)}}/>
             <Text style={styles.headings}>Seats</Text>
             <TextInput style={styles.inputs} onChange={(e)=>{handleChange(e)}}/>
             <Text style={styles.headings}>Doors</Text>
             <TextInput style={styles.inputs} onChange={(e)=>{handleChange(e)}}/>
             <Text style={styles.headings}>Rent</Text>
             <TextInput style={styles.inputs} onChange={(e)=>{handleChange(e)}}/>
             <Button title='Add Vehicle'
             onClick={writeData}
             />
         </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop:60,
    paddingLeft:20,
    paddingRight:20,
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
}

)