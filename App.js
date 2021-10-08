import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <Button
        title="Open Dialog"/>
        <View style={styles.dialogContainer}>
          <Text>Choose Okay or Cancel</Text>
          <View>
            <Button title="Okay" />
            <Button title="Cancel" />
          </View>
        </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  dialogContainer: {
    border: 'solid 1px #FF3399',
    padding: 30,
  },
  buttonActions: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
  }

});
