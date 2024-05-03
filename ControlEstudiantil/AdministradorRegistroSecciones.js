import React from 'react';
import { StatusBar, Image, StyleSheet, Text, View, TouchableOpacity } from 'react-native';

const Header = () => {
  return (
    <View style={styles.header}>
      <Text style={styles.adminText}>Administrador</Text>
      <Image source={require('./assets/login.png')} style={styles.loginImage} />
    </View>
  );
};

const Footer = () => {
  return (
    <View style={styles.footer}>
      <Image source={require('./assets/hogar.png')} style={styles.footerIcon} />
      <Image source={require('./assets/usuario.png')} style={styles.footerIcon} />
      <Image source={require('./assets/notas.png')} style={styles.footerIcon} />
      <Image source={require('./assets/centro-de-llamadas.png')} style={styles.footerIcon} />
    </View>
  );
};

export default function App() {
  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.body}>
        <Text style={styles.title}>Registro de Sección</Text>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Docentes</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button, { marginTop: 10 }]}>
          <Text style={styles.buttonText}>Alumnos</Text>
        </TouchableOpacity>
      </View>
      <Footer />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#C5C5C5',
  },
  header: {
    backgroundColor: '#6B3ABB',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between', // Alinear los elementos en los extremos
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  adminText: {
    fontFamily: 'Righteous', // Aplicar la fuente "Righteous"
    fontSize: 20,
    color: '#fff', // Cambiado a blanco para el color del texto
  },
  loginImage: {
    width: 60, // Reducido el tamaño de la imagen para que se ajuste mejor al encabezado
    height: 60,
    resizeMode: 'contain',
  },
  body: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'black',
    marginBottom: 10, // Ajuste del margen inferior
  },
  button: {
    backgroundColor: '#D9D9D9',
    paddingVertical: 15,
    paddingHorizontal: 140,
    borderRadius: 25,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black',
    textAlign: 'center',
  },
  footer: {
    backgroundColor: '#6B3ABB',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around', // Alinear los elementos equitativamente
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  footerIcon: {
    width: 30,
    height: 30,
    resizeMode: 'contain',
    tintColor: '#FFFFFF', // Cambiado el color de las imágenes a blanco
  },
});