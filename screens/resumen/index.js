import { Button, View } from "react-native";
import { withTheme } from "react-native-paper";
import FetchComponent from "../../shared/fetchComponent";
import Banner from "./bannerResumen";
import Content from "./contentResumen";
import { useGetStoreQuery } from "../../redux/services/storeService";

const ResumenScreen = (props) => {
  const { theme } = props;
  const { isLoading, error, data } = useGetStoreQuery();

  return (
    <FetchComponent isLoading={isLoading} error={error}>
      <View style={{ flex: 1 }}>
        <Banner />
        <Content />
      </View>
    </FetchComponent>
  );
};

export default withTheme(ResumenScreen);
