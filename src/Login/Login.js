import React from 'react';
import './Login.css';
import Title from '../Title';
function Login() {
    Title("Fin App");
    return (
        <div class="login-card">
            <h2>Welcome</h2>
            <h3>Enter your credentials</h3>
            <form className="login-form">
                <input type="text" placeholder="Username" />
                <input type="password" placeholder="Password" />
                <a href="https://website.com">Forgot your password?</a>
                <button type="submit">LOGIN</button>
            </form>
        </div>
    );
}


export default Login;