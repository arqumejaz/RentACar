import React, { useState } from 'react';
import { StyleSheet, View, Text, TextInput, FlatList, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';


const propertyData = [
  {
    id: '1',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTP4zguuQV02fGI4aML8UXXOWgRsIuDyUK5uJHz0_wWEA&s',
    rent: '12000',
    make: 'BMW',
    engine: '2.0L 4-cylinder engine or 3.0L 6-cylinder engine',
    seats: '5',
    model: '3 Series',
    doors: '4'
  },
  {
    id: '2',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAGjey7sVRf5e4_aCRHnp3RQA-Oz_hgzV64SH_vuQovFwyyt_lSkpLln_K2B6KtwAeGWI&usqp=CAU',
    rent: '6000',
    make: 'BMW',
    engine: '2.0L 4-cylinder engine or 3.0L 6-cylinder engine or 4.4L V8 engine',
    seats: '5',
    model: '5 Series',
    doors: '4'
  },
  {
    id: '3',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWoRgSIozxt3SQYrZusylCroqXLh9ahpFyDpceqsaHUNU5WQnZOwm0KjU5Xrk4O5cp-8g&usqp=CAU',
    rent: '6000',
    make: 'BMW',
    engine: '3.0L 6-cylinder engine or 4.4L V8 engine or 6.6L V12 engine',
    seats: '5',
    model: '7 Series',
    doors: '4'
  },
  {
    id: '4',
    image: 'https://img.gaadicdn.com/images/car-images/360x240/BMW/X1/10063/1683270907139/221_Space-Silver-metallic_71746c.jpg',
    rent: '4000',
    make: 'BMW',
    engine: '2.0L 4-cylinder engine or 2.0L 4-cylinder turbocharged engine',
    seats: '5',
    model: 'X1',
    doors: '4'
  },
  {
    id: '5',
    image: 'https://cache.bmwusa.com/cosy.arox?pov=walkaround&brand=WBBM&vehicle=23XQ&client=byoc&paint=P0300&fabric=FKHSW&sa=S01X8,S0255,S02TB,S0302,S0319,S03AG,S0420,S0423,S0430,S0431,S0459,S0481,S0493,S04K1,S04U0,S04UR,S0508,S0534,S0552,S05AC,S05AS,S05AV,S0676,S06AC,S06AK,S06C4,S06U2,S06WB,S0775&angle=30',
    rent: '10000',
    make: 'BMW',
    engine: '2.0L 4-cylinder engine or 3.0L 6-cylinder engine',
    seats: '5',
    model: 'X3',
    doors: '4'
  },
  {
    id: '6',
    image: 'https://carsguide-res.cloudinary.com/image/upload/f_auto,fl_lossy,q_auto,t_default/v1/editorial/bmw-x5-my22-index-1.png',
    rent: '7000',
    make: 'BMW',
    engine: '3.0L 6-cylinder engine or 4.4L V8 engine or 3.0L 6-cylinder engine with an electric motor',
    seats: '5',
    model: 'X5',
    doors: '4'
  }
];

const BMW = () => {
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

export default BMW;