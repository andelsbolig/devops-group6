const ForgotPasswordSite = () => {
    return <div>
        <h1>Forgot Password</h1>
        <form>
            <label>
                Email:
                <input type="email" name="email" />
            </label>
            <br />
            <button type="submit">Reset Password</button>
        </form>
    </div>;
}

export default ForgotPasswordSite;
