import { useState } from 'react';
import './App.css';
import Information from './components/Information/Information.js';
import LoginForm from './components/LoginForm/LoginForm.js';
import NavBar from './components/NavBar/NavBar.js';

function App() {

  const [token, setToken] = useState("");

  return (
    <div>
      <NavBar></NavBar>
      <div>
        {token ? <Information token={token}></Information> : <LoginForm setToken={setToken}></LoginForm>}
      </div>
    </div>
  );
}

export default App;
