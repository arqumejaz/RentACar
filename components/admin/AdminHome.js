import react from "react";
import { View,ScrollView, Image, TouchableOpacity,Dimensions , Text, StyleSheet } from "react-native";
import image1 from "./AdminImages/pngegg.png"
import image2 from "./AdminImages/pngegg2.png"
import image3 from "./AdminImages/pngegg3.png"
function AdminHome({navigation}){
    return(
        <View style={styles.container}>
          <ScrollView>
        <TouchableOpacity style={styles.card} onPress={()=>navigation.navigate('UpdateCar')}>
      <View style={styles.cardBody}>
        <View style={styles.imagecontainer}>
      <Image source={image3} style={styles.image} />
      </View>
        <Text style={styles.datasize}>UPDATE A CAR</Text>
      </View>
    </TouchableOpacity>

    <TouchableOpacity style={styles.card} onPress={()=>navigation.navigate('DeleteCar')}>      
      <View style={styles.cardBody}>
        <View style={styles.imagecontainer}>
      <Image source={image2} style={styles.image} />
      </View>
      <Text style={styles.datasize}>DELETE A CAR</Text>
      </View>
    </TouchableOpacity>

    <TouchableOpacity style={styles.card} onPress={()=>navigation.navigate('Admin')}>      
      <View style={styles.cardBody}>
        <View style={styles.imagecontainer}>
      <Image source={image1} style={styles.image} />
      </View>
      <Text style={styles.datasize}>VIEW CARS</Text>
      </View>
    </TouchableOpacity>
    <TouchableOpacity style={styles.card} onPress={()=>navigation.navigate('AddCar')}>      
      <View style={styles.cardBody}>
        <View style={styles.imagecontainer}>
      <Image source={image1} style={styles.image} />
      </View>
      <Text style={styles.datasize}>Add Car to collection</Text>
      </View>
    </TouchableOpacity>
    </ScrollView>
    </View>
    );
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingTop:20,
      backgroundColor:'#1E1F21',
    }, 
    imagecontainer: {
         height:160,
         width:'90%',
      },  
    image: {
        flex:1,
        resizeMode:'center',
        width:'100%',
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
    datasize: {
        fontSize:30,      
        fontWeight:'bold'
    },
    cardBody: {
        alignItems:'center',
        justifyContent:'center',
      marginBottom: 10,
      padding: 10,
    },
    });
export default AdminHome;