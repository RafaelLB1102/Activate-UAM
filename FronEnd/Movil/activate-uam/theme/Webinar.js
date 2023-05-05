import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  containerHome: {
    flex: 10,
    padding: 10
  },
  title: {
    marginTop: 25,
    marginBottom: 35,
    fontSize: 28,
    fontWeight: 700,
    textAlign: "center"
  },
  containerEventCard: {
    flex: 1,
    flexDirection: "column",
    gap: 25,
    paddingHorizontal: 10
  },
  loading: {
    padding: 80,
    height: 200
  }
});
