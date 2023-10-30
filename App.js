import React from "react";
import {
  ScrollView,
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  FlatList,
  Image,
} from "react-native";
import smittensPho from "./assets/mrsmittens.jpeg";
import katakuriPho from "./assets/katakuri.jpeg";
import snowyPho from "./assets/snowy.jpeg";
import { AntDesign } from '@expo/vector-icons';
import { EvilIcons } from '@expo/vector-icons';
export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      pets: [
        {
          petName: "Mr. Smittens",
          petType: "Cat",
          petAge: "2 years old",
          petLocation: "4 Elm St, Townsville",
          petPicture: smittensPho,
        },
        {
          petName: "Katakuri",
          petType: "Dog",
          petAge: "4 years old ",
          petLocation: "3 Main St, Townsville",
          petPicture: katakuriPho,
        },
        {
          petName: "Snowy",
          petType: "Dog",
          petAge: "6 years old",
          petLocation: "7 Oak St, Townsville",
          petPicture: snowyPho,
        },
      ],
    };
  }
  render() {
    return (
      <View style={style.container}>
        <View style={style.workArea}>
        <View style={style.searchArea}>
          <View style={style.searchButton}><TouchableOpacity><AntDesign name="search1" size={30} color="black" /></TouchableOpacity></View>
          <TextInput placeholder="Search here" style={{flex:1,fontSize:19}}/>
        </View>
        <FlatList
          data={this.state.pets}
          style={style.flatListt}
          scrollEnabled={true}
          showsVerticalScrollIndicator={false}
          renderItem={({ item }) => {
            return (
              <View style={style.rowCon}>
                <View style={style.ImgDiv}>
                  <Image source={item.petPicture} style={style.petPic} />
                </View>
                <View style={style.textDiv}>
                  <Text style={[style.textInDiv,style.textDiv1]}>{item.petName}</Text>
                  <Text style={style.textInDiv}>{item.petType}</Text>
                  <Text style={style.textInDiv}>{item.petAge}</Text>
                  <View style={style.roww1}>
                    <View style={style.iconn1}><EvilIcons name="location" size={18} color="black" /></View>
                    <Text style={ {fontSize: 15}}>{item.petLocation}</Text>
                  </View>
                </View>
              </View>
            );
          }}
        />
        </View>
      </View>
    );
  }
}

const style = StyleSheet.create({
  container: {
    flex: 0.91,
    borderRadius:30,
    marginTop: 60,
    backgroundColor:"lightgrey"
  },
  workArea:{
    marginHorizontal:20,
    
  },
  searchArea:{
    alignItems:"center",
    flexDirection:"row",
    backgroundColor:"white",
    marginTop:30,
    marginBottom:20,
    height:60,
    borderRadius:20,
    paddingHorizontal:20
    
  },
  searchButton:{
    width:40,
    alignItems:"center",
    marginRight:5
  },
  rowCon: {
    flexDirection: "row",
    alignItems: "center",
    height: 240,
  },
  petPic: {
    height: 210,
    width: 190,
    borderRadius: 20,
  },
  textDiv: {
    flexDirection: "column",
    backgroundColor:"white",
    height:150,
    flex:1,
    borderTopRightRadius:20,
    borderBottomRightRadius:20,
    paddingVertical:10,
    paddingBottom:10
  },
  textInDiv: {
    fontSize: 15,
    marginBottom:8, 
    paddingLeft:10
  },
  textDiv1:{
    color:"indigo",
    fontWeight:"bold",
    fontSize:25
  },
  roww: {
    flexDirection: "row",
    alignItems: "center",
  },
  roww1:{
    flexDirection:"row",
    alignItems:"center",
    marginBottom:8, 
    paddingLeft:5
  },

});
