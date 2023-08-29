import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { loadTitleRequest } from 'features/addons/addonSlice';
import { loginRequest } from 'features/auth/authSlice';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadTitleRequest());
  }, [dispatch]);

  const handleLogin = async () => {
    const response = await dispatch(
      loginRequest({ username: 'sysadmin', password: 'secret' })
    );

    console.log('====================================');
    console.log(response, 'response');

    console.log('====================================');
  };

  return (
    <div>
      <div>
        <input type="text" placeholder="Email" />
      </div>
      <div>
        <input type="password" placeholder="Password" />
      </div>
      <div>
        <button onClick={() => handleLogin()}>Logging in...</button>
      </div>
    </div>
  );
};

export default App;
