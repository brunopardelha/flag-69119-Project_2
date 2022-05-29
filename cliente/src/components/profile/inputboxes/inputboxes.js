import './inputboxes.css';
import { useState } from 'react';

const Inputboxes = (props) => {

    const [name, setName] = useState(props.userInfo.name);
    const [username, setUsername] = useState(props.userInfo.username);
    const [email, setEmail] = useState(props.userInfo.email);
    const [oldpass, setOldpass] = useState('');
    const [pass, setPass] = useState('');

    async function toUpdateUserData(e) {

        e.preventDefault();

        const response = await fetch('http://localhost:5001/profile/update', {
            method: 'put',
            headers: {
                'Content-Type': 'application/json',
            },
            credentials: 'include',
            body: JSON.stringify({
                name,
                username,
                email,
                oldpass,
                pass
            })
        })

        const re = await response.json();
        if (re) {
            props.setError(re.message)
        }
    }

    return (
        <form onSubmit={toUpdateUserData} id="input_boxes" className='d-flex flex-column mt-3'>
            <input type="text" autoComplete="on" placeholder="Name" defaultValue={props.userInfo.name} onChange={(e) => setName(e.target.value)} />
            <input type="text" autoComplete="on" placeholder="Username" defaultValue={props.userInfo.username} onChange={(e) => setUsername(e.target.value)} required />
            <input type="email" autoComplete="on" placeholder="Email (optional)" defaultValue={(props.userInfo.email) ? props.userInfo.email : null} onChange={(e) => setEmail(e.target.value)} />
            <input type="password" autoComplete="on" placeholder="Old Password" value={oldpass} onChange={(e) => { setOldpass(e.target.value) }} required />
            <input type="password" autoComplete="on" placeholder="Password" value={pass} onChange={(e) => { setPass(e.target.value) }} required />
            <input type="password" autoComplete="on" placeholder="Confirm Password" name="pass2" required />
            <button type="submit" className='btn btn-dark btn-lg mx-auto d-block rounded-3'>Save</button>
        </form>
    )

}

export default Inputboxes;


