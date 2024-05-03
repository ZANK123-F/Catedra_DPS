import React from 'react';
import { StatusBar, Image, StyleSheet, Text, View, TouchableOpacity } from 'react-native';

const Header = ({ userType }) => {
  const adminText = userType === 'docente' ? 'Docente' : 'Alumno';

  return (
    <View style={styles.header}>
      <Text style={styles.adminText}>{adminText}</Text>
      <Image source={require('./assets/login.png')} style={styles.loginImage} />
    </View>
  );
};

const Footer = () => {
  return (
    <View style={styles.footer}>
      <Image source={require('./assets/hogar.png')} style={styles.footerIcon} />
      <Image source={require('./assets/asistencia.png')} style={styles.footerIcon} />
      <Image source={require('./assets/notas.png')} style={styles.footerIcon} />
      <Image source={require('./assets/centro-de-llamadas.png')} style={styles.footerIcon} />
      <Image source={require('./assets/tarea.png')} style={styles.footerIcon} /> {/* Nuevo icono */}
    </View>
  );
};

export default function App() {
  return (
    <View style={[styles.container, {backgroundColor: '#B7ADC9' }]}>
      <Header userType="docente" />
      <View style={styles.centerContent}>
        <Text style={styles.centerText}>Alumno</Text>
        <View style={styles.centerTextContainer}></View>
        <Text style={[styles.leftText, {marginTop: 10}]}>Mis asignaturas</Text> {/* Ajuste aquí */}
        <View style={styles.imageButtonContainer}>
          <View style={styles.imageButton}>
            <Image source={require('./assets/asn.png')} style={styles.image} />
            <TouchableOpacity onPress={() => console.log("Ir a la asignatura")} style={styles.button}>
              <Text style={styles.buttonText}>Ir a la asignatura</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.imageButton}>
            <Image source={require('./assets/spring.png')} style={styles.image} />
            <TouchableOpacity onPress={() => console.log("Ir a la asignatura")} style={styles.button}>
              <Text style={styles.buttonText}>Ir a la asignatura</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.imageButtonContainer}>
          <View style={styles.imageButton}>
            <Image source={require('./assets/java.png')} style={styles.image} />
            <TouchableOpacity onPress={() => console.log("Ir a la asignatura")} style={styles.button}>
              <Text style={styles.buttonText}>Ir a la asignatura</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.imageButton}>
            <Image source={require('./assets/Progra.png')} style={styles.image} />
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
  centerContent: {
    flexDirection: 'center',
    alignItems: 'center',
    marginTop: 15,
    marginLeft: 20,
  },
  centerTextContainer: {
    flex: 1,
    alignItems: 'flex-start',
  },
  centerText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000',
  },
  leftText: {
    fontSize: 19,
    fontWeight: 'bold',
    color: '#000',
    marginLeft: 5,
  },
  imageButtonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 10,
  },
  imageButton: {
    marginRight: 20,
  },
  image: {
    width: 150,
    height: 150,
    resizeMode: 'contain',
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
