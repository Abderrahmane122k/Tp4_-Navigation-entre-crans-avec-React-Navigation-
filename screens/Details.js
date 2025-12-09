import { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

export default function Details({ navigation }) {
  const [nom, setNom] = useState('Sarah');

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Écran Détails</Text>
      <Text style={styles.subtitle}>Saisis un nom à envoyer vers Profil :</Text>

      <TextInput
        value={nom}
        onChangeText={setNom}
        placeholder="Nom"
        style={styles.input}
      />

      <Button
        title="Aller au profil"
        onPress={() => navigation.navigate('Profil', { nom })}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  title: { fontSize: 22, fontWeight: 'bold', marginBottom: 10 },
  subtitle: { fontSize: 16, marginBottom: 10 },
  input: {
    width: 220, padding: 10, borderWidth: 1, borderColor: '#ccc',
    borderRadius: 6, marginBottom: 20, backgroundColor: '#fff'
  },
});
