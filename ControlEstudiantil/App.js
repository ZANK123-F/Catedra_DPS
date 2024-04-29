import React from 'react';
import { StatusBar, Image, TextInput, TouchableOpacity, StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Image source={require('./assets/login.png')} style={styles.image} />
      <View style={styles.formContainer}>
        <TextInput style={styles.input} placeholder="Usuario" />
        <TextInput style={styles.input} placeholder="Contraseña" secureTextEntry={true} />
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Iniciar Sesión</Text>
        </TouchableOpacity>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#6B3ABB',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  image: {
    width: '100%',
    height: '60%',
    resizeMode: 'contain',
  },
  formContainer: {
    width: '80%',
    marginTop: 20,
    marginBottom: 50,
  },
  input: {
    height: 40,
    borderColor: '#311A55',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 10,
    color: '#fff',
  },
  button: {
    backgroundColor: '#311A55',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
});
