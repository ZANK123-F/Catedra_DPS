import React from 'react';
import { Image, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const Header = () => {
  return (
    <View style={styles.header}>
      <Text style={styles.adminText}>Alumno</Text>
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
      <View style={styles.body}>
        <Text style={styles.sectionTitle}>Tareas</Text>
        <View style={styles.taskContainer}>
          <Image source={require('./assets/pdf.png')} style={styles.taskImage} />
          <TouchableOpacity style={styles.submitButton}>
            <Text style={styles.submitButtonText}>Entregar</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.taskContainer}>
          <Image source={require('./assets/pdf.png')} style={styles.taskImage} />
          <TouchableOpacity style={styles.submitButton}>
            <Text style={styles.submitButtonText}>Entregar</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.taskContainer}>
          <Image source={require('./assets/pdf.png')} style={styles.taskImage} />
          <TouchableOpacity style={styles.submitButton}>
            <Text style={styles.submitButtonText}>Entregar</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.fileSelection}>
          <Text style={styles.fileSelectionText}>Seleccione archivos</Text>
        </View>
        <View style={styles.uploadContainer}>
          <Text style={styles.uploadText}>Seleccione archivos</Text>
          <View style={styles.uploadBox}>
            <Image source={require('./assets/basurero.png')} style={styles.miniImage} />
            <Image source={require('./assets/notas.png')} style={styles.miniImage} />
            <Image source={require('./assets/pdf.png')} style={styles.miniImage} />
          </View>
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={[styles.saveButton, { backgroundColor: '#351D5B' }]}>
            <Text style={styles.buttonText}>Guardar cambios</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.cancelButton}>
            <Text style={styles.buttonText}>Cancelar</Text>
          </TouchableOpacity>
        </View>
      </View>
      <Footer />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#B7ADC9',
  },
  body: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    marginTop: 50,
    paddingLeft: 20,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  taskContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  taskImage: {
    width: 60,
    height: 60,
    resizeMode: 'contain',
  },
  submitButton: {
    backgroundColor: '#A167FF',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 15,
    marginLeft: 20,
  },
  submitButtonText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: 'bold',
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
  fileSelection: {
    marginTop: 20,
  },
  fileSelectionText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  uploadContainer: {
    backgroundColor: '#D9D9D9',
    width: '100%',
    padding: 20,
    borderWidth: 2,
    borderColor: '#000',
    borderRadius: 10,
    marginBottom: 20,
    minHeight: 200, // Ajuste de altura mínima
  },
  uploadText: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  uploadBox: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  miniImage: {
    width: 30,
    height: 30,
    resizeMode: 'contain',
    marginLeft: 10,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    width: '100%',
  },
  saveButton: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 10,
    marginLeft: 10,
  },
  cancelButton: {
    backgroundColor: '#FF6B6B',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 10,
    marginLeft: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default App;
