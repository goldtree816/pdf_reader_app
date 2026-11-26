import mobileAds from 'react-native-google-mobile-ads';

let initializationPromise: Promise<void> | null = null;

const initializeAds = () => {
  if (!initializationPromise) {
    initializationPromise = mobileAds()
      .initialize()
      .then(() => undefined)
      .catch(error => {
        initializationPromise = null;
        throw error;
      });
  }

  return initializationPromise;
};

export default initializeAds;
