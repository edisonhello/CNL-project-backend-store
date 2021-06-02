import { useState } from "react";

function LoginForm({ setUser }) {

  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');

  const submit = (e) => {
    console.log('ja');
    e.preventDefault();
  };
  
  return (
    <div class="container">
      <form class="mx-5 my-5">
        <div class="form-group row py-2">
          <label class="col-form-label col-2" for="phone"> Phone </label>
          <div class="col-10">
            <input class="form-control" type="text" id="phone" onChange={e => setPhone(e.target.value)}></input>
          </div>
        </div>
        <div class="form-group row py-2">
          <label class="col-2 col-form-label" for="password"> Password </label>
          <div class="col-10">
            <input class="form-control" type="password" id="password" onChange={e => setPassword(e.target.value)}></input>
          </div>
        </div>
        <div class="col-12 text-center p-2">
          <button type="submit" class="btn btn-primary" onClick={submit}> Sign in </button>
        </div>
      </form>
    </div>
  )
}

export default LoginForm;