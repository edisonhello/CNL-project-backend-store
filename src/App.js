import { useState } from 'react';
import './App.css';
import Information from './components/Information/Information.js';
import LoginForm from './components/LoginForm/LoginForm.js';
import NavBar from './components/NavBar/NarBar.js';

function App() {

  const [user, setUser] = useState(null);

  return (
    <div>
      <NavBar></NavBar>
      <div>
        {user ? <LoginForm setUser={setUser}></LoginForm> : <Information user={user}></Information>}
      </div>
    </div>


  );
}

export default App;
