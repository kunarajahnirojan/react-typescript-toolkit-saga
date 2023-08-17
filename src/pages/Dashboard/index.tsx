import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loginRequest } from 'features/auth/authSlice';
import { user as useSelectUser } from 'selectors/auth';

const App = () => {
  const dispatch = useDispatch();

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const { loading, error } = useSelector((state: any) => state.auth);

  const selectUser = useSelector(useSelectUser);

  console.log('====================================');
  console.log(selectUser);
  console.log('====================================');

  const handleLogin = () => {
    dispatch(loginRequest({ username, password }));
  };

  return (
    <div>
      <div>
        <input
          type="text"
          placeholder="Email"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
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
