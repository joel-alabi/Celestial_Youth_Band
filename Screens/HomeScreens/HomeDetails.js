import React from 'react'
import { StyleSheet, Text, View, Image, } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { AntDesign, Entypo } from '@expo/vector-icons';
export default function HomeDetails({ name, price, image,image1, navigation }) {
    return (
        <TouchableOpacity  style={styles.skip} onPress={() => {
            navigation.navigate('Submain',{name, price, image ,image1})
          }}
           style={styles.container}>
             <View style={styles.details}>
        <Image source={image} style={styles.image} />
        <View style={styles.infoContainer}>
          <Text style={styles.name}>{name}</Text>
          <Text style={styles.price}>{price}</Text>
          <Image source={image1} style={styles.image1} />
          <TouchableOpacity style={styles.heartOutlined}>
         <Entypo name="heart-outlined" size={25} />
        </TouchableOpacity>
        </View>
      </View>
      <Text style={styles.empty}></Text>

        </TouchableOpacity>
       
        
    )
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      marginTop: 5,
    },
    empty:{
         borderBottomWidth:1,
      borderColor:'#bab5a8',
      width:700,
      marginBottom:10
    },
  
    image: {
      backgroundColor: "white",
      marginBottom: 15,
      marginLeft: 5,
      width: 60,
      height: 60,
      borderRadius: 30,
     
    },
    image1:{
        height:130,
        width:250,
        borderRadius:10,
        paddingBottom:10
    },
    details: {
      flexDirection: "row",
    },
    infoContainer: {
      marginLeft: 20
    },
    name: {
      marginTop: 10,
      fontSize: 15,
      fontWeight: "bold"
    },
    rating: {
      marginTop: 10,
      alignSelf: "flex-start"
    },
    price: {
      color: "black",
      marginTop: 10,
      fontSize: 15
    }
  })