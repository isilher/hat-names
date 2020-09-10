import { StatusBar } from 'expo-status-bar'
import React from 'react'
import { StyleSheet, Text, View, Button } from 'react-native'
import { withAuthenticator } from 'aws-amplify-react-native'
import Amplify, { Auth } from 'aws-amplify'
// @ts-expect-error aws exports has no typing
import awsconfig from './aws-exports.js'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 50,
  },
  hat: {
    fontSize: 100,
  },
})

Amplify.configure(awsconfig)

function App(): JSX.Element {
  return (
    <View style={styles.container}>
      <Text style={styles.hat}>🎩</Text>
      <Text style={styles.title}>Hat Names</Text>
      <Button onPress={() => Auth.signOut()} title='Sign out' />
      <StatusBar style='auto' />
    </View>
  )
}

export default withAuthenticator(App, { signUpConfig: { hiddenDefaults: ['phone_number'] } })
