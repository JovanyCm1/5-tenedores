import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  header: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    backgroundColor: "white",
    zIndex: 1,
    paddingHorizontal: 20,
    paddingTop: 40,
  },
  weatherCard: {
    backgroundColor: "#F0F4F8",
    borderRadius: 10,
    padding: 20,
    alignItems: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
  },
  subtitle: {
    fontSize: 16,
    color: "#555",
  },
  image: {
    width: 100,
    height: 100,
    marginVertical: 10,
  },
  weatherInfo: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
  },
  weatherText: {
    fontSize: 18,
    color: "#333",
  },
  devicesContainer: {
    paddingHorizontal: 20,
  },
  deviceCard: {
    backgroundColor: "#FFF",
    borderRadius: 10,
    padding: 20,
    marginBottom: 20,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 0 },
    elevation: 5,
    flexDirection: "row",
  },
  deviceImage: {
    width: 60,
    height: 60,
    marginBottom: 10,
  },
  deviceInfo: {
    marginLeft: 20,
    flex: 1,
  },
  devicesTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#1A5D4c",
    marginBottom: 10,
  },
  deviceLocation: {
    fontSize: 14,
    color: "#555",
    marginBottom: 5,
  },
  deviceVariety: {
    fontSize: 14,
    color: "#777",
    marginBottom: 5,
  },
  deviceDate: {
    fontSize: 12,
    color: "#AAA",
  },
});
