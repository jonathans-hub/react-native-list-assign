import React from "react";
import { View, Text,  StyleSheet , Image} from "react-native";
import profile from './assets/wp10721692-hapebeast-nft-wallpapers.jpg'

export default function App() {
  return (
    <View style={style.container}>
      <Image source={profile} style={style.image}/>    
      <View style={style.deetz}>
         <Text style={style.lable}>Name</Text>
         <Text style={[style.lable, style.info]}>Bored Ape</Text>
      </View>
      <View style={style.deetz}>
         <Text style={style.lable}>Email</Text>
         <Text style={[style.lable, style.info]}>boredape@nft.com</Text>
      </View>
      <View style={style.deetz}>
         <Text style={style.lable}>Gender</Text>
         <Text style={[style.lable, style.info]}>Male</Text>
      </View>
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 120

  },
  image:{
    width: 140,
    height:140,
    alignSelf:"center",
    marginBottom:50,
    borderRadius:70
  },
  deetz:{
    flexDirection: "row",
    justifyContent:"space-around",
    margin:10
  },
  lable:{
    fontSize:20,
    flex:3,
    borderColor:"black",
    borderWidth:1, 
    marginRight:10,
    paddingHorizontal:10
  },
  info:{
    flex:6
  }
});
