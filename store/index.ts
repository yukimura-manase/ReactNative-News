import {createStore, combineReducers} from 'redux';
import userReducer from './reducers/user';

// Redux-Persist
import {AsyncStorage} from 'react-native';
import { persistReducer, persistStore } from 'redux-persist';

// Redux-Persistの設定
const persistConfig = {
  key: 'root',
  storage: AsyncStorage, // どこに保存するか？
  whitelist: ['user'], // 保存したいツリーを設定 => Reduxのkey(user)だけを保持する
};

// user(key)に「/reducers./userフォルダ」が紐づけられている！
const rootReducer = combineReducers({
  user: userReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = createStore(persistedReducer);

export const persistor = persistStore(store); // storeデータをpersistStoreに保持させる！

export default store;