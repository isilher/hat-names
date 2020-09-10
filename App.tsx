import { StatusBar } from 'expo-status-bar'
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { withAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react'

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
  },
  hat: {
    fontSize: 100,
  },
})

function App(): JSX.Element {
  return (
    <View style={styles.container}>
      <Text style={styles.hat}>🎩</Text>
      <Text style={styles.title}>Hat Names</Text>
      <AmplifySignOut />
      <StatusBar style='auto' />
    </View>
  )
}

export default withAuthenticator(App, true)
