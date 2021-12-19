import React from 'react';
import logo from './logo.svg';
import './App.css';
import Sidebar from './sidebar';
import Display from './Display';
import { Provider } from 'react-redux'
import store from './redux/store';

/**
 * complete guide
 * https://javascript.plainenglish.io/a-simple-counter-app-to-learn-react-hooks-and-react-redux-hooks-4fc4f4fb4f40
 */
function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <header className="App-header" style={{
          display:'flex',
          flexDirection:'row'
        }}>
          <Sidebar />
          <Display />
        </header>
      </Provider>
    </div>
  );
}

export default App;
