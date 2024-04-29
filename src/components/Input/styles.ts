import { StyleSheet } from "react-native";
import { theme } from "src/theme";

export const styles = StyleSheet.create({
  input: {
    flex: 1,
    height: 54,
    backgroundColor: theme.colors.gray500,
    borderRadius: 8,
    color: theme.colors.gray100,
    fontSize: theme.fontSize.md,
    fontFamily: theme.fontFamily.regular,
    borderColor: theme.colors.gray700,
    borderWidth: 1,
    padding: 16,
  },

  inputBorder: {
    borderColor: theme.colors.purple,
  },
});
