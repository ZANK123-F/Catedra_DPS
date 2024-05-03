import React, { useState } from 'react';
import { StatusBar, Image, StyleSheet, Text, View, TextInput, Button, Alert, TouchableOpacity } from 'react-native';

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
  const [formData, setFormData] = useState({
    nombre: '',
    asignatura: '',
    codigoMateria: '',
    rol: '',
    carnet: '',
    correoInstitucional: ''
  });

  const handleInputChange = (key, value) => {
    setFormData({
      ...formData,
      [key]: value
    });
  };

  const handleSaveChanges = () => {
    if (formData.nombre.trim() === '' || formData.asignatura.trim() === '' || formData.codigoMateria.trim() === '' || formData.rol.trim() === '' || formData.carnet.trim() === '' || formData.correoInstitucional.trim() === '') {
      Alert.alert('Error', 'Por favor, complete todos los campos.');
      return;
    }


    if (!/^[a-zA-Z\s]+$/.test(formData.nombre)) {
      Alert.alert('Error', 'El campo Nombre solo debe contener letras.');
      return;
    }


    if (!/^[a-zA-Z\s]+$/.test(formData.asignatura)) {
      Alert.alert('Error', 'El campo Asignatura solo debe contener letras.');
      return;
    }


    if (!/^[a-zA-Z0-9]+$/.test(formData.codigoMateria)) {
      Alert.alert('Error', 'El campo Código de Materia solo debe contener letras y números.');
      return;
    }


    if (!/^[a-zA-Z\s]+$/.test(formData.rol)) {
      Alert.alert('Error', 'El campo Rol solo debe contener letras.');
      return;
    }


    if (!/^[0-9]+$/.test(formData.carnet)) {
      Alert.alert('Error', 'El campo Carnet solo debe contener números.');
      return;
    }


    if (!formData.correoInstitucional.includes('@')) {
      Alert.alert('Error', 'El campo Correo Institucional debe contener "@".');
      return;
    }


    console.log('Formulario guardado:', formData);
  };

  const handleCancel = () => {

    setFormData({
      nombre: '',
      asignatura: '',
      codigoMateria: '',
      rol: '',
      carnet: '',
      correoInstitucional: ''
    });
  };

  return (
    <View style={[styles.container, {backgroundColor: '#B7ADC9'}]}>
      <Header />
      <View style={styles.oval}>
        <Text style={styles.text}>Datos</Text>
      </View>
      <View style={styles.form}>
        <Text style={styles.label}>Nombre</Text>
        <TextInput
          style={styles.input}
          placeholder=""
          value={formData.nombre}
          onChangeText={(text) => handleInputChange('nombre', text)}
        />
        <View style={styles.separator} />
        <Text style={styles.label}>Asignatura</Text>
        <TextInput
          style={styles.input}
          placeholder=""
          value={formData.asignatura}
          onChangeText={(text) => handleInputChange('asignatura', text)}
        />
        <View style={styles.separator} />
        <Text style={styles.label}>Código de Materia</Text>
        <TextInput
          style={styles.input}
          placeholder=""
          value={formData.codigoMateria}
          onChangeText={(text) => handleInputChange('codigoMateria', text)}
        />
        <View style={styles.separator} />
        <Text style={styles.label}>Rol</Text>
        <TextInput
          style={styles.input}
          placeholder=""
          value={formData.rol}
          onChangeText={(text) => handleInputChange('rol', text)}
        />
        <View style={styles.separator} />
        <Text style={styles.label}>Carnet</Text>
        <TextInput
          style={styles.input}
          placeholder=""
          value={formData.carnet}
          onChangeText={(text) => handleInputChange('carnet', text)}
        />
        <View style={styles.separator} />
        <Text style={styles.label}>Correo Institucional</Text>
        <TextInput
          style={styles.input}
          placeholder=""
          value={formData.correoInstitucional}
          onChangeText={(text) => handleInputChange('correoInstitucional', text)}
        />
      </View>
      <View style={styles.buttonContainer}>
        <Button title="Guardar Cambios" onPress={handleSaveChanges} color="#351D5B" />
        <View style={styles.buttonSeparator} />
        <Button title="Cancelar" onPress={handleCancel} color="#351D5B" />
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
  oval: {
    backgroundColor: '#fff',
    borderRadius: 100,
    width: 200,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    marginTop: 20,
  },
  text: {
    fontFamily: 'Inter',
    fontSize: 18,
    color: '#000',
  },
  form: {
    paddingHorizontal: 20,
    marginTop: 20,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
    backgroundColor: '#fff',
    borderRadius: 100,
    paddingLeft: 15,
    color: '#000',
  },
  label: {
    marginBottom: 5,
  },
  separator: {
    height: 5,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 20,
  },
  buttonSeparator: {
    width: 10,
  },
  footerIcon: {
    width: 30,
    height: 30,
    resizeMode: 'contain',
    tintColor: '#FFFFFF',
  },
});
