import React from 'react'
import { StyleSheet, Text, View, Image, Button, ScrollView } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { AntDesign, Entypo } from '@expo/vector-icons';

export default function SubMain({ route, navigation }) {
  let home = route.params;
    return (
      <ScrollView style={styles.mainContainer}>
      <View style={styles.container}>
          <Image source={home.image1} style={styles.image} />

          <Text style={styles.text1} >{home.name}</Text>

         {/* <Entypo name="heart-outlined" size={25} /> */}
          {/* <Text style={styles.emptyButton}></Text> */}


          <Text>
          Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a type specimen book. It usually begins with:

“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.”
The purpose of lorem ipsum is to create a natural looking block of text (sentence, paragraph, page, etc.) that doesn't distract from the layout. A practice not without controversy, laying out pages with meaningless filler text can be very useful when the focus is meant to be on design, not content.

The passage experienced a surge in popularity during the 1960s when Letraset used it on their dry-transfer sheets, and again during the 90s as desktop publishers bundled the text with their software. Today it's seen all around the web; on templates, websites, and stock designs. Use our generator to get your own, or read on for the authoritative history of lorem ipsum.
          </Text>

      </View>
  </ScrollView>
    )
}
const styles = StyleSheet.create({
  mainContainer: {
      backgroundColor: '#e8e6e6'
  },
  container: {
      marginTop: 5,
      marginHorizontal: 20,
      justifyContent: "space-around",
  },

  text1: {
      fontWeight: "bold",
      fontSize: 20,
      marginVertical: 20
  },
  ratingContainer: {
      flexDirection: "row"
  },
  rating: {
      alignSelf: "flex-start",
      marginLeft: 8,
      marginTop: 3
  },
  icons: {
      alignItems: "flex-end",
      marginRight: 20,
      marginBottom: 5
  },

  shoppingCart: {
      backgroundColor: "white",
      borderRadius: 15,
      height: 30,
      width: 30,
      justifyContent: "center",
      alignItems: "center"
  },
  heartOutlined: {
      marginTop: 10,
      backgroundColor: "white",
      borderRadius: 15,
      height: 30,
      width: 30,
      justifyContent: "center",
      alignItems: "center"
  },

  image: {
      alignSelf: "center",
      height: 230,
      width: '100%',
      borderRadius: 10,
     
  },

  emptyButton: {
      backgroundColor: "#b99dc4",
      borderRadius: 5,
      height: 5,
      width: 40,
      marginVertical: 20
  },

  materialContainer: {
      backgroundColor: "#f5f5f5",
      marginVertical: 20
  },

  material: {
      color: "black",
      height: 35,
      textAlign: "center",
      marginTop: 18

  },

  sizes: {
      marginLeft: 50,
      flexDirection: "row",

  },

  size: {
      backgroundColor: "#f5f5f5",
      fontWeight: "bold",
      borderRadius: 5,
      height: 20,
      width: 30,
      textAlign: "center",
      marginRight: 15,
  },

  M: {
      backgroundColor: "#b503fc",
      fontWeight: "bold",
      borderRadius: 5,
      height: 20,
      width: 30,
      textAlign: "center",
      marginRight: 15,
      color:'white'
  },

  footer: {
      backgroundColor: "#b99dc4",
      borderRadius: 15,
      marginTop: 30,
      flexDirection: 'row',
      justifyContent: "space-between",
      alignItems: "center"


  },

  prices: {
      marginLeft: 10,
      marginVertical: 15,
  },

  amount: {
      color: "white",
      fontWeight: "bold"
  },

  price: {
      color: "white",
      fontWeight: "bold"
  },

  addToCartContainer: {
      marginRight: 10,
      backgroundColor: "#464feb",
      borderRadius: 5,
      color:"white"
  },
  addToCart: {
      alignSelf: "center",
      marginRight: 10,
      backgroundColor: "#b503fc",
      borderRadius: 4,
      height:30, 
  },
  cart:{
      color:"white",
      marginTop:4,
      marginHorizontal:5
  }

})
