import React, { useState, useEffect } from 'react';

import {
  View,
  Text,
  StyleSheet,
  Image,
  FlatList,
  Button,
  Modal,
  TextInput,
} from 'react-native';

const api_url = 'http://192.168.0.2:8000/api/profile';

const ProfileScreen = () => {
  const [data, setData] = useState(null);
  const [isEditProfileModalVisible, setEditProfileModalVisible] = useState(false);
  const [editedName, setEditedName] = useState('');
  const [editedSummary, setEditedSummary] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(api_url);
      const profileData = await response.json();
      setData(profileData);
    };

    fetchData();
  }, []);

  const toggleEditProfileModal = () => {
    setEditProfileModalVisible(!isEditProfileModalVisible);
  };

  const handleSaveProfileChanges = async () => {
    try {
      const response = await fetch(api_url, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: editedName,
          summary: editedSummary,
        }),
      });

      if (response.status === 200) {
        // Actualiza los datos locales
        setData({
          ...data,
          name: editedName,
          summary: editedSummary,
        });

        // Cierra el modal de edición
        toggleEditProfileModal();
      } else {
        console.error('Error al actualizar el perfil');
      }
    } catch (error) {
      console.error('Error al actualizar el perfil:', error);
    }
  };

  if (!data) {
    return <Text>Cargando perfil...</Text>;
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Perfil personal</Text>
      
      {isEditProfileModalVisible ? (
        <Modal isVisible={true}>
          <View style={styles.modalContainer}>
            <Text style={styles.modalTitle}>Editar Perfil</Text>
            <TextInput
              placeholder="Nuevo nombre"
              value={editedName}
              onChangeText={setEditedName}
            />
            <TextInput
              placeholder="Nueva descripción"
              value={editedSummary}
              onChangeText={setEditedSummary}
            />
            <Button title="Guardar Cambios" onPress={handleSaveProfileChanges} />
            <Button title="Cancelar" onPress={toggleEditProfileModal} />
          </View>
        </Modal>
      ) : (
        <>
          <Text style={styles.subtitle}>
            Hola, mi nombre es {data.name} {data.lastname}.
          </Text>
          <Image style={styles.image} source={{ uri: 'https://via.placeholder.com/150' }} />
          <Text>{data.summary}</Text>
          <Text>Vivo en {data.city}, {data.country}.</Text>
          <Text>{data.email}</Text>
          <Button title="Editar Perfil" onPress={toggleEditProfileModal} />
        </>
      )}

      <View style={styles.tableContainer}>
        <Text style={styles.tableTitle}>Hobbies</Text>
        <FlatList
          data={data.hobbies}
          keyExtractor={item => item.name}
          renderItem={({ item }) => (
            <View style={styles.tableRow}>
              <Text style={styles.tableCell}>{item.name}</Text>
              <Text style={styles.tableCell}>{item.description}</Text>
            </View>
          )}
        />
      </View>

      <View style={styles.tableContainer}>
        <Text style={styles.tableTitle}>Herramientas Tecnológicas</Text>
        <FlatList
          data={data.frameworks}
          keyExtractor={item => item.name}
          renderItem={({ item }) => (
            <View style={styles.tableRow}>
              <Text style={styles.tableCell}>{item.name}</Text>
              <Text style={styles.tableCell}>Nivel: {item.level}, Año: {item.year}</Text>
            </View>
          )}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  modalContainer: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 10,
    marginTop: 20,
  },
  subtitle: {
    fontSize: 18,
    marginBottom: 10,
  },
  image: {
    width: 150,
    height: 150,
    borderRadius: 75,
    alignSelf: 'center',
    margin: 20,
  },
  tableContainer: {
    marginVertical: 20,
  },
  tableTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  tableRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    borderBottomColor: 'lightgray',
    paddingVertical: 3,
  },
  tableCell: {
    flex: 1,
  },
});

export default ProfileScreen;
