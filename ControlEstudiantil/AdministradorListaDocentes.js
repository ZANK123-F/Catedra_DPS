import React, { useState } from 'react';
import { StatusBar, Image, StyleSheet, Text, View, TouchableOpacity } from 'react-native';

const Header = () => {
  return (
    <View style={styles.header}>
      <Text style={styles.adminText}>Admin</Text>
       <Image source={require('./assets/login.png')} style={styles.loginImage} />
    </View>
  );
};

const Footer = () => {
  return (
    <View style={styles.footer}>
      <TouchableOpacity onPress={() => console.log("Hacer clic en hogar")}>
        <Text style={styles.footerText}>Hogar</Text>

      </TouchableOpacity>
      <TouchableOpacity onPress={() => console.log("Hacer clic en usuario")}>
        <Text style={styles.footerText}>Usuario</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => console.log("Hacer clic en notas")}>
        <Text style={styles.footerText}>Notas</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => console.log("Hacer clic en centro de llamadas")}>
        <Text style={styles.footerText}>Centro de Llamadas</Text>
      </TouchableOpacity>
    </View>
  );
};

export default function App() {
  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.body}>
        <Text style={styles.bodyTitle}>Docente</Text>
        <View style={styles.table}>
          <View style={styles.tableHeader}>
            <Text style={styles.tableHeaderText}>Nombre</Text>
            <Text style={styles.tableHeaderText}>Código Docente</Text>
            <Text style={styles.tableHeaderText}>Ver</Text>
          </View>
          <View style={styles.tableRow}>
            <Text style={styles.tableCell}>Nombre 1</Text>
            <Text style={styles.tableCell}>1234</Text>
            <TouchableOpacity onPress={() => console.log("Ver docente")} style={styles.tableButton}>
              <Text style={styles.buttonText}>Ver</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.tableRow}>
            <Text style={styles.tableCell}>Nombre 2</Text>
            <Text style={styles.tableCell}>5678</Text>
            <TouchableOpacity onPress={() => console.log("Ver docente")} style={styles.tableButton}>
              <Text style={styles.buttonText}>Ver</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.tableRow}>
            <Text style={styles.tableCell}>Nombre 3</Text>
            <Text style={styles.tableCell}>9012</Text>
            <TouchableOpacity onPress={() => console.log("Ver docente")} style={styles.tableButton}>
              <Text style={styles.buttonText}>Ver</Text>
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
    width: 50,
    height: 50,
    resizeMode: 'contain',
  },
  body: {
    flex: 1,
    alignItems: 'center',
    marginTop: 20,
    paddingHorizontal: 20,
  },
  bodyTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
     marginBottom: 200,
  },
  table: {

    width: '100%',
    borderWidth: 1,
    borderColor: '#000',
    borderRadius: 5,
    marginBottom: 20,
  },
  tableHeader: {

    flexDirection: 'row',
    backgroundColor: '#6B3ABB',
    paddingVertical: 10,
    paddingHorizontal: 5,
    borderBottomWidth: 1,
    borderBottomColor: '#000',
  },
  tableHeaderText: {
    marginBottom: 30,
    flex: 1,
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  tableRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 10,
    paddingHorizontal: 5,
    borderBottomWidth: 1,
    borderBottomColor: '#000',
  },
  tableCell: {
    flex: 1,
    textAlign: 'center',
  },
  tableButton: {
    backgroundColor: '#6B3ABB',
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  footer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderTopWidth: 1,
    borderTopColor: '#000',
  },
  footerText: {
    color: '#6B3ABB',
    fontWeight: 'bold',
  },
 }
);
