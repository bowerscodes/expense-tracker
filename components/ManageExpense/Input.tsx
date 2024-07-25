// Global imports
import { StyleSheet, Text, TextInput, TextInputProps, TextStyle, View, ViewStyle } from 'react-native';

// Local imports
import GlobalStyles, { Borders, Colors, Typography } from '../../constants/styles';

interface InputProps {
  label: string;
  style?: TextStyle;
  textInputConfig?: TextInputProps;
};

const Input = ({ label, style, textInputConfig }: InputProps) => {

  const inputStyles: (ViewStyle | TextStyle)[] = [styles.input];

  if (textInputConfig && textInputConfig.multiline) {
    inputStyles.push(styles.inputMultiLine);
  };

  return (
    <View style={[styles.inputContainer, style]}>
      <Text style={styles.label}>{label}</Text>
      <TextInput 
        style={StyleSheet.flatten(inputStyles)} 
        {...textInputConfig} 
      />
    </View>
  )
};

export default Input;

const styles = StyleSheet.create({
  inputContainer: {
    marginHorizontal: 4,
    marginVertical: 8,
  },
  label: {
    fontSize: Typography.bodySize,
    fontWeight: 'bold',
    color: Colors.dark,
    marginBottom: 4,
  },
  input: {
    backgroundColor: Colors.primary,
    color: Colors.light,
    padding: 6,
    borderRadius: Borders.radiusInput,
    fontSize: Typography.headerSize,
    fontWeight: '500',
    borderColor: Colors.dark,
    borderWidth: Borders.widthInput,
  },
  inputMultiLine: {
    minHeight: 100,
    textAlignVertical: 'top',
  }
});
