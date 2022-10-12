import AsyncStorage from "@react-native-async-storage/async-storage";

export const authMiddleware = (store) => (next) => async (action) => {
  if (action && action.payload && action.payload.token) {
    await AsyncStorage.setItem("token", `Bearer ${action.payload.token}`);
  }

  return next(action);
};
