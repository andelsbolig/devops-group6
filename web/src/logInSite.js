import { useNavigate } from "react-router-dom";

export const Login = () => {
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
                        onClick={() => navigate("/create-account")}
                    >
                        Create Account
                    </button>
                    <button 
                        className="secondary-button" 
                        onClick={() => navigate("/forgot-password")}
                    >
                        Forgot Password?
                    </button>
                </div>
            </div>
        </div>
    );
}