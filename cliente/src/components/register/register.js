// import './register.css';
import { useState } from "react";
import { Link, Navigate } from "react-router-dom";
import Messages from "../messages/messages";

const Register = () => {

    const [name, setName] = useState('');
    const [user, setUser] = useState('');
    const [pass, setPass] = useState('');
    const [error, setError] = useState('');
    const [confirmPass, setConfirmPass] = useState('');

    async function handlerLoginFormSubmit(e) {
        e.preventDefault();
        const response = await fetch('http://localhost:5001/register', {
            method: 'post',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                pass,
                confirmPass,
                name,
                username: user,
            })
        })

        const data = await response.json();

        if (data.message) {
            setError(data.message)
        }

        if (data.status === 'ok') {
            return <Navigate to='/login' />
        }
    }

    return (
        <div className="position-absolute top-50 start-50 translate-middle main">
            <form className='main' onSubmit={handlerLoginFormSubmit}>
                {(error) ? <Messages error={error} /> : ''}
                <div className="mb-3">
                    <label htmlFor="name" className="form-label">Name</label>
                    <input type="text" className="form-control" id="name" autoComplete="Name" name='name' value={name} onChange={(e) => setName(e.target.value)} />
                </div>

                <div className="mb-3">
                    <label htmlFor="username" className="form-label">Email address Or Username</label>
                    <input type="text" className="form-control" id="username" autoComplete="Email/Username" name='user' value={user} onChange={(e) => setUser(e.target.value)} />
                    <div id="usernameHelp" className="form-text">We'll never share your email with anyone else.</div>
                </div>

                <div className="mb-3">
                    <label htmlFor="inputPassword" className="form-label">Password</label>
                    <input type="password" id="inputPassword" className="form-control" autoComplete="Password" name='pass1' value={pass} onChange={(e) => setPass(e.target.value)} />
                    <div id="passwordHelpBlock" className="form-text">
                        For your max security, your password should be 8 to 20 characters long, contain letters and numbers, and
                        must
                        NOT contain spaces, special characters, or emoji.
                    </div>
                </div>

                <div className="mb-3">
                    <label htmlFor="inputPasswordConfirm" className="form-label">Confirm Password</label>
                    <input type="password" id="inputPasswordConfirm" className="form-control" autoComplete="Confirm Password" name='pass2' value={confirmPass} onChange={(e) => setConfirmPass(e.target.value)} />
                </div>

                <div className="d-grid gap-2 d-md-flex justify-content-md-end">
                    <button type="submit" className="btn btn-dark">Submit</button>
                </div>
                Already have an account?<Link to="/login" className="btn btn-primary mx-3">Log in here!</Link>
            </form>
        </div>
    )
};

export default Register;
