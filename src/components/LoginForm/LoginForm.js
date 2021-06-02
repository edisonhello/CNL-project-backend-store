
import { useState } from "react";
import stubStore from "../../stubs/stubStore.js";

function LoginForm({ setStore }) {

  const [showLogin, setShowLogin] = useState(true);
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');

  const signIn = (e) => {
    console.log('ja', phone, password);
    setStore(stubStore);
    e.preventDefault();
  };

  const signUp = (e) => {
    console.log('ja', phone, password, name, address);
    setStore(stubStore);
    e.preventDefault();
  };
  
  return (
    <div class="container">
      <form class="mx-5 my-5">
        {
          showLogin ? (
              <div>
                <div class="form-group row py-2">
                  <label class="col-form-label col-2" for="phone"> Phone </label>
                  <div class="col-10">
                    <input class="form-control" type="text" id="phone" value={phone} onChange={e => setPhone(e.target.value)}></input>
                  </div>
                </div>
                <div class="form-group row py-2">
                  <label class="col-2 col-form-label" for="password"> Password </label>
                  <div class="col-10">
                    <input class="form-control" type="password" id="password" value={password} onChange={e => setPassword(e.target.value)}></input>
                  </div>
                </div>
                <div class="col-12 text-center p-2">
                  <button type="submit" class="btn btn-primary mx-3" onClick={signIn}> Sign in </button>
                  <button class="btn btn-info mx-3" onClick={() => setShowLogin(false)}> Switch to sign up </button>
                </div>
              </div>
            ) : (
              <div>
                <div class="form-group row py-2">
                  <label class="col-form-label col-2" for="phone"> Phone </label>
                  <div class="col-10">
                    <input class="form-control" type="text" id="phone" value={phone} onChange={e => setPhone(e.target.value)}></input>
                  </div>
                </div>
                <div class="form-group row py-2">
                  <label class="col-2 col-form-label" for="password"> Password </label>
                  <div class="col-10">
                    <input class="form-control" type="password" id="password" value={password} onChange={e => setPassword(e.target.value)}></input>
                  </div>
                </div>
                <div class="form-group row py-2">
                  <label class="col-2 col-form-label" for="name"> Name </label>
                  <div class="col-10">
                    <input class="form-control" type="text" id="name" value={name} onChange={e => setName(e.target.value)}></input>
                  </div>
                </div>
                <div class="form-group row py-2">
                  <label class="col-2 col-form-label" for="address"> Address </label>
                  <div class="col-10">
                    <input class="form-control" type="text" id="address" value={address} onChange={e => setAddress(e.target.value)}></input>
                  </div>
                </div>
                <div class="col-12 text-center p-2">
                  <button type="submit" class="btn btn-primary mx-3" onClick={signUp}> Sign up </button>
                  <button class="btn btn-info mx-3" onClick={() => setShowLogin(true)}> Switch to sign in </button>
                </div>
              </div>
            )
        }
      </form>
    </div>
  )
}

export default LoginForm;