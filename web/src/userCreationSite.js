const UserCreation = () => {
    return <div>
        <h1>Create Account</h1>
        <form>
            <label>
                Email:
                <input type="email" name="email" />
            </label>
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
            <button type="submit">Create Account</button>
        </form>
    </div>;
}

export default UserCreation;
