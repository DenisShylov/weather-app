import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import authReducer from './Auth/auth.reducer';
import weatherReducer from './Weather/weather.reducer';
import historyReducer from './WeatherHistory/weatherHistory.reducer';
import sportEventsReducer from './SportEvents/sportEvents.reducer';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const reducers = combineReducers({
  auth: authReducer,
  weather: weatherReducer,
  history: historyReducer,
  sportEvents: sportEventsReducer,
});

// localStorage.clear();

const store = createStore(reducers, composeEnhancers(applyMiddleware(thunk)));

store.subscribe(() => {
  return localStorage.setItem('redux-store', JSON.stringify(store.getState()));
});
export default store;
