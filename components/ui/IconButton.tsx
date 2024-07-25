// Global imports
import { Pressable, StyleSheet, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export interface IconButtonProps {
  icon: keyof typeof Ionicons.glyphMap;
  size?: number;
  color: string;
  onPress: () => void;
};

const IconButton = ({ 
  icon, 
  size = 24, 
  color, 
  onPress 
}: IconButtonProps) => {

  return (
    <Pressable 
      onPress={onPress}
      style={({ pressed }) => pressed && styles.pressed}
    >
      <View style={styles.buttonContainer}>
        <Ionicons name={icon} size={size} color={color} />
      </View>
    </Pressable>
  );
};

export default IconButton;

const styles = StyleSheet.create({
  buttonContainer: {
    borderRadius: 24,
    padding: 6,
    marginHorizontal: 8,
  },
  pressed: {
    opacity: 0.75,
  }
});