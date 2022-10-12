import { View, Image, Text } from "react-native";
import { styles } from "./styles";

import tienda from "../../assets/resumeScreen/tienda.png";

const Content = (props) => {
  return (
    <View style={styles.content}>
      <Text style={styles.textVentas}>Ventas Totales</Text>
      <View style={styles.cardVentas}>
        <Text style={styles.txtTotal}>$ {props.total}</Text>
        <Image source={tienda} style={styles.imgCard} />
      </View>
    </View>
  );
};

Content.defaultProps = {
  total: "00,00",
};

export default Content;
