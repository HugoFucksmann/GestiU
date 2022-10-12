import { Text, TouchableOpacity, View } from "react-native";

import { menuBtns } from "./data"; // array representativo de botones del menu
import { styles } from "./styles";

const MenuScreen = ({ navigation }) => {
  return (
    <View style={styles.menuContent}>
      {menuBtns.map((obj) => (
        <TouchableOpacity
          key={obj.title}
          style={styles.btnMenu}
          onPress={() => navigation.navigate(obj.link)}
        >
          {obj.img}
          <Text>{obj.title}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default MenuScreen;
