import { useState } from 'react';
import './App.css';

function App() {
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="container mt-5 text-center">
      <h1 className="mb-4">Password Visibility Toggle</h1>
      <div className="mb-4">
        <label htmlFor="password" className="form-label">
          Password:
        </label>
        <div className="mb-4">
          <input
            type={showPassword ? 'text' : 'password'}
            className="form-control w-50 mx-auto"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            class="btn btn-primary mt-2 w-50"
            
            type="button"
            onClick={togglePasswordVisibility}
          >
            {showPassword ? 'Hide' : 'Show'}
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;