import { Text } from "react-native";
import { Entypo } from "@expo/vector-icons";

// screens
import ResumenScreen from "../screens/resumen";
import MenuScreen from "../screens/menu";
import ConfiguracionScreen from "../screens/configuracion";
import StockScreen from "../screens/stock";
import AlertasScreen from "../screens/alertas";
import VentasScreen from "../screens/ventas";
import ClientesScreen from "../screens/balance";
import PedidosScreen from "../screens/pedidos";
import DeudasScreen from "../screens/deudas";
import BalanceScreen from "../screens/balance";
import PromocionesScreen from "../screens/promociones";
import LoginScreen from "../screens/login";

const headerOptions = ({ navigation }) => ({
  headerTitle: () => <Text>Logo</Text>,
  headerRight: () => (
    <Entypo
      name="menu"
      size={24}
      color="black"
      onPress={() => navigation.navigate("menu")}
    />
  ),
});

const menuHeaderOptions = {
  headerShadowVisible: false,
  headerStyle: {
    backgroundColor: "#f2f2f2",
  },
};

const loginHeader = {
  headerShown: false,
};

export const publicRoutes = [
  { name: "welcome", component: LoginScreen, options: loginHeader },
  { name: "login", component: LoginScreen, options: loginHeader },
  { name: "registro", component: LoginScreen, options: loginHeader },
  { name: "recuperarpass", component: LoginScreen, options: loginHeader },
];

export const privateRoutes = [
  { name: "resumen", component: ResumenScreen, options: headerOptions },
  { name: "menu", component: MenuScreen, options: menuHeaderOptions },

  { name: "stock", component: StockScreen, options: headerOptions },
  { name: "alertas", component: AlertasScreen, options: headerOptions },
  { name: "ventas", component: VentasScreen, options: headerOptions },
  { name: "balance", component: BalanceScreen, options: headerOptions },
  { name: "clientes", component: ClientesScreen, options: headerOptions },
  { name: "pedidos", component: PedidosScreen, options: headerOptions },
  { name: "deudas", component: DeudasScreen, options: headerOptions },
  { name: "promociones", component: PromocionesScreen, options: headerOptions },
  {
    name: "configuracion",
    component: ConfiguracionScreen,
    options: headerOptions,
  },
];
