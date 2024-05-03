    import React from 'react';
    import { Image, StyleSheet, Text, View, TouchableOpacity } from 'react-native';

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
            <TouchableOpacity style={styles.button}>
              <Image source={require('./assets/flecha.png')} style={styles.icon} />
              <Text style={styles.buttonText}>Seleccione materias</Text>
            </TouchableOpacity>
            <View style={styles.noteContainer}>
              <Text style={styles.noteText}>Nota final</Text>
            </View>
            {/* Rectángulos para notas 1, 2, 3, 4, 5 */}
            <View style={[styles.noteContainer, { backgroundColor: '#C5C5C5' }]}>
              <Text style={styles.noteText}>Nota 1</Text>
            </View>
            <View style={[styles.noteContainer, { backgroundColor: '#C5C5C5' }]}>
              <Text style={styles.noteText}>Nota 2</Text>
            </View>
            <View style={[styles.noteContainer, { backgroundColor: '#C5C5C5' }]}>
              <Text style={styles.noteText}>Nota 3</Text>
            </View>
            <View style={[styles.noteContainer, { backgroundColor: '#C5C5C5' }]}>
              <Text style={styles.noteText}>Nota 4</Text>
            </View>
            <View style={[styles.noteContainer, { backgroundColor: '#C5C5C5' }]}>
              <Text style={styles.noteText}>Nota 5</Text>
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
        alignItems: 'center',
        marginTop: 50,
      },
      button: {
        backgroundColor: '#A167FF',
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderRadius: 20,
        flexDirection: 'row',
        alignItems: 'center',
      },
      buttonText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
        marginLeft: 10,
      },
      icon: {
        width: 20,
        height: 20,
        resizeMode: 'contain',
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
      noteContainer: {
        backgroundColor: '#C5C5C5',
        borderRadius: 19,
        paddingVertical: 18,
        paddingHorizontal: 10,
        width: '100%',
        alignSelf: 'flex-start',
        marginTop: 20,
      },
      noteText: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#000000',
      },
    });

    export default App;
