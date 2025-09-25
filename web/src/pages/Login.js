import { useNavigate } from "react-router-dom";

import "./Login.css";
import {ROUTES} from "../routes";

const Login = () => {
    const navigate = useNavigate();
    return (
        <div className="login-container">
            <div className="login-form">
                <h1>Login</h1>
                <form>
                    <div className="form-group">
                        <label htmlFor="username">Username</label>
                        <input 
                            type="text" 
                            id="username" 
                            name="username" 
                            placeholder="Enter your username" 
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input 
                            type="password" 
                            id="password" 
                            name="password" 
                            placeholder="Enter your password" 
                        />
                    </div>
                    <button type="submit" className="login-button">Login</button>
                </form>
                <div className="buttons-container">
                    <button 
                        className="secondary-button" 
                        onClick={() => navigate(ROUTES.CREATE_ACCOUNT)}
                    >
                        Create Account
                    </button>
                    <button 
                        className="secondary-button" 
                        onClick={() => navigate(ROUTES.FORGOT_PASSWORD)}
                    >
                        Forgot Password?
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Login;