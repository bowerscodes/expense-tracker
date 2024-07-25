// Global imports
import { Pressable, StyleSheet, Text, View } from 'react-native';

// Local imports
import { Borders, Colors } from '../../constants/styles';

interface ButtonProps {
  children: React.ReactNode;
  onPress: () => void;
  mode?: 'flat';
  style?: Object;
};

const Button = ({ children, onPress, mode, style }: ButtonProps) => {
  return (
    <View style={style}>
      <Pressable onPress={onPress} style={({ pressed }) => pressed && styles.pressed}>
        <View style={[styles.button, mode === 'flat' && styles.flat]}>
          <Text style={[styles.buttonText, mode === 'flat' && styles.flatText]}>
            {children}
          </Text>
        </View>
      </Pressable>
    </View>
  );
};

export default Button;

const styles = StyleSheet.create({
  button: {
    borderRadius: Borders.radiusButton,
    padding: 8,
    backgroundColor: Colors.dark,
  },
  flat: {
    backgroundColor: 'transparent',
    borderWidth: Borders.widthSmall,
    borderColor: Colors.dark,
    padding: 6
  },
  buttonText: {
    color: Colors.light,
    textAlign: 'center',
    fontWeight: '600',
  },
  flatText: {
    color: Colors.dark,
  },
  pressed: {
    opacity: 0.75,
    backgroundColor: Colors.primary,
    borderRadius: Borders.radiusButton,
  },
});
