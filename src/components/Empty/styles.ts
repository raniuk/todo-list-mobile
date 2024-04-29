import { StyleSheet } from "react-native";

import { theme } from "../../theme";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    width: "100%",
    paddingVertical: 48,
    paddingHorizontal: 20,
    borderTopColor: theme.colors.gray400,
    borderEndColor: theme.colors.gray600,
    borderStartColor: theme.colors.gray600,
    borderBottomColor: theme.colors.gray600,
    borderWidth: 1,
    fontSize: 14,
  },

  textBold: {
    color: theme.colors.gray300,
    fontFamily: theme.fontFamily.bold,
    marginTop: 16,
  },

  textRegular: {
    color: theme.colors.gray300,
    fontFamily: theme.fontFamily.regular,
  },
});
