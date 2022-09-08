import { configureStore , combineReducers } from "@reduxjs/toolkit";

import dummySlice from "./slices/dummySlice";
// import userReducer from "./slices/userSlice";
import storage from 'redux-persist/lib/storage';
import { persistReducer, persistStore } from 'redux-persist';
import thunk from 'redux-thunk';
import userSlice from "./slices/userSlice";

// if you have multiple reducers than you should go with combineReducers
// import { combineReducers} from '@reduxjs/toolkit';
// const reducers = combineReducers({
    //  reducer1 : slice1.reducer,
    //  reducer2 : slice1.reducer
// });

// const reducers = combineReducers({
//      reducer1: userSlice,
//     //  reducer2 : dummySlice.reducer
// });
const persistConfig = {
  key: 'root',
  storage,
  // blacklist:['reducer1']
}

const persistedReducer = persistReducer(persistConfig, userSlice)

export const store = configureStore({
  reducer: persistedReducer,
  middleware: [thunk]
})

export const persistor = persistStore(store)

// if you want to customization using persistance than you should go with blacklist and whitelist options


// blacklist = specifying which part of state not to persist
// whitelist = specifying which part of the state to persist.

