// Components
import App from "./App";
import React from "react";

// Modules
import { PersistGate } from "redux-persist/integration/react";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { BrowserRouter } from "react-router-dom";
import ReactDOM from "react-dom/client";
import appStorage from "./appStorage.js";
import { Provider } from "react-redux";
import { createStore } from "redux";

// Css

const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, appStorage);
let appStore = createStore(persistedReducer);
let persistor = persistStore(appStore);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={appStore}>
    <PersistGate loading={null} persistor={persistor}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </PersistGate>
  </Provider>
);
