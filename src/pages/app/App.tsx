import { useEffect, useState } from 'react';
import Cookies from 'universal-cookie';

import { Login, Board } from 'pages';
import { Spinner } from 'components';

const App = () => {
  const [ authorized, setAuthorized ] = useState<Boolean | null>(null);

  useEffect(() => {
    const cookies = new Cookies();
    const token = cookies.get('token');
    const tokenAuth = token !== undefined && typeof token === 'object' && 'auth' in token && token.auth;
    
    setAuthorized(tokenAuth);
  }, []);

  if (authorized === null) {
    return <Spinner className="big" />
  }

  return authorized ? <Board /> : <Login />;
}

export default App;
