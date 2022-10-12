import { StyleSheet } from "react-native";
import { textSize } from "../../theme/textSize";

export const styles = StyleSheet.create({
  banner: {
    backgroundColor: "#fff",
    flex: 0.3,
    display: "flex",
    flexDirection: "row",
  },
  content: {
    flex: 0.7,
  },
  imgView: {
    width: "40%",
    alignItems: "center",
    justifyContent: "center",
  },
  image: { width: 140, height: 140 },
  textView: { width: "60%" },
  titleTienda: {
    marginLeft: 20,
    marginTop: 30,
    fontSize: textSize.medium,
    color: "grey",
    fontWeight: "bold",
  },
  textVentas: {
    fontSize: textSize.big,
    margin: 20,
    fontWeight: "bold",
  },
  cardVentas: {
    alignSelf: "center",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "90%",
    height: 120,
    padding: 20,
    backgroundColor: "#fff",
    borderRadius: 6,
    elevation: 3,
    shadowColor: "grey",
  },
  imgCard: {
    width: "30%",
    alignSelf: "center",
    height: undefined,
    aspectRatio: 1,
  },
  txtTotal: {
    fontSize: textSize.medium,
  },
});
