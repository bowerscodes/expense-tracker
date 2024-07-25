// Global imports
import { ActivityIndicator, StyleSheet, View } from 'react-native';

// Local imports
import { Colors } from '../../constants/styles';

const LoadingOverlay = () => {
  return (
    <View style={styles.container}>
      <ActivityIndicator size='large' color={Colors.dark} />
    </View>
  );
};

export default LoadingOverlay;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 24,
    backgroundColor: Colors.light,
  }
});
