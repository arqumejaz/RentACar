import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, TextInput, FlatList, Image, TouchableOpacity, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { getDocs, addDoc, collection, deleteDoc, updateDoc, doc } from 'firebase/firestore'
import { db } from '../../utils/firebaseConfig';
import imgg from './AdminImages/honda.jpg'
const AdminHonda = () => {

  const [mycardata,setmycardata] = useState([]);

  useEffect(() => {
    getAllVehicles();
  }, []);

  const getAllVehicles = async () => {
    try {
      const makeCollectionRef = collection(db, "Honda");

      const snapshot = await getDocs(makeCollectionRef);
      const vehiclesData = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
      console.log("Fetched vehiclesData:", vehiclesData);
      if (vehiclesData.every((item) => item && item.model)) {
        setmycardata(vehiclesData);
      } else {
        console.error('Error getting vehicles: Invalid data in the "Toyota" collection');
      }
    } catch (error) {
      console.error('Error getting vehicles:', error);
    }
  };
  

  const navigation=useNavigation();
  // const handleNavigation = (e) => {
  //   navigation.navigate('carview',{id:e.id});
  // }
  const [searchText, setSearchText] = useState('');

  const handleSearch = (text) => {
    setSearchText(text);
  }

  const renderItem = ({ item }) => (
    <TouchableOpacity style={styles.card} onPress={()=>navigation.navigate('CarView',{make:item.make, model:item.model,seats:item.seats,rent:item.rent,engine:item.engine,doors:item.doors,image:item.image})}>
      <Image source={imgg} style={styles.image} />
      <View style={styles.cardBody}>
        <Text style={styles.rent}>{item.rent}</Text>
        <Text style={styles.make}>{item.make}</Text>
        <Text style={styles.make}>{item.model} </Text>
        <Text style={styles.engine}>{item.engine} </Text>
      </View>
      <View style={styles.cardFooter}>
        <Text style={styles.seats}>{item.seats} seats</Text>
        
        <Text style={styles.doors}>{item.doors} doors</Text>
      </View>
    </TouchableOpacity>
  );

 const filteredData = mycardata.filter((item) => {
   return item.model.toLowerCase().includes(searchText.toLowerCase());
 });

  return (
    <View style={styles.container}>
      <View style={styles.searchInputContainer}>
        <TextInput
          style={styles.searchInput}
          placeholder="Search Vehicles..."
          onChangeText={handleSearch}
          value={searchText}
        />
      </View>
      {mycardata.length > 0 ? (
        <FlatList
          contentContainerStyle={styles.propertyListContainer}
          data={filteredData}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
        />
      ) : (
        <Text style={styles.loadingText}>Loading data...</Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop:60,
    backgroundColor:'#1E1F21',
  },
  loadingText: {
    textAlign: 'center',
    fontSize: 16,
    color: '#fff',
  },
  searchInputContainer:{
    paddingHorizontal:20,
  },
  searchInput: {
    height: 40,
    borderWidth: 1,
    borderColor:'#dcdcdc',
    backgroundColor:'#fff',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10
  },
  propertyListContainer:{
    paddingHorizontal:20,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 5,
    marginTop:10,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5
  },
  image: {
    height: 150,
    marginBottom: 10,
    resizeMode:'contain',
    borderTopLeftRadius:5,
    borderTopRightRadius:5,
  },
  cardBody: {
    marginBottom: 10,
    padding: 10,
  },
  rent: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 5
  },
  make: {
    fontSize: 16,
    marginBottom: 5
  },
  engine: {
    fontSize: 14,
    marginBottom: 5,
    color: '#666'
  },
  cardFooter: {
    padding: 10,
    flexDirection: 'row',
    borderTopWidth:1,
    borderTopColor:'#dcdcdc',
    justifyContent: 'space-between',
  },
  seats: {
    fontSize: 14,
    color:'#ffa500',
    fontWeight: 'bold'
  },
  model: {
    fontSize: 14,
    color:'#ffa500',
    fontWeight: 'bold'
  },
  doors: {
    fontSize: 14,
    color:'#ffa500',
    fontWeight: 'bold'
  }
});

export default AdminHonda