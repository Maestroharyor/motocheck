import React from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import FontAwesome from '@expo/vector-icons/FontAwesome5';


type Props = {}

const InputForm = (props: Props) => {
  return (
    <View>
       <View style={styles.inputContainer}>
        <View style={styles.icon}>
          <FontAwesome name="search" size={15} color={"#868697"}  />
        </View>
        
        <TextInput  placeholder='Search lorem ipsum' />
       </View>
    </View>
  )
}

export default InputForm

const styles = StyleSheet.create({
  inputContainer: {
    borderColor: "#eee",
    borderWidth: 1,
    borderRadius: 2,
    backgroundColor: "#fff",
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 12,
    paddingVertical: 8,
    marginBottom: 20
  },
  icon:{
    marginRight: 20
  },
  input: {
    backgroundColor: "#f9fafd"
  }
})