/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import Route from './src/routes';
import { Provider } from 'react-redux';
import store from './src/redux/store'
import { PersistGate } from 'redux-persist/integration/react'

const {storeCon,persistor} = store()

const App: () => React$Node = () => {
  return (
    <Provider store={storeCon}>
      <PersistGate persistor={persistor}>
        <Route/>
      </PersistGate>
    </Provider>
  );
};
export default App;
