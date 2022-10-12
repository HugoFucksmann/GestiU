import React from "react";
import { Provider as PaperProvider } from "react-native-paper";
import { Provider as ReduxProvider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

import { store, persistor } from "./redux/store";
import Navigation from "./routes/navigation";
import LoadingScreen from "./shared/loadingScreen";
import { appTheme } from "./theme/appTheme";

function App() {
  return (
    <ReduxProvider store={store}>
      <PersistGate loading={<LoadingScreen />} persistor={persistor}>
        <PaperProvider theme={appTheme}>
          <Navigation />
        </PaperProvider>
      </PersistGate>
    </ReduxProvider>
  );
}

export default App;
