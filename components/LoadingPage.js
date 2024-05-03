import React from 'react';
import { View, ActivityIndicator, StyleSheet, Image } from 'react-native';

const LoadingPage = () => {
  return (
    <View style={styles.container}>
      <Image
        source={require('../assets/images/splash/splash-screen.png')}
        style={styles.errorImage}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default LoadingPage;