// Global imports
import { StyleSheet, Text, View } from 'react-native';

// Local imports
import Button from './Button';
import { Borders, Colors, Typography } from '../../constants/styles';

export type ErrorOverlayProps = {
  message: string;
  onConfirm?: () => void;
};

const ErrorOverlay = ({ message, onConfirm }: ErrorOverlayProps) => {
  return (
    <View style={styles.container}>
      <Text style={[styles.text, styles.title]}>An error occurred</Text>
      <Text style={styles.text}>{message}</Text>
      {onConfirm && 
        <Button onPress={onConfirm}>Go back</Button>
      }
    </View>
  );
};

export default ErrorOverlay;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    margin: '10%',
    padding: 24,
    backgroundColor: Colors.light,
    borderRadius: Borders.radiusDefault,
    borderWidth: Borders.widthDefault,
    borderColor: Colors.alert,
  },
  text: {
    textAlign: 'center',
    color: Colors.alert,
    fontWeight: '600',
    marginBottom: 8,
  },
  title: {
    fontSize: Typography.titleSize,
    fontWeight: 'bold',
  }
});
