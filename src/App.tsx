import React, {FC} from 'react';
import logo from './logo.svg';
import './App.css';

const App: FC = (): any => {
  interface GenericIdentityFn {
    <T>(arg: T): T;
  }

  function addToList<T>(list: Array<T>, element: T): Array<T> {
    return list;
  }

  function identity<T>(arg: T): T {
    return arg;
  }

  let myIdentity: GenericIdentityFn = identity;

  console.log(typeof(identity(2)))

  

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
