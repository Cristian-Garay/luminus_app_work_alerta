/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import 'react-native-gesture-handler';
import React, { useEffect } from 'react';

import { AuthProvider } from './src/components/context/AuthContext';


import BootSplash from "react-native-bootsplash";
// import { NavigationContainer } from '@react-navigation/native';

// import { LoginNavigation } from './components/navigation/loginNavigation';

import { Navigation } from './src/components/navigation/navigation';

function App(): React.JSX.Element {

  useEffect(() => {
    const init = async () => {
      // …do multiple sync or async tasks
    };

    init().finally(async () => {
      await BootSplash.hide({ fade: true });
      console.log("BootSplash has been hidden successfully");
    });
  }, []);


  return (
    <AuthProvider>
      <Navigation />
    </AuthProvider>
  );
}

export default App;
