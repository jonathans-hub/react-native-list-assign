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
import johnPro from "./assets/johndoe.jpeg";
import janePro from "./assets/janesmith.jpeg";
import bobPro from "./assets/bobjohnson.png";
import { FontAwesome5 } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { SimpleLineIcons } from "@expo/vector-icons";

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      contacts: [
        {
          fullName: "John Doe",
          phoneNumber: "+1234567890",
          profilePicture: johnPro,
        },
        {
          fullName: "Jane Smith",
          phoneNumber: "+9876543210",
          profilePicture: janePro,
        },
        {
          fullName: "Bob Johnson",
          phoneNumber: "+4567890123",
          profilePicture: bobPro,
        },
        {
          fullName: "John Doe",
          phoneNumber: "+1234567890",
          profilePicture: johnPro,
        },
        {
          fullName: "Jane Smith",
          phoneNumber: "+9876543210",
          profilePicture: janePro,
        },
        {
          fullName: "Bob Johnson",
          phoneNumber: "+4567890123",
          profilePicture: bobPro,
        },
        {
          fullName: "John Doe",
          phoneNumber: "+1234567890",
          profilePicture: johnPro,
        },
        {
          fullName: "Jane Smith",
          phoneNumber: "+9876543210",
          profilePicture: janePro,
        },
        {
          fullName: "Bob Johnson",
          phoneNumber: "+4567890123",
          profilePicture: bobPro,
        },
        {
          fullName: "John Doe",
          phoneNumber: "+1234567890",
          profilePicture: johnPro,
        },
        {
          fullName: "Jane Smith",
          phoneNumber: "+9876543210",
          profilePicture: janePro,
        },
        {
          fullName: "Bob Johnson",
          phoneNumber: "+4567890123",
          profilePicture: bobPro,
        },
        {
          fullName: "John Doe",
          phoneNumber: "+1234567890",
          profilePicture: johnPro,
        },
        {
          fullName: "Jane Smith",
          phoneNumber: "+9876543210",
          profilePicture: janePro,
        },
        {
          fullName: "Bob Johnson",
          phoneNumber: "+4567890123",
          profilePicture: bobPro,
        },
        {
          fullName: "John Doe",
          phoneNumber: "+1234567890",
          profilePicture: johnPro,
        },
        {
          fullName: "Jane Smith",
          phoneNumber: "+9876543210",
          profilePicture: janePro,
        },
        {
          fullName: "Bob Johnson",
          phoneNumber: "+4567890123",
          profilePicture: bobPro,
        },
      ],
    };
  }
  render() {
    return (
      <View style={style.container}>
        <FlatList
          data={this.state.contacts}
          style={style.flatListt}
          scrollEnabled={true}
          showsVerticalScrollIndicator={false}
          renderItem={({ item }) => {
            return (
              <View style={style.rowCon}>
                <View style={style.ImgDiv}>
                  <Image
                    source={item.profilePicture}
                    style={style.profilePic}
                  />
                </View>
                <View style={style.textDiv}>
                  <Text style={style.textInDiv}>{item.fullName}</Text>
                  <Text style={style.textInDiv}>{item.phoneNumber}</Text>
                </View>
                <View style={style.roww}>
                  <TouchableOpacity style={style.iconTO}>
                    <FontAwesome5 name="phone-alt" size={22} color="#24a0ed" />
                  </TouchableOpacity>
                  <TouchableOpacity style={style.iconTO}>
                    <MaterialIcons name="message" size={22} color="#24a0ed" />
                  </TouchableOpacity>
                  <TouchableOpacity style={style.iconTO}>
                    <SimpleLineIcons
                      name="options-vertical"
                      size={22}
                      color="lightgrey"
                    />
                  </TouchableOpacity>
                </View>
              </View>
            );
          }}
        />
      </View>
    );
  }
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 60,
  },
  rowCon: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    height:110
  },
  profilePic: {
    height: 70,
    width: 70,
    borderRadius: 35,
  },
  textDiv: {
    flexDirection: "column",
    marginRight: 45,
    marginLeft: 20,
  },
  textInDiv: {
    fontSize: 15,
  },
  iconTO: {
    marginLeft: 20,
  },
  roww: {
    flexDirection: "row",
    alignItems: "center",
  },
});
