import React, {useState}from 'react';
import './App.css';
import Folder from './components/folders/Folder';
import Renderer from './components/Renderer';
import reduxStore from './state/index';
import { Provider, useSelector } from 'react-redux';
import { RootState } from './state/reducers';
import Sidebar from './components/sidebar/Sidebar';

function App() {

  return (
    <div className="App">
      <header className="App-header">
        <Provider store={reduxStore}>
          <Sidebar/>
          <Renderer/>
        </Provider>
      </header>
    </div>
  );
}

export default App;
