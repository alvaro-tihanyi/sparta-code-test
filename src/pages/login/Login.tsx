import React, { useState } from "react";
import { login } from 'actions/users';

type UpdaterMethod = "setUsername" | "setPassword";
type EventTarget = { target: { value: string } };
type InputType = { label: string | undefined, type: string, value: string, onChange: (e: EventTarget) => void, };

const Input = ({ label, type, value, onChange }: InputType ) => {
    return (
        <div className="inputWrapper">
            { label && <label>{label}</label>}
            <input type={type} value={value} onChange={onChange} />
        </div>
    );
};

const Login = () => {
    const [ username, setUsername ] = useState('');
    const [ password, setPassword ] = useState('');
    const [ loading, setLoading ] = useState(false);
    const [ loggedIn, setLoggedIn ] = useState(false);

    const updaters = { setUsername, setPassword };

    const handleChanges = (ev: EventTarget, method: UpdaterMethod) => {
        const { target: { value } } = ev;
        updaters[method](value);
    }

    const handleLogin = () => {
        setLoading(true);
        login({ username, password })
            .then((token) => {
                setLoggedIn(true);
                setLoading(false);
                localStorage.setItem('token', JSON.stringify(token));
                window.location.reload();
            })
    };

    return (
        <div className="container">
            <h2>LOGIN PAGE</h2>
            {
                loading ? <span>Loading...</span> : <>
                    {
                        loggedIn ? <span>SUCCESS!</span> : <>
                            <div>
                                <Input label="Username" type="text" value={username} onChange={(e) => handleChanges(e, 'setUsername')} />
                                <Input label="Password" type="password" value={password} onChange={(e) => handleChanges(e, 'setPassword')} />
                            </div>
                            <button onClick={handleLogin}>Log in</button>
                        </>
                    }
                </>
            }
        </div>
    )
};

export default Login;
