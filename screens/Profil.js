import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { useLayoutEffect } from 'react';

export default function Profil({ route, navigation }) {
  const { nom } = route.params || {};

  // Exemple: changer le titre avec le nom reçu
  useLayoutEffect(() => {
    navigation.setOptions({ title: `Profil de ${nom || '...'}` });
  }, [navigation, nom]); // Personnalisation dynamique du header [web:20][web:140]

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Profil de {nom}</Text>
      <Text style={styles.subtitle}>Ceci est votre page de profil.</Text>

      <Button title="Retour" onPress={() => navigation.goBack()} />

      <View style={{ height: 12 }} />

      <Button title="Retour à l'accueil" onPress={() => navigation.popToTop()} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 15 },
  subtitle: { fontSize: 16, color: '#555', marginBottom: 20 },
});
