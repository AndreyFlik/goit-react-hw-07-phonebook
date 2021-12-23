// import { createStore, combineReducers } from "redux";
// import { combineReducers } from "redux";
import { createLogger } from "redux-logger";
import { configureStore } from "@reduxjs/toolkit";
// import { composeWithDevTools } from "redux-devtools-extension";
import contactsReducer from "../redux/contacts/contacts-reducer";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web

const persistContactsConfig = {
  key: "items",
  storage,
  whitelist: ["items"],
};

const logger = createLogger({
  collapsed: (getState, action, logEntry) => !logEntry.error,
  timestamp: false,
});

const store = configureStore({
  reducer: {
    contacts: persistReducer(persistContactsConfig, contactsReducer),
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(logger),
  devTools: process.env.NODE_ENV !== "production",
});

const persistor = persistStore(store);

export { store, persistor };

// {
//   contacts: {
//     items: [],
//     filter: ''
//   }
// }
// const rootReducer = combineReducers({
//   contacts: contactsReducer,
// });

// const store = createStore(contactsReducer, composeWithDevTools());

// const store = configureStore({
//   reducer: {
//     contacts: contactsReducer,
//   },
//   middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
//   devTools: process.env.NODE_ENV !== "production",
// });

// export { store };
