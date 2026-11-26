import React, {useEffect} from 'react';

import AppNavigator from './src/navigation/AppNavigator';
import InterstitialAdManager from './src/components/InterstitialAdManager';
import initializeAds from './src/utils/adInitialization';

const App = () => {
  useEffect(() => {
    initializeAds()
      .then(() => {
        InterstitialAdManager.initialize();
      })
      .catch(error => {
        console.error('AdMob could not be initialized:', error);
      });

    return () => {
      InterstitialAdManager.dispose();
    };
  }, []);

  return <AppNavigator />;
};

export default App;