import React, { useEffect } from "react";
import { View, Text, Image } from "react-native";
import { Button, withTheme } from "react-native-paper";
import { ActivityIndicator } from "react-native-paper";
import { usePostAuthMutation } from "../../redux/services/authService";
import logo from "../../assets/logo/logo.png";
import { loginData } from "./loginData";

const LoginScreen = (props) => {
  const { theme } = props;
  const styles = styless(theme);
  const [postAuth, { isLoading, error, data }] = usePostAuthMutation();

  return (
    <View style={styles.viewLogin}>
      <View style={{ width: "80%" }}>
        {/*  <Button
          icon="facebook"
          mode="contained"
          onPress={() => console.log("Pressed")}
          style={styles.btnFb}
        >
          Continuar con Facebook
        </Button> */}
        <Button
          disabled={isLoading}
          loading={
            isLoading && <ActivityIndicator animating={true} color={"red"} />
          }
          textColor="#000"
          style={styles.btnLogin}
          mode="contained"
          onPress={() => postAuth({ username: "admin", password: "admin" })}
        >
          Iniciar sesion
        </Button>
        <Text style={{ color: "#fff" }}>¿Ya tienes cuenta? inicia sesion</Text>
      </View>
      <View style={{ marginBottom: 60 }}>
        <Text style={styles.brandIntro}>{loginData.brand.intro}</Text>
        <Text style={styles.brandName}>{loginData.brand.name}</Text>
      </View>
    </View>
  );
};

const styless = (theme) => ({
  viewLogin: {
    flex: 1,
    justifyContent: "space-between",
    alignItems: "center",
    textAlign: "center",
    background: theme.colors.login.bg,
  },
  btnFb: {
    background: theme.colors.login.btnFb,
    width: "100%",
    borderRadius: 12,
    padding: 6,
    marginBottom: theme.margins.bottom,
  },
  btnLogin: {
    width: "100%",
    background: "#fff",
    padding: 6,
    borderRadius: 12,
    marginBottom: theme.margins.bottom,
  },
  brandIntro: {
    marginBottom: theme.margins.bottom,
    color: "#fff",
    marginBottom: 12,
  },
  brandName: { fontWeight: "bold", color: "#fff" },
});

export default withTheme(LoginScreen);

/* background: #3A5795;
background: ;
background: -webkit-gradient(linear, left top, left bottom, color-stop(0%, #3A5795), color-stop(100%, #2B4886));
background: -webkit-linear-gradient(top, #3A5795 0%, #2B4886 100%);
background: -moz-linear-gradient(top, #3A5795 0%, #2B4886 100%);
background: -o-linear-gradient(top, #3A5795 0%, #2B4886 100%);
background: -ms-linear-gradient(top, #3A5795 0%, #2B4886 100%);
filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#3A5795', endColorstr='#2B4886', GradientType=0);
border: 1px solid #1C3977;
box-shadow: inset 0 1px 0 #4966A4;
-webkit-box-shadow: inset 0 1px 0 #4966A4;
-moz-box-shadow: inset 0 1px 0 #4966A4; */
