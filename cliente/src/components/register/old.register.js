import './register.css';

const Register = () => {

    function checkPass(pass1, pass2) {
        return (pass1 === pass2) ? true : false;
    }


    const handlerLoginFormSubmit = (name, user, pass1, pass2) => {

        alert('ok!', name, user, pass1);

        if (!checkPass(pass1, pass2)) {
            alert('Both passwords are not equal');
        }

        fetch('localhost:5001/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(name, user, pass1)
        })
            .then(data => {
                data.json();
            })
    }

    return (
        // <form className='main' onSubmit={handlerLoginFormSubmit}>
        <form className='main' method='post' action='http://localhost:5001/login'>
            <div className="mb-3">
                <label htmlFor="name" className="form-label">Name</label>
                <input type="text" className="form-control" id="name" autoComplete="Name" name='name' />
            </div>

            <div className="mb-3">
                <label htmlFor="username" className="form-label">Email address Or Username</label>
                <input type="text" className="form-control" id="username" autoComplete="Email/Username" name='user' />
                <div id="usernameHelp" className="form-text">We'll never share your email with anyone else.</div>
            </div>

            <div className="mb-3">
                <label htmlFor="inputPassword" className="form-label">Password</label>
                <input type="password" id="inputPassword" className="form-control" autoComplete="Password" name='pass1' />
                <div id="passwordHelpBlock" className="form-text">
                    For your max security, your password should be 8 to 20 characters long, contain letters and numbers, and
                    must
                    NOT contain spaces, special characters, or emoji.
                </div>
            </div>

            <div className="mb-3">
                <label htmlFor="inputPasswordConfirm" className="form-label">Confirm Password</label>
                <input type="password" id="inputPasswordConfirm" className="form-control" autoComplete="Confirm Password" name='pass2' />
            </div>

            <div className="d-grid gap-2 d-md-flex justify-content-md-end">
                <button type="submit" className="btn btn-dark">Submit</button>
            </div>

            <div></div>

        </form>

    )
};

export default Register;
