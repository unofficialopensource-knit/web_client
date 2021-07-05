import './App.css';
import { Provider } from 'react-redux';
import React from 'react';
import Layout from './web-components/layout';
import store from './store/store';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Layout />
      </div>
    </Provider>
  );
}

export default App;
