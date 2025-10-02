import React from "react";
import { useNavigate } from "react-router-dom";

import { Header } from "../components/Header";
import { ROUTES } from "../routes";

import "./Login.css"

const UserCreation = () => {
    const navigate = useNavigate();
    
    return (
        <div className="user-creation-page">
            <Header />
            <div className="user-creation-container">

                <div className="user-creation-form">
                    <div className="login-form-header">
                        <button
                            className="login-back-button"
                            onClick={() => navigate(ROUTES.LOGIN)}
                        >
                            ← Back to Login
                        </button>
                        <h1>Create Account</h1>
                    </div>
                    <form>
                        <div className="login-form-group">
                            <label htmlFor="email">Email</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                placeholder="Enter your email"
                            />
                        </div>
                        <div className="login-form-group">
                            <label htmlFor="username">Username</label>
                            <input
                                type="text"
                                id="username"
                                name="username"
                                placeholder="Choose a username"
                            />
                        </div>
                        <div className="login-form-group">
                            <label htmlFor="password">Password</label>
                            <input
                                type="password"
                                id="password"
                                name="password"
                                placeholder="Create a password"
                            />
                        </div>
                        <button type="submit" className="create-account-button">
                            Create Account
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default UserCreation;
