import React, { useState } from 'react';
import { StyleSheet, View, Text, TextInput, FlatList, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';


const propertyData = [
  {
    id: '1',
    image: 'https://s3.amazonaws.com/toyota.site.toyota-v5/tci-prod/toyota/media/build/hig/col/big/b23_bzrbh_fl1_0218_a.png?ck=06052023032127',
    rent: '8000',
    make: 'Toyota',
    engine: '3.5L V6 engine or 2.5L 4-cylinder hybrid engine',
    seats: '7',
    model: 'HighLander',
    doors: '5'
  },
  {
    id: '2',
    image: 'https://cache1.pakwheels.com/system/car_generation_pictures/6474/original/Toyota_Rav_4.jpg?1658142694',
    rent: '6000',
    make: 'Toyota',
    engine: '2.5L 4-cylinder engine/Hybrid engine',
    seats: '5',
    model: 'RAV4',
    doors: '4'
  },
  {
    id: '3',
    image: 'https://crdms.images.consumerreports.org/c_lfill,w_470,q_auto,f_auto/prod/cars/chrome/white/2022TOC020092_1280_01',
    rent: '6000',
    make: 'Toyota',
    engine: '2.5L 4-cylinder model or 3.5L V6 model',
    seats: '5',
    model: 'Camry',
    doors: '4'
  },
  {
    id: '4',
    image: 'https://platform.cstatic-images.com/xlarge/in/v2/stock_photos/ae781d68-814f-47e7-b461-82ddc40e8339/9d7f45b7-a7ee-4402-bb2f-9eb654e081e1.png',
    rent: '4000',
    make: 'Toyota',
    engine: '1.8L 4-cylinder model',
    seats: '5',
    model: 'Corolla',
    doors: '4'
  },
  {
    id: '5',
    image: 'https://hips.hearstapps.com/hmg-prod/images/2023-toyota-4runner-40th-anniversary-black-001-scaled-1653320404.jpg?crop=0.858xw:1.00xh;0.0717xw,0&resize=640:*',
    rent: '10000',
    make: 'Toyota',
    engine: '4.0L V6 engine',
    seats: '7',
    model: '4Runner',
    doors: '4'
  },
  {
    id: '6',
    image: 'https://toyota-cms-media.s3.amazonaws.com/wp-content/uploads/2022/05/2023_Toyota_Tundra_SX_Package_Magnetic_Gray_Metallic_001-1500x865.jpg',
    rent: '7000',
    make: 'Toyota',
    engine: '5.7L V8 engine',
    seats: '6',
    model: 'Tundra',
    doors: '4'
  }
];

const AdminToyota = () => {
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

export default AdminToyota