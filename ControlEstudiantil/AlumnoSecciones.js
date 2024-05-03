import React from 'react';
import { StatusBar, Image, StyleSheet, Text, View, TouchableOpacity } from 'react-native';

const Header = () => {
  return (
    <View style={styles.header}>
      <Text style={styles.adminText}>Alumno</Text>
      <Image source={require('./assets/login.jpg')} style={styles.loginImage} />
    </View>
  );
};

//.....
const Footer = () => {
  return (
    <View style={styles.footer}>
      <TouchableOpacity onPress={() => console.log("Hacer clic en hogar")}>
        <Image source={require('./assets/hogar.png')} style={styles.footerIcon} />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => console.log("Hacer clic en usuario")}>
        <Image source={require('./assets/usuario.png')} style={styles.footerIcon} />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => console.log("Hacer clic en notas")}>
        <Image source={require('./assets/notas.png')} style={styles.footerIcon} />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => console.log("Hacer clic en centro de llamadas")}>
        <Image source={require('./assets/centro-de-llamadas.png')} style={styles.footerIcon} />
      </TouchableOpacity>
    </View>
  );
};

export default function App() {
  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.body}>

        <View style={styles.bodySubtitleContainer}>
          <Text style={styles.bodySubtitle}> Añoss</Text>
        </View>
        <View style={styles.imageContainer}>
          <View style={[styles.imageWrapper, { marginLeft: 0 }]}>
            <Image source={require('./assets/primeranio.jpg')} style={styles.image} />
            <TouchableOpacity onPress={() => console.log("Ir a la asignatura")} style={styles.button}>
              <Text style={styles.buttonText}>Ir a la asignatura</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.imageWrapper}>
            <Image source={require('./assets/segundoanio.png')} style={styles.image} />
            <TouchableOpacity onPress={() => console.log("Ir a la asignatura")} style={styles.button}>
              <Text style={styles.buttonText}>Ir a la asignatura</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={[styles.imageContainer, { marginBottom: 20 }]}>
          <View style={[styles.imageWrapper, { marginLeft: 0 }]}>
            <Image source={require('./assets/terceranio.png')} style={styles.image} />
            <TouchableOpacity onPress={() => console.log("Ir a la asignatura")} style={styles.button}>

              <Text style={styles.buttonText}>Ir a la asignatura</Text>
            </TouchableOpacity>
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
    backgroundColor: '#C5C5C5',
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
    width: 60,
    height: 60,
    resizeMode: 'contain',
  },
  body: {
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginTop: 50,
  },
  titleContainer: {
    alignItems: 'center',
    marginBottom: 10,
  },
  bodyTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'black',
  },
  bodySubtitleContainer: {
    alignItems: 'center',
    marginBottom: 10,
  },
  bodySubtitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'black',
  },
  imageContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 40,
    marginTop: 40,
  },
  imageWrapper: {
    alignItems: 'center',
    marginLeft: 20,
    marginRight: 20,
  },
  image: {
    width: 150,
    height: 120,
    resizeMode: 'cover',
  },
  button: {
    backgroundColor: '#6B3ABB',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 5,
    marginTop: 10,
  },
  buttonText: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#fff',
  },
  footer: {
    backgroundColor: '#6B3ABB',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    paddingHorizontal: 20,
    paddingVertical: 10,
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
  },
  footerIcon: {
    width: 30,
    height: 30,
    resizeMode: 'contain',
    tintColor: '#FFFFFF',
  },
});
