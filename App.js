import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { useState } from "react";

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      password: "",
    };
  }
  render() {
    return (
      <View style={style.container}>
        <View style={style.containerDiv}>
          <View style={style.signInBox}>
            <Text style={style.loginText}>Log in</Text>
            <TextInput
              style={[style.textInputArea, { marginBottom: 50 }]}
              // secureTextEntry={true}
              autoCorrect={false}
              autoCapitalize="none"
              placeholder="username"
              value={this.state.username}
              onChangeText={(username) => {
                this.setState({ username });
                console.log(this.state.username);
              }}
            />
            <TextInput
              style={style.textInputArea}
              secureTextEntry={true}
              autoCorrect={false}
              autoCapitalize="none"
              placeholder="password"
              value={this.state.password}
              onChangeText={(password) => {
                this.setState({ password });
                console.log(this.state.password);
              }}
            />
            <View style={style.forgetTO}>
              <TouchableOpacity>
                <Text style={style.forgetTOText}>Forgot password?</Text>
              </TouchableOpacity>
            </View>
            <TouchableOpacity style={style.logButtonTO}>
              <Text style={style.LogButtonText}>Log in</Text>
            </TouchableOpacity>
            <View style={style.EndText}>
              <Text style={{fontSize: 17}}>Don't have an account?</Text>
              <TouchableOpacity>
              <Text style={style.signUpText}> Sign up</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    );
  }
}

const style = StyleSheet.create({
  container: {
    flex: 1,
  },
  containerDiv: {
    marginTop: 100,
    margin: 40,
    borderColor: "lightgrey",
    borderWidth: 4,
    borderRadius: 20,
    height: 730,
  },
  signInBox: {
    padding: 20,
  },
  loginText: {
    marginVertical: 70,
    fontSize: 40,
    color: "indigo",
    fontWeight: "bold",
  },
  textInputArea: {
    borderBottomColor: "indigo",
    borderBottomWidth: 2,
    paddingBottom: 10,
    fontSize: 20,
    marginBottom: 20,
  },
  forgetTO: {
    alignItems: "flex-end",
  },
  forgetTOText: {
    fontSize: 18,
    color: "#24a0ed",
  },
  logButtonTO: {
    marginTop: 80,
    alignItems: "center",
    justifyContent: "center",
    height: 60,
    backgroundColor: "indigo",
    borderRadius: 20,
    marginBottom: 50,
  },
  LogButtonText: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
  },
  EndText:{
    flexDirection:"row",
    alignSelf:"center"
  },
  signUpText: {
    fontSize: 17,
    color: "indigo",
},
});
