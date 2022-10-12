import { combineReducers, configureStore } from "@reduxjs/toolkit";

import { persistReducer, persistStore } from "redux-persist";
import AsyncStorage from "@react-native-async-storage/async-storage";
import authSlice from "./reducers/authSlice";
import { authMiddleware } from "./middleware/authMiddleware";
import { authService } from "./services/authService";
import { userService } from "./services/userService";
import { saleService } from "./services/saleService";
import { verificationService } from "./services/verificationService";
import { taxPayerService } from "./services/taxPayerService";
import { storeService } from "./services/storeService";
import { stockTypeService } from "./services/stockTypeService";
import { saleTeamService } from "./services/saleTeamService";
import { recoveryPasswordService } from "./services/recoveryPasswordService";
import { providerService } from "./services/providerService";
import { productionbatchService } from "./services/productionbatchService";
import { productService } from "./services/productService";
import { priceService } from "./services/priceService";
import { itemService } from "./services/itemService";
import { comboService } from "./services/comboService";
import { clienteService } from "./services/clienteService";
import { categoryService } from "./services/categoryService";
import { cashRegisterService } from "./services/cashRegisterService";

const reducers = combineReducers({
  auth: authSlice,
  [authService.reducerPath]: authService.reducer,
  [userService.reducerPath]: userService.reducer,
  [saleService.reducerPath]: saleService.reducer,
  [verificationService.reducerPath]: verificationService.reducer,
  [taxPayerService.reducerPath]: taxPayerService.reducer,
  [storeService.reducerPath]: storeService.reducer,
  [stockTypeService.reducerPath]: stockTypeService.reducer,
  [saleTeamService.reducerPath]: saleTeamService.reducer,
  [recoveryPasswordService.reducerPath]: recoveryPasswordService.reducer,
  [providerService.reducerPath]: providerService.reducer,
  [productionbatchService.reducerPath]: productionbatchService.reducer,
  [productService.reducerPath]: productService.reducer,
  [priceService.reducerPath]: priceService.reducer,
  [itemService.reducerPath]: itemService.reducer,
  [comboService.reducerPath]: comboService.reducer,
  [clienteService.reducerPath]: clienteService.reducer,
  [categoryService.reducerPath]: categoryService.reducer,
  [cashRegisterService.reducerPath]: cashRegisterService.reducer,
});

const middlewares = [
  authMiddleware,
  authService.middleware,
  userService.middleware,
  saleService.middleware,
  verificationService.middleware,
  taxPayerService.middleware,
  storeService.middleware,
  stockTypeService.middleware,
  saleTeamService.middleware,
  recoveryPasswordService.middleware,
  providerService.middleware,
  productionbatchService.middleware,
  productService.middleware,
  priceService.middleware,
  itemService.middleware,
  comboService.middleware,
  clienteService.middleware,
  categoryService.middleware,
  cashRegisterService.middleware,
];

const persistConfig = {
  key: "root",
  version: 1,
  storage: AsyncStorage,
};

const persistedReducer = persistReducer(persistConfig, reducers);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: middlewares,
      serializableCheck: false,
    }),
});

export const persistor = persistStore(store);
