import { useNavigate } from "react-router-dom";

import { Header } from "../components/Header";
import { ROUTES } from "../routes";

import "./Login.css";

const ForgotPassword = () => {
    const navigate = useNavigate();

    return (
        <div className="forgot-password-page">
            <Header />
            <div className="forgot-password-container">
                <div className="forgot-password-form">
                    <div className="form-header">
                        <button
                            className="back-button"
                            onClick={() => navigate(ROUTES.LOGIN)}
                        >
                            ← Back to Login
                        </button>
                        <h1>Forgot Password</h1>
                    </div>
                    <form>
                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                placeholder="Enter your email"
                                required
                            />
                        </div>
                        <button type="submit" className="reset-password-button">
                            Reset Password
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ForgotPassword;
