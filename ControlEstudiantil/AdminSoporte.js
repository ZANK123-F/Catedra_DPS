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
    <TouchableOpacity onPress={() => console.log("Hacer clic en hogar")}>
      <Image source={require('./assets/hogar.png')} style={styles.footerIcon} />
       </TouchableOpacity>
       <TouchableOpacity onPress={() => console.log("Hacer clic en hogar")}>
      <Image source={require('./assets/usuario.png')} style={styles.footerIcon} />
       </TouchableOpacity>
       <TouchableOpacity onPress={() => console.log("Hacer clic en hogar")}>
      <Image source={require('./assets/notas.png')} style={styles.footerIcon} />
       </TouchableOpacity>
       <TouchableOpacity onPress={() => console.log("Hacer clic en hogar")}>
      <Image source={require('./assets/centro-de-llamadas.png')} style={styles.footerIcon} />
       </TouchableOpacity>
    </View>
  );
};

export default function App() {
  return (
    <View style={styles.container}>
      <Header />

      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Botón 1</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Botón 2</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Botón 3</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.body}>
        <View style={styles.infoContainer}>
          <View style={styles.infoContent}>
            <Image source={require('./assets/auriculares-de-usuario.png')} style={styles.infoImage} />
            <View>
              <Text style={styles.infoTitle}>Título de la información</Text>
              <Text style={styles.infoText}>Aquí va tu información</Text>
              <Text style={styles.infoText}>Aquí va tu información</Text>
              <Text style={styles.infoText}>Aquí va tu información</Text>
            </View>
          </View>
        </View>
      </View>
      <Footer />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#B7ADC9',

  },
  header: {
    backgroundColor: '#6B3ABB',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  adminText: {
    fontFamily: 'Righteous',
    fontSize: 20,
    color: '#fff',
  },
  loginImage: {
    width: 50,
    height: 50,
    resizeMode: 'contain',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
     backgroundColor: '#D9D9D9',
    paddingHorizontal: 20,
    paddingVertical: 20,
    marginBottom: 10,
    marginTop: 30 // Margen superior para bajar un poco los botones
  },
  button: {
    backgroundColor: '#351D5B',
    paddingVertical: 7,
    paddingHorizontal: 25,
    borderRadius: 2,
  },

  buttonText: {
    fontFamily: 'Righteous',
    fontSize: 16,
    color: '#fff',
  },
  body: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  infoContainer: {
    backgroundColor: '#9C91AD', // Fondo blanco para el contenedor de información
    width: 380, // Tamaño fijo del contenedor
    padding: 20,
    borderRadius: 20,
    elevation: 3, // Sombra para resaltar el contenedor
  },
  infoContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  infoImage: {
    width: 65, // Reducir el tamaño de la imagen
    height: 100,
    resizeMode: 'contain',
    marginRight: 10,
  },
  infoTitle: {
    fontFamily: 'Righteous',
    fontSize: 16,
    fontWeight: 'bold',
    color: 'black',
  },
  infoText: {
    fontFamily: 'Righteous',
    fontSize: 15,
    color: 'black',
  },
  footer: {
    backgroundColor: '#6B3ABB',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  footerIcon: {
    width: 30,
    height: 30,
    resizeMode: 'contain',
    tintColor: '#FFFFFF',
  },
});
