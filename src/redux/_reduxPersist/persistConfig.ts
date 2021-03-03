import { PersistConfig } from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';

export { AsyncStorage as storage };

export const isPersistActive = true;

export const persistConfig: PersistConfig = {
    key: 'root',
    // update reducerVersion each time reducer configuration changes to purge redux persisted storage
    version: 1,
    storage: AsyncStorage,
    // reducer keys that you do NOT want stored to persistence here
    blacklist: [
    ],
    /*
  // Optionally, just specify the keys you DO want stored to persistence.
  // An empty array means 'don't store any reducers' -> infinitered/ignite#409
  whitelist: [
  ],
  stateReconciler: autoMergeLevel1, // default
  debug
  */
};
