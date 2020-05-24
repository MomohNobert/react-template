import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
    key: 'mn-template',
    storage
}

const rootReducer = combineReducers({

});

export default persistReducer(persistConfig, rootReducer);