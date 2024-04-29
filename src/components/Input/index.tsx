import { TextInput, TextInputProps } from "react-native";
import { theme } from "src/theme";

import { styles } from "./styles";

type Props = TextInputProps & {
  value: string;
  inputRef: React.RefObject<TextInput>;
  onChangeText: (value: string) => void;
};

export function Input({ value, inputRef, onChangeText, ...rest }: Props) {
  return (
    <TextInput
      style={[
        styles.input,
        inputRef.current?.isFocused() && value ? styles.inputBorder : null,
      ]}
      placeholderTextColor={theme.colors.gray300}
      value={value}
      onChangeText={onChangeText}
      ref={inputRef}
      autoCorrect={false}
      returnKeyType="done"
      {...rest}
    />
  );
}
