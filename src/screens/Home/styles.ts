import { StyleSheet } from "react-native";
import { theme } from "src/theme";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.gray600,
  },

  content: {
    flex: 1,
    marginHorizontal: 24,
  },

  form: {
    top: -54 / 2,
    gap: 4,
    flexDirection: "row",
  },

  tasksContainer: {
    flex: 1,
    marginTop: 20,
  },

  tasksCreated: {
    color: theme.colors.blue,
    fontSize: theme.fontSize.md,
    fontFamily: theme.fontFamily.bold,
  },

  tasksDone: {
    color: theme.colors.purple,
    fontSize: theme.fontSize.md,
    fontFamily: theme.fontFamily.bold,
  },

  info: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 20,
  },

  row: {
    flexDirection: "row",
    alignItems: "center",
  },

  counterContainer: {
    backgroundColor: theme.colors.gray400,
    width: 25,
    height: 19,
    borderRadius: 999,
    alignItems: "center",
    justifyContent: "center",
    marginLeft: 8,
  },

  counterText: {
    color: theme.colors.gray200,
    fontSize: theme.fontSize.sm,
    fontFamily: theme.fontFamily.bold,
  },
});
