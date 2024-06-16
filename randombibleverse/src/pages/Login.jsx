import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../security/AuthContext";
import { Button } from "@mui/material";

function Login() {
  const [username, setUsername] = useState("user");

  const [password, setPassword] = useState(" ");

  const authContext = useAuth();

  const navigate = useNavigate();

  function handleUsernameChange(event) {
    setUsername(event.target.value);
  }

  function handlePasswordChange(event) {
    setPassword(event.target.value);
  }
  console.log(username);
  console.log(password);
  async function handleSubmit() {
    console.log(authContext.login);
    if (await authContext.login(username, password)) {
      navigate("/welcome");
      console.log("hello");
    }
  }

  return (
    <div className="Login">
      <h1>Login</h1>

      <div>
        <div>
          <label>Username</label>
          <input
            type="text"
            name="username"
            value={username}
            onChange={handleUsernameChange}
          />
        </div>
        <div>
          <label>Password</label>
          <input
            typw="password"
            name="password"
            value={password}
            onChange={handlePasswordChange}
          ></input>
        </div>
        <div>
          <Button name="login" onClick={handleSubmit}>
            Login
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Login;
