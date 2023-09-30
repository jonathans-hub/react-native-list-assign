import React from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";
import { useState } from "react";

export default function App() {
  const objc = {
    email: "example@email.com",
    password: "",
  };
  const [state, setState] = useState(objc);
  return (
    <View style={style.container}>
      <TextInput
        style={style.textInputArea}
        // secureTextEntry={true}
        autoCorrect={false}
        autoCapitalize="none"
        placeholder="Email"
        value={state.email}
        onChangeText={(email) => {
          setState({ email });
          console.log(state.email);
        }}
      />
      <TextInput
        style={style.textInputArea}
        secureTextEntry={true}
        autoCorrect={false}
        autoCapitalize="none"
        placeholder="Password"
        value={state.password}
        onChangeText={(password) => {
          setState({ password });
          console.log(state.password);
        }}
      />
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 120,
  },
  textInputArea: {
    height: 50,
    backgroundColor: "grey",
    paddingLeft: 10,
    marginBottom: 20,
  },
});