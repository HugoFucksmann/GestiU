import { Text, View } from "react-native";

const FetchComponent = (props) => {
  const { error, isLoading } = props;

  if (isLoading)
    return (
      <View style={styles.centerView}>
        <Text>loading...</Text>
      </View>
    );
  else if (error)
    return (
      <View style={styles.centerView}>
        <Text>Error !!!</Text>
      </View>
    );

  return props.children;
};

const styles = {
  centerView: { flex: 1, alignItems: "center", justifyContent: "center" },
};

export default FetchComponent;
