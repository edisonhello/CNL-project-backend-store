import { useState } from 'react';
import './App.css';
import Information from './components/Information/Information.js';
import LoginForm from './components/LoginForm/LoginForm.js';
import NavBar from './components/NavBar/NavBar.js';

function App() {

  const [store, setStore] = useState(null);

  return (
    <div>
      <NavBar></NavBar>
      <div>
        {store ? <Information store={store}></Information> : <LoginForm setStore={setStore}></LoginForm>}
      </div>
    </div>
  );
}

export default App;
