import React, { useState } from 'react';
import { StyleSheet, View, Text, TextInput, FlatList, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';


const propertyData = [
  {
    id: '1',
    image: 'https://cache4.pakwheels.com/system/car_generation_pictures/7370/original/Cover.jpg?1677570254',
    rent: '8000',
    make: 'Honda',
    engine: '2.0L 4-cylinder engine or 1.5L 4-cylinder turbocharged engine',
    seats: '5',
    model: 'Civic',
    doors: '5'
  },
  {
    id: '2',
    image: 'https://cache2.pakwheels.com/system/car_generation_pictures/6831/original/Honda_Accord_Front_Right_angled_.jpg?1663243625',
    rent: '8000',
    make: 'Honda',
    engine: '1.5L 4-cylinder turbocharged engine or 2.0L 4-cylinder engine or 2.0L 4-cylinder hybrid engine',
    seats: '5',
    model: 'Accord',
    doors: '5'
  },
  {
    id: '3',
    image: 'https://cache2.pakwheels.com/system/car_generation_pictures/4772/original/Honda_CR-V.jpg?1519205461',
    rent: '10000',
    make: 'Honda',
    engine: '1.5L 4-cylinder turbocharged engine or 2.4L 4-cylinder engine or 2.0L 4-cylinder hybrid engine',
    seats: '5',
    model: 'CR-V',
    doors: '4'
  },
  {
    id: '4',
    image: 'https://automobiles.honda.com/-/media/Honda-Automobiles/Vehicles/2023/Pilot/Color-Selector/Platinum-White-Pearl/PIL23-201_ELITE_NH_883P_Platinum-White-Pearl.png',
    rent: '9000',
    make: 'Honda',
    engine: '3.5L V6 engine',
    seats: '8',
    model: 'Pilot',
    doors: '4'
  },
  {
    id: '5',
    image: 'https://www.iihs.org/cdn-cgi/image/width=636/api/ratings/model-year-images/3222/',
    rent: '10000',
    make: 'Honda',
    engine: '3.5L V6 engine',
    seats: '7',
    model: 'Odyssey',
    doors: '4'
  },
  {
    id: '6',
    image: 'https://media.ed.edmunds-media.com/honda/ridgeline/2021/oem/2021_honda_ridgeline_crew-cab-pickup_rtl_fq_oem_1_600.jpg',
    rent: '8000',
    make: 'Toyota',
    engine: '3.5L V6 engine',
    seats: '5',
    model: 'RidgeLine',
    doors: '4'
  }
];

const AdminHonda = () => {
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
      <Image source={{ uri: item.image }} style={styles.image} />
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

  const filteredData = propertyData.filter((item) => {
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
      <FlatList
        contentContainerStyle={styles.propertyListContainer}
        data={filteredData}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop:60,
    backgroundColor:'#1E1F21',
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

export default AdminHonda;