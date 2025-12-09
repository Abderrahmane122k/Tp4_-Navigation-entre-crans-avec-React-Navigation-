import { Button, StyleSheet, Text, View } from 'react-native';

export default function Accueil({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bienvenue sur l'écran d'accueil</Text>
      <Text style={styles.subtitle}>
        Appuie sur le bouton pour aller au profil.
      </Text>
     <Button title="Aller aux détails" onPress={() => navigation.navigate('Détails')} />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fffbe7',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    marginBottom: 20,
  },
});
