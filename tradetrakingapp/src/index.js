import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import {BrowserRouter} from 'react-router-dom'

import { PersistGate } from 'redux-persist/integration/react'

import {Provider} from 'react-redux';
import { persistStore, persistReducer } from 'redux-persist'
import {createStore} from 'redux';

import storage from 'redux-persist/lib/storage' 
import appStorage from './appStorage.js';



 
const persistConfig = {
    key: 'root',
    storage,
  }
   
  const persistedReducer = persistReducer(persistConfig, appStorage)
  let appStore = createStore(persistedReducer);
  let persistor = persistStore(appStore)




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
