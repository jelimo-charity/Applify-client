import { configureStore, combineReducers, Reducer } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import storage from 'redux-persist/lib/storage';
import { persistStore, persistReducer } from "redux-persist";
import authReducer from "../features/auth/authSlice";
import { api } from "../features/auth/authAPI";



const persistConfig = {
    key: 'root',
    storage,
  };
  
  const rootReducer: Reducer = combineReducers({
    auth: authReducer,
    [api.reducerPath]: api.reducer,
  
  
  });
  
  const persistedReducer = persistReducer(persistConfig, rootReducer);
  
  export type RootState = ReturnType<typeof rootReducer>;
  
  export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: false,
      }).concat(
        api.middleware
        
  
      ),
  });
  
  export const persistor = persistStore(store);
  
  setupListeners(store.dispatch);
  