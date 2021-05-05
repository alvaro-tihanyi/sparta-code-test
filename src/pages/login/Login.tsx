import React from "react";

const setToken = (value: string) => {
    localStorage.setItem('token', value);
}

const Login = () => (
    <div>
        <h2>LOGIN PAGE</h2>
        <button onClick={() => setToken('test token')}>SET TOKEN</button>
    </div>
);

export default Login;
