import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

const Header = () => {
  return (
    <View style={styles.header}>
      <Text style={styles.adminText}></Text>
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

const App = () => {
  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.docenteContainer}>
        <TouchableOpacity style={styles.button}>
          <Image source={require('./assets/flecha.png')} style={styles.icon} />
          <Text style={styles.buttonText}>Docente</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.body}>
        <View style={styles.rectangle}>
          <Image source={require('./assets/notas.png')} style={styles.imageInRectangle} />
          <Image source={require('./assets/basurero.png')} style={styles.imageInRectangle} />
        </View>
        <View style={styles.rectangle}>
          <Image source={require('./assets/notas.png')} style={styles.imageInRectangle} />
          <Image source={require('./assets/basurero.png')} style={styles.imageInRectangle} />
        </View>
        <View style={styles.rectangle}>
          <Image source={require('./assets/notas.png')} style={styles.imageInRectangle} />
          <Image source={require('./assets/basurero.png')} style={styles.imageInRectangle} />
        </View>
      </View>
      <View style={styles.bottomContent}>
        <Image source={require('./assets/advertencia.png')} style={styles.lockIcon} />
        <Text style={styles.unauthorizedText}>Información no autorizada</Text>
      </View>
      <Footer />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#B7ADC9',
    paddingTop: 0,
  },
  body: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  header: {
    backgroundColor: '#6B3ABB',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    paddingVertical: 15,
  },
  adminText: {
    fontFamily: 'Righteous',
    fontSize: 20,
    color: '#fff',
  },
  loginImage: {
    width: 90,
    height: 70,
    resizeMode: 'contain',
  },
  footer: {
    backgroundColor: '#6B3ABB',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 40,
    paddingVertical: 10,
  },
  footerIcon: {
    width: 90,
    height: 30,
    resizeMode: 'contain',
    tintColor: '#FFFFFF',
    marginLeft: 10,
  },
  rectangle: {
    width: 300,
    height: 60,
    backgroundColor: '#D9D9D9',
    justifyContent: 'flex-end',
    alignItems: 'center',
    borderRadius: 10,
    flexDirection: 'row',
    marginVertical: 5,
    marginTop: 10,
  },
  icon: {
    width: 20,
    height: 20,
    resizeMode: 'contain',
    marginRight: 5,
  },
  imageInRectangle: {
    width: 40,
    height: 40,
    resizeMode: 'contain',
    marginHorizontal: 5,
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#A167FF',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 15,
    marginBottom: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  docenteContainer: {
    marginVertical: 10,
    paddingHorizontal: 20,
  },
  bottomContent: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 20,
  },
  lockIcon: {
    width: 80,
    height: 80,
    resizeMode: 'contain',
    marginRight: 10,
  },
  unauthorizedText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000000',
  },
});

export default App;
