import React, { FC, useEffect, useState } from 'react';
import Cookies from 'universal-cookie';

import { Spinner } from 'components';
import Board from 'pages/board';
import Login from 'pages/login';

const App:FC = () => {
  const [authorized, setAuthorized] = useState<boolean | null>(null);

  useEffect(() => {
    const cookies = new Cookies();
    const token = cookies.get('token');
    const tokenAuth = token !== undefined && typeof token === 'object' && 'auth' in token && token.auth;
    setAuthorized(tokenAuth);
  }, []);

  if (authorized === null) {
    return <Spinner className="big" />;
  }

  return authorized ? <Board /> : <Login />;
};

export default App;
