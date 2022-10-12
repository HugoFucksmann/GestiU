import { View } from "react-native";
import { ActivityIndicator } from "react-native-paper";

const LoadingScreen = () => {
  return (
    <View style={styles.centerView}>
      <ActivityIndicator size="large" animating={true} color={"blue"} />
    </View>
  );
};

const styles = {
  centerView: { flex: 1, alignItems: "center", justifyContent: "center" },
};

export default LoadingScreen;
