/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import 'react-native-gesture-handler';
import React from 'react';

import { AuthProvider } from './src/components/context/AuthContext';

// import { NavigationContainer } from '@react-navigation/native';

// import { LoginNavigation } from './components/navigation/loginNavigation';

import { Navigation } from './src/components/navigation/navigation';

function App(): React.JSX.Element {
  return (
    <AuthProvider>
      <Navigation />
    </AuthProvider>
  );
}

export default App;
