import React from 'react'
import { StyleSheet, Text, View,FlatList} from 'react-native';
import HomeDetails from '../../Screens/HomeScreens/HomeDetails';

export default function MainHome({ navigation }) {
  home = [
    { image: require('../../assets/ishant-mishra-napAS8Izafs-unsplash.jpg'), name: 'welcome to celestial home ', price: 'see the wonderful thing he has done',image1: require('../../assets/CYBN_logo_2-removebg-preview.png') },
    { image: require('../../assets/CYBN_logo_2-removebg-preview.png'), name: ' Lorem ipsum, or lipsum as it is sometimes ,', price: ' Lorem ipsum @ or lipsum ,',image1: require('../../assets/ishant-mishra-napAS8Izafs-unsplash.jpg') },
    { image: require('../../assets/kente.png'), name: ' Lorem ipsum, or lipsum as it is sometimes ,', price: 'Lorem ipsum @ or lipsum',image1: require('../../assets/jacob-meissner-oGafvInnHlY-unsplash.jpg') },
    { image: require('../../assets/andrey-sharpilo-0eJ4d17-xm4-unsplash.jpg'), name: ' Lorem ipsum, or lipsum as it is sometimes ,', price: 'Lorem ipsum @ or lipsum' ,image1: require('../../assets/michael-dziedzic-qDG7XKJLKbs-unsplash.jpg')},
    { image: require('../../assets/andrey-sharpilo-0eJ4d17-xm4-unsplash.jpg'), name: ' Lorem ipsum, or lipsum as it is sometimes ,', price: 'Lorem ipsum @ or lipsum', image1: require('../../assets/ryan-christodoulou-Vra_DPrrBlE-unsplash.jpg')},
          ]
    return (
      <View style={styles.mainContainer}>
      <View style={styles.container}>
          <FlatList
              data={home}
              renderItem={({ item }) => {
                  return <HomeDetails 
                  name={item.name} 
                  price={item.price} 
                  image={item.image}
                  image1={item.image1}
                  navigation={navigation} />
              }}
              keyExtractor={(item) => item.number}
          />
      </View>
  </View>
    )
}
const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: "#fff",
},
container: {
    flex: 1,
    justifyContent: "space-around",
    marginLeft: 1,
},
icons: {
    flexDirection: "row",
    marginTop: 15,
    marginRight: 20,
    alignSelf: "flex-start",
},


shoppingCart: {
    
    marginTop:5,
    marginLeft: 270,
    borderRadius: 20,
    height: 40,
    width: 40,
    alignItems:"center"
},
heading: {
    marginLeft: 20,
    fontWeight: "bold",
    fontSize: 25
},
textInputContainer:{
flexDirection: 'row',
backgroundColor: "white",
justifyContent: 'space-between',
alignItems: 'center',
height: 50,
width: 330,
marginHorizontal: 5,
marginVertical: 20,
borderRadius: 10,
},
textInput: {
marginLeft:10

},
search:{
    marginRight:10,
    fontSize:15
}
  
  });