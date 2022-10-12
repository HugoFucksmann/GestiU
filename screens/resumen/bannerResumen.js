import { View, Image, Text } from "react-native";

import { styles } from "./styles";

import tienda from "../../assets/resumeScreen/tienda.png";

const Banner = (props) => {
  return (
    <View style={styles.banner}>
      <View style={styles.imgView}>
        <Image source={tienda} style={styles.image} />
      </View>
      <View style={styles.textView}>
        <Text style={styles.titleTienda}> {props.tiendaName} </Text>
      </View>
    </View>
  );
};

Banner.defaultProps = {
  tiendaName: "tienda",
};

export default Banner;
