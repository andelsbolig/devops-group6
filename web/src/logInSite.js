import { useNavigate } from "react-router-dom";

export const Login = () => {
    const navigate = useNavigate();
    return <div><h1>Login</h1>
    <form>
        <label>
            Username:
            <input type="text" name="username" />
        </label>
        <br />
        <label>
            Password:
            <input type="password" name="password" />
        </label>
        <br />
        <button type="submit">Login</button>
    </form>
    <button onClick={() => navigate("/create-account")}>Create Account</button>
    <button onClick={() => navigate("/forgot-password")}>Forgot Password?</button>
    </div>;
}
//aaaaaa