/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useEffect } from 'react';
import { AuthProvider } from './src/components/context/AuthContext';
import BootSplash from "react-native-bootsplash";
import { Navigation } from './src/components/navigation/navigation';
import { AppLoader } from './src/components/general/AppLoader';
import { Toast } from 'react-native-toast-message/lib/src/Toast';

// function App(): React.JSX.Element {
//   useEffect(() => {
//     const init = async () => {
//       // …do multiple sync or async tasks
//     };

//     init().finally(async () => {
//       await BootSplash.hide({ fade: true });
//       // console.log("BootSplash has been hidden successfully");
//     });
//   }, []);


//   return (
//     <AuthProvider>
//       <AppLoader />
//       <Navigation />
//       <Toast />
//     </AuthProvider>
//   );
// }

// export default App;


const App = () => {
  useEffect(() => {
    const init = async () => {
      // …do multiple sync or async tasks
    };

    init().finally(async () => {
      await BootSplash.hide({ fade: true });
      // console.log("BootSplash has been hidden successfully");
    });
  }, []);

  return (
    <AuthProvider>
      <AppLoader />
      <Navigation />
      <Toast />
    </AuthProvider>
  );
};

export default App;
