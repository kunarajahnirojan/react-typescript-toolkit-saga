import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { loadTitleRequest } from 'features/addons/addonSlice';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadTitleRequest());
  }, [dispatch]);

  return (
    <div>
      <div>
        <input type="text" placeholder="Email" />
      </div>
      <div>
        <input type="password" placeholder="Password" />
      </div>
      <div>
        <button>Logging in...</button>
      </div>
    </div>
  );
};

export default App;
