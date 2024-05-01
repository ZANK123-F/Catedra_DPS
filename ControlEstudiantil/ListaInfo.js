import React, { useState } from 'react';
import { StatusBar, Image, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons';

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
      <Image source={require('./assets/inicio.jpg')} style={styles.footerIcon} />
      <Image source={require('./assets/cuentas.png')} style={styles.footerIcon} />
      <Image source={require('./assets/notas.jpg')} style={styles.footerIcon} />
      <Image source={require('./assets/soporte.jpg')} style={styles.footerIcon} />
    </View>
  );
};

export default function App() {
  const [showOptions, setShowOptions] = useState(false);
  const [selectedOption, setSelectedOption] = useState('');

  const handleToggleOptions = () => {
    setShowOptions(!showOptions);
    setSelectedOption('');
  };

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
  };

  const renderNames = () => {
    if (selectedOption === 'Estudiantes') {
      return (
        <View style={styles.table}>
          <View style={styles.row}>
            <View style={styles.nameContainer}>
              <Text style={styles.nameText}>Nombre 1</Text>
              <TouchableOpacity style={styles.iconButton}>
                <Feather name="edit" size={20} color="black" />
              </TouchableOpacity>
              <TouchableOpacity style={styles.iconButton}>
                <Feather name="trash-2" size={20} color="black" />
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.row}>
            <View style={styles.nameContainer}>
              <Text style={styles.nameText}>Nombre 2</Text>
              <TouchableOpacity style={styles.iconButton}>
                <Feather name="edit" size={20} color="black" />
              </TouchableOpacity>
              <TouchableOpacity style={styles.iconButton}>
                <Feather name="trash-2" size={20} color="black" />
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.row}>
            <View style={styles.nameContainer}>
              <Text style={styles.nameText}>Nombre 3</Text>
              <TouchableOpacity style={styles.iconButton}>
                <Feather name="edit" size={20} color="black" />
              </TouchableOpacity>
              <TouchableOpacity style={styles.iconButton}>
                <Feather name="trash-2" size={20} color="black" />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      );
    } else if (selectedOption === 'Maestros') {
      return (
        <View style={styles.table}>
          <View style={styles.row}>
            <View style={styles.nameContainer}>
              <Text style={styles.nameText}>Nombre A</Text>
              <TouchableOpacity style={styles.iconButton}>
                <Feather name="edit" size={20} color="black" />
              </TouchableOpacity>
              <TouchableOpacity style={styles.iconButton}>
                <Feather name="trash-2" size={20} color="black" />
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.row}>
            <View style={styles.nameContainer}>
              <Text style={styles.nameText}>Nombre B</Text>
              <TouchableOpacity style={styles.iconButton}>
                <Feather name="edit" size={20} color="black" />
              </TouchableOpacity>
              <TouchableOpacity style={styles.iconButton}>
                <Feather name="trash-2" size={20} color="black" />
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.row}>
            <View style={styles.nameContainer}>
              <Text style={styles.nameText}>Nombre C</Text>
              <TouchableOpacity style={styles.iconButton}>
                <Feather name="edit" size={20} color="black" />
              </TouchableOpacity>
              <TouchableOpacity style={styles.iconButton}>
                <Feather name="trash-2" size={20} color="black" />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      );
    }
  };

  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.body}>
        <TouchableOpacity style={styles.button} onPress={handleToggleOptions}>
          <Text style={styles.buttonText}>{showOptions ? 'Ocultar opciones' : 'Mostrar opciones'}</Text>
        </TouchableOpacity>
        {showOptions && (
          <View style={styles.optionsContainer}>
            <TouchableOpacity style={styles.optionButton} onPress={() => handleOptionSelect('Estudiantes')}>
              <Text style={styles.optionButtonText}>Estudiantes</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.optionButton} onPress={() => handleOptionSelect('Maestros')}>
              <Text style={styles.optionButtonText}>Maestros</Text>
            </TouchableOpacity>
          </View>
        )}
        {selectedOption !== '' && renderNames()}
      </View>
      <Footer />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#9C91AD',
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
  body: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'black',
    marginBottom: 10,
  },
  button: {
    backgroundColor: '#D9D9D9',
    paddingVertical: 15,
    paddingHorizontal: 140,
    borderRadius: 25,
    marginTop: 10,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black',
    textAlign: 'center',
  },
  optionsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 10,
  },
  optionButton: {
    backgroundColor: '#D9D9D9',
    paddingVertical: 10,
    paddingHorizontal: 30,
    borderRadius: 25,
  },
  optionButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'black',
    textAlign: 'center',
  },
  table: {
    marginTop: 10,
    width: '80%',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  nameContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 10,
    paddingVertical: 10,
    borderRadius: 15,
    marginRight: 10,
    width: '100%',
  },
  nameText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'black',
    marginRight: 10,
    flex: 1,
      },
  iconButton: {
    marginLeft: 10,
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
