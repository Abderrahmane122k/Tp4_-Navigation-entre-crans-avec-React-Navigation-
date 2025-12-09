import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Accueil from './screens/Accueil';
import Details from './screens/Details';
import Profil from './screens/Profil';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Accueil"
        screenOptions={{
          headerStyle: { backgroundColor: '#007AFF' },
          headerTintColor: '#fff',
        }}
      >
        <Stack.Screen name="Accueil" component={Accueil} />
        <Stack.Screen name="Détails" component={Details} />
        <Stack.Screen
          name="Profil"
          component={Profil}
          options={{ title: 'Mon profil' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
