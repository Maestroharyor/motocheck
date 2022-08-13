import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

type Props = {}

const WelcomeSection = (props: Props) => {
  return (
       <View style={styles.container}>
            <Text style={styles.header}>Welcome Back,Imani 👋🏽</Text>
            <Text style={styles.text}>It's a long established fact lorem</Text>
        </View>
  )
}

export default WelcomeSection

const styles = StyleSheet.create({
  container:{
    marginBottom: 20,
    marginTop: 10
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 2
  },
  text: {
    fontSize: 14,
    color: "#868697"
  }
})