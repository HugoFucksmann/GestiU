import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoadingScreen from "../shared/loadingScreen";
import { NavigationContainer } from "@react-navigation/native";

import { publicRoutes, privateRoutes } from "./routesData";
import { useIsAuthQuery } from "../redux/services/authService";
import { useSelector } from "react-redux";

const Stack = createNativeStackNavigator();

const Navigation = () => {
  const { loading, error, data } = useIsAuthQuery();
  const { token } = useSelector((state) => state.auth);
  console.log("token ", token);
  return loading ? (
    <LoadingScreen />
  ) : (
    <NavigationContainer>
      <Stack.Navigator>
        {!data && !token ? (
          <Stack.Group>
            {publicRoutes.map((obj, i) => (
              <Stack.Screen key={"route" + i} {...obj} />
            ))}
          </Stack.Group>
        ) : (
          <Stack.Group>
            {privateRoutes.map((obj, i) => (
              <Stack.Screen key={"route" + i} {...obj} />
            ))}
          </Stack.Group>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
