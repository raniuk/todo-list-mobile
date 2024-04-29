import { StyleSheet } from "react-native";

import { theme } from "../../theme";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 8,
    backgroundColor: theme.colors.gray500,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 12,
    paddingVertical: 20,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: theme.colors.gray400,
    marginBottom: 8,
  },
  text: {
    flex: 1,
  },
  textDone: {
    fontSize: theme.fontSize.md,
    color: theme.colors.gray300,
    textDecorationLine: "line-through",
  },
  textCreated: {
    fontSize: theme.fontSize.md,
    color: theme.colors.gray100,
    textDecorationLine: "none",
  },
});
