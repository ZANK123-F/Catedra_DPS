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
      <TouchableOpacity onPress={() => console.log('Hogar button pressed')}>
        <Image source={require('./assets/hogar.png')} style={styles.footerIcon} />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => console.log('Usuario button pressed')}>
        <Image source={require('./assets/usuario.png')} style={styles.footerIcon} />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => console.log('Notas button pressed')}>
        <Image source={require('./assets/notas.png')} style={styles.footerIcon} />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => console.log('Centro de llamadas button pressed')}>
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
        <Text style={styles.bodyTitle}>Nombre de la materia</Text>
        <Image source={require('./assets/progra3.jpg')} style={styles.bodyImage} />
        {/* Texto "Desarrollo" arriba del cuadro de botones */}
        <Text style={styles.desarrolloText}>Desarrollo</Text>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.buttonBox}>
            <Text style={styles.buttonText}> Trimestre I</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonBox}>
            <Text style={styles.buttonText}>Trimestre II</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonBox}>
            <Text style={styles.buttonText}>Trimestre III</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonBox}>
            <Text style={styles.buttonText}>Trimestre IV</Text>
          </TouchableOpacity>
        </View>
        {/* Nuevo cuadro con estilos diferentes */}
        <View style={styles.bottomContainer}></View>
      </View>
      <Footer />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#B7ADC9', // Cambiado al color B7ADC9
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
    justifyContent: 'flex-start', // Alinear el contenido en la parte superior
    alignItems: 'center',
    marginTop: 50, // Mover el contenido hacia abajo
  },
  bodyTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  bodyImage: {
    width: 300,
    height: 180,
    marginBottom: 20,
  },
  // Estilo para el texto "Desarrollo"
  desarrolloText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  buttonContainer: {
    backgroundColor: '#C5C5C5',
    borderRadius: 5,
    paddingVertical: 5, // Ajusta el padding vertical para mover los botones hacia arriba
    paddingHorizontal: 15, // Aumenta el padding horizontal
    flexDirection: 'row', // Fila horizontal
    justifyContent: 'space-around', // Distribuir el espacio horizontalmente
    marginTop: 20, // Ajusta el margen superior para mover los botones hacia arriba
  },
  buttonBox: {
    backgroundColor: '#6B3ABB',
    paddingVertical: 5, // Reducir el padding vertical
    paddingHorizontal: 10, // Reducir el padding horizontal
    borderRadius: 5,
    marginHorizontal: 5, // Agregar margen horizontal
  },
  buttonText: {
    color: '#fff',
    fontSize: 12, // Reducir el tamaño de la fuente
  },
  // Estilos para el nuevo cuadro con estilos diferentes
  bottomContainer: {
    backgroundColor: '#C5C5C5', // Color blanco
    borderRadius: 5,
    height: 300, // Altura del cuadro
    width: '90%', // Ancho del cuadro
    marginTop: 20, // Espacio entre el cuadro de los botones y el nuevo cuadro
  },
  // Estilos para el footer
  footer: {
    backgroundColor: '#6B3ABB',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around', // Alinear los elementos equitativamente
    paddingHorizontal: 20,
    paddingVertical: 10,
    position: 'absolute', // Ajuste del posicionamiento absoluto
    bottom: 0, // Situar el footer en la parte inferior
    left: 0, // Alinear el footer a la izquierda
    right: 0, // Alinear el footer a la derecha
  },
  footerIcon: {
    width: 30,
    height: 30,
    resizeMode: 'contain',
    tintColor: '#FFFFFF', // Cambiado el color de las imágenes a blanco
  },
});