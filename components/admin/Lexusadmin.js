import React, { useState } from 'react';
import { StyleSheet, View, Text, TextInput, FlatList, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';


const propertyData = [
  {
    id: '1',
    image: 'https://www.lexus.com/content/dam/lexus/images/models/es/2023/visualizer/350/exterior/17-twin-v-spoke-alloy-dark-metallic-machined-finish/eminent-white-pearl/small-1.jpg',
    rent: '10000',
    make: 'Lexus',
    engine: '3.5L V6 engine or 2.5L 4-cylinder engine with an electric motor',
    seats: '5',
    model: 'ES',
    doors: '4'
  },
  {
    id: '2',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThqZWAwc9uOUYdCjpH8AajFCEclH-MTbwjYFwoZhSdBHA049KM9dtuQ7DikyW0QhnDFgI&usqp=CAU',
    rent: '12000',
    make: 'Lexus',
    engine: '3.5L V6 engine or 2.0L 4-cylinder engine with an electric motor',
    seats: '5',
    model: 'GS',
    doors: '4'
  },
  {
    id: '3',
    image: 'https://www.motortrend.com/uploads/sites/10/2023/03/2022-lexus-ls-500h-sedan-angular-front.png?fit=around%7C875:492.1875',
    rent: '11000',
    make: 'Lexus',
    engine: '3.5L V6 engine with an electric motor or 5.0L V8 engine with an electric motor',
    seats: '5',
    model: 'LS',
    doors: '4'
  },
  {
    id: '4',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSR1JGiQNnHzoy-MQO9ZhfqRKDKVyttMdAipmXn9tONCb0DCdGI4Rn7nh_kAG5dHPs42s8&usqp=CAU',
    rent: '14000',
    make: 'Lexus',
    engine: '2.0L 4-cylinder engine with an electric motor or 2.0L 4-cylinder turbocharged engine',
    seats: '5',
    model: 'UX',
    doors: '4'
  },
  {
    id: '5',
    image: 'https://www.lexus.com/content/dam/lexus/images/models/nx/2024/visualizer/350/exterior/18-inch-15-spoke-alloy-wheels-dark-gray-machined-finish/eminent-white-pearl/small-1.jpg',
    rent: '10000',
    make: 'Lexus',
    engine: '2.0L 4-cylinder turbocharged engine or 2.5L 4-cylinder engine with an electric motor',
    seats: '5',
    model: 'NX',
    doors: '4'
  },
  {
    id: '6',
    image: 'https://www.lexus.com/content/dam/lexus/images/models/rx/2023/visualizer/350-premium/exterior/19-inch-five-spoke-alloy-wheels/eminent-white-pearl/small-1.jpg',
    rent: '12000',
    make: 'Lexus',
    engine: '3.5L V6 engine with an electric motor or 3.5L V6 engine',
    seats: '5',
    model: 'RX',
    doors: '4'
  }
];

const AdminLexus = () => {
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

export default AdminLexus;