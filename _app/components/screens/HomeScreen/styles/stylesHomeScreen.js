import { StyleSheet } from "react-native";
export const stylesHomeScreen = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 20,
  },
  card: {
    marginBottom: 20,
    marginHorizontal: 10,
  },
  empty: {
    flex: 1,
    width: "100%",
  },
  content: {
    justifyContent: "center",
  },
  text: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginVertical: 30,

    width: "100%",
  },
  emptyList: { flex: 1, justifyContent: "center", alignItems: "center" },
  footer: { marginVertical: 30 },
});
