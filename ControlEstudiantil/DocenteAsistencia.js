import React, { useState } from 'react';
import { StatusBar, Image, StyleSheet, Text, View, TouchableOpacity } from 'react-native';

// Componente para representar cada alumno
const Alumno = ({ name, onPress, selected }) => (
  <View style={styles.item}>
    <View style={styles.infoContainer}>
      <Image source={require('./assets/foto.png')} style={styles.image} />
      <Text style={styles.text}>{name}</Text>
    </View>
    <TouchableOpacity onPress={onPress}>
      <Image
        source={require('./assets/controlar.png')}
        style={[styles.check, selected && styles.checked]}
      />
    </TouchableOpacity>
  </View>
);

const Header = () => {
  return (
    <View style={styles.header}>
      <Text style={styles.adminText}>Docente</Text>
       <TouchableOpacity onPress={() => console.log("Hacer clic en hogar")}>
      <Image source={require('./assets/login.png')} style={styles.loginImage} />
      </TouchableOpacity>
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
      <Image source={require('./assets/cheque-doble.png')} style={styles.footerIcon} />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => console.log("Hacer clic en hogar")}>
      <Image source={require('./assets/carpeta-abierta.png')} style={styles.footerIcon} />
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
  const [selectedItems, setSelectedItems] = useState([]);

  const handleCheckPress = (itemName) => {
    if (selectedItems.includes(itemName)) {
      setSelectedItems(selectedItems.filter((item) => item !== itemName));
    } else {
      setSelectedItems([...selectedItems, itemName]);
    }
  };

  return (
    <View style={styles.container}>
      <Header />
      <Text style={styles.asistenciaText}>Asistencia</Text>
      <View style={styles.body}>
        <View style={styles.whiteSquare}>
          <Text style={styles.alumnosText}>Alumnos</Text>
          {['Nombre 1', 'Nombre 2', 'Nombre 3', 'Nombre 4', 'Nombre 5', 'Nombre 6'].map((name) => (
            <Alumno
              key={name}
              name={name}
              onPress={() => handleCheckPress(name)}
              selected={selectedItems.includes(name)}
            />
          ))}
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
    backgroundColor: '#B7ADC9', // Cambiado al color C5C5C5
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
    width: 50, // Reducido el tamaño de la imagen para que se ajuste mejor al encabezado
    height: 50,
    resizeMode: 'contain',
  },
  asistenciaText: {
    fontFamily: 'Righteous',
    fontSize: 24,
    fontWeight: 'bold',
    color: 'black',
    marginTop: 10, // Margen superior para separar del encabezado
    textAlign: 'center', // Alinear el texto al centro
  },
  alumnosText: {
    fontFamily: 'Righteous',
    fontSize: 17,
    fontWeight: 'bold',
    color: 'black',
    marginTop: 10, // Margen superior para separar del encabezado
    textAlign: 'center', // Alinear el texto al centro
  },
  body: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  whiteSquare: {
    width: 300,
    borderRadius: 9,
    borderWidth: 1, // Ancho del borde
    borderColor: 'black', // Color del borde
    backgroundColor: '#D9D9D9', // Fondo blanco
    padding: 10, // Espacio interno para los elementos
    elevation: 3,
  },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 10, // Espacio entre elementos
  },
  infoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  image: {
    width: 40,
    height: 50,
    resizeMode: 'contain',
    marginRight: 10,
  },
  text: {
    fontFamily: 'Righteous',
    fontSize: 16,
    color: 'black',
  },
  check: {
    width: 100,
    height: 25,
    resizeMode: 'contain',
  },
  checked: {
    tintColor: '#6B3ABB', // Color del chequesito cuando está seleccionado
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