// src/App.js

import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loginRequest } from 'features/auth/authSlice';

const App = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();
  const { loading, error } = useSelector((state: any) => state.auth);

  const handleLogin = () => {
    debugger;
    dispatch(loginRequest({ email, password }));
  };

  return (
    <div>
      <div>
        <input
          type="text"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div>
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <div>
        <button onClick={handleLogin} disabled={loading}>
          {loading ? 'Logging in...' : 'Login'}
        </button>
      </div>
      {error && <div>{error}</div>}
    </div>
  );
};

export default App;
