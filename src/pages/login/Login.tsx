import React, { FC, useState } from 'react';
import Cookies from 'universal-cookie';
import { login } from 'actions/users';

import { UpdaterMethod, EventTarget } from 'helpers/types';
import { Input, Button, Spinner } from 'components';

const Login:FC = () => {
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);
  const [loggedIn, setLoggedIn] = useState<boolean>(false);

  const updaters = { setUsername, setPassword };

  const handleChanges = (ev: EventTarget, method: UpdaterMethod) => {
    const { target: { value } } = ev;
    updaters[method](value);
  };

  const handleLogin = () => {
    setLoading(true);
    login({ username, password })
      .then((token) => {
        setLoggedIn(true);
        setLoading(false);
        const cookies = new Cookies();
        cookies.set('token', JSON.stringify(token), { maxAge: 31536000 });
        window.location.reload();
      });
  };

  return (
    <div className="container">
      <h2>LOGIN PAGE</h2>
      {
                loading ? <Spinner /> : (
                  <>
                    {
                        loggedIn ? <span>SUCCESS!</span> : (
                          <>
                            <div className="loginForm">
                              <Input label="Username" type="text" value={username} onChange={(e: EventTarget) => handleChanges(e, 'setUsername')} />
                              <Input label="Password" type="password" value={password} onChange={(e: EventTarget) => handleChanges(e, 'setPassword')} />
                            </div>
                            <Button onClick={handleLogin}>Log in</Button>
                          </>
                        )
                    }
                  </>
                )
            }
    </div>
  );
};

export default Login;
