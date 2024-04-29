import { StyleSheet } from "react-native";
import { theme } from "src/theme";

export const styles = StyleSheet.create({
  button: {
    height: 52,
    width: 52,
    borderRadius: 6,
    backgroundColor: theme.colors.blueDark,
    alignItems: "center",
    justifyContent: "center",
  },

  buttonVariant: {
    height: 32,
    width: 32,
    borderRadius: 4,
    alignItems: "center",
    justifyContent: "center",
  },
});
