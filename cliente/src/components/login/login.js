import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import Messages from "../messages/messages";
import { useAuth } from "../auth";

const Login = () => {
    const navigate = useNavigate();
    const auth = useAuth();

    const [user, setUser] = useState('');
    const [pass, setPass] = useState('');
    const [error, setError] = useState('');


    async function loginUser(event) {
        event.preventDefault();
        const response = await fetch('http://localhost:5001/login', {
            method: 'post',
            headers: {
                'Content-Type': 'application/json',
            },
            credentials: "include",
            body: JSON.stringify({
                user,
                pass
            }),
        })

        const data = await response.json();

        // (data.status !== 'ok') ? setError(data.message) : navigate('/dashboard');
        if (data.status !== 'ok') {
            setError(data.message)
        }
        auth.login(data.isAuth);
        if (data.isAuth) { navigate('/dashboard', { replace: true }); }
    }





    return (
        // <form className='main' method='post' action='http://localhost:5001/login'>
        <div className="position-absolute top-50 start-50 translate-middle main">
            {(error) ? <Messages error={error} /> : ''}
            <form className='main' onSubmit={loginUser}>
                <div className="mb-3">
                    <label htmlFor="username" className="form-label">Email address Or Username</label>
                    <input type="text" className="form-control" id="username" autoComplete="on" name="user" onChange={(e) => setUser(e.target.value)} />
                    <div id="usernameHelp" className="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div className="mb-3">
                    <label htmlFor="inputPassword" className="form-label">Password</label>
                    <input type="password" id="inputPassword" className="form-control" autoComplete="on" name="pass" onChange={(e) => setPass(e.target.value)} />
                    <div id="passwordHelpBlock" className="form-text">
                        For your max security, your password should be 8 to 20 characters long, contain letters and numbers, and
                        must
                        NOT contain spaces, special characters, or emoji.
                    </div>
                </div>
                <div className="d-grid gap-2 d-md-flex justify-content-md-end">
                    <button type="submit" className="btn btn-dark">Submit</button>
                </div>
                Don't have an account?<Link to="/register" className="btn btn-primary mx-3">Sign up here!</Link>
            </form>
        </div>
    )
};

export default Login;