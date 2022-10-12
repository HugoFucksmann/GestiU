import React, { useEffect } from "react";
import { View, Text, Image } from "react-native";
import { Button, withTheme } from "react-native-paper";
import { ActivityIndicator } from "react-native-paper";
import { usePostAuthMutation } from "../../redux/services/authService";
import logo from "../../assets/logo/logo.png";
import { loginData } from "./loginData";

const WelcomeScreen = (props) => {
  const { theme } = props;
  const styles = styless(theme);
  const [postAuth, { isLoading, error, data }] = usePostAuthMutation();

  console.log("ERRR ", error);
  console.log("data ", data);

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "space-between",
        alignItems: "center",
        textAlign: "center",
        background: theme.colors.login.bg,
      }}
    >
      <View>
        <Image source={logo} style={styles.imgLogo} />
      </View>

      <View style={{ width: "80%" }}>
        <Button
          icon="facebook"
          mode="contained"
          onPress={() => console.log("Pressed")}
          style={styles.btnFb}
        >
          Continuar con Facebook
        </Button>
        <Button
          disabled={isLoading}
          loading={
            isLoading && <ActivityIndicator animating={true} color={"red"} />
          }
          textColor="#000"
          style={{
            width: "100%",
            background: "#fff",
            padding: 6,
            borderRadius: 12,
            marginBottom: theme.margins.bottom,
          }}
          mode="contained"
          onPress={() => postAuth({ username: "admin", password: "admin" })}
        >
          registrate con mail y contraseña
        </Button>
        <Text style={{ color: "#fff" }}>¿Ya tienes cuenta? inicia sesion</Text>
      </View>
      <View style={{ marginBottom: 60 }}>
        <Text
          style={{
            marginBottom: theme.margins.bottom,
            color: "#fff",
            marginBottom: 12,
          }}
        >
          {loginData.brand.intro}
        </Text>
        <Text style={styles.brandName}>{loginData.brand.name}</Text>
      </View>
    </View>
  );
};

const styless = (theme) => ({
  imgLogo: { heigh: 100, width: 60 },
  btnFb: {
    background: theme.colors.login.btnFb,
    width: "100%",
    borderRadius: 12,
    padding: 6,
    marginBottom: theme.margins.bottom,
  },
  brandName: { fontWeight: "bold", color: "#fff" },
});

export default withTheme(WelcomeScreen);
