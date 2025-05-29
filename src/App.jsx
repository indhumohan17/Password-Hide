import { useState } from "react";
import "./App.css";

function App() {
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="App">
      <div>
        <header className="App-header">
          <h1>Password Visibility Toggle</h1>
        </header>
      </div>
      <div className="container mt-5 text-center">
        <div className="mb-4 ">
          <label
            htmlFor="password"
            className="form-label"
            style={{  }}
          >
            Password:
          </label>
          <div className="mb-4">
            <input
              type={showPassword ? "text" : "password"}
              className="animated-input"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button
              className="animated-btn btn btn-dark mt-2 w-50"
              type="button"
              onClick={togglePasswordVisibility}
            >
              {showPassword ? "Hide" : "Show"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
