import './profile.css';

import { useEffect, useState } from 'react';

import NavBar from '../navBar/navBar';
import Inputboxes from './inputboxes/inputboxes';
import Userpicture from './userpicture/userpicture'
import Delete from './delete/delete';
import Messages from '../messages/messages';

const Profile = () => {

    const [userInfo, setUserInfo] = useState([]);
    const [error, setError] = useState('');

    useEffect(() => {
        async function getAll() {
            const response = await fetch('http://localhost:5001/user', {
                credentials: "include"
            })
            const all = await response.json();
            setUserInfo(all);
        }
        getAll();
    }, [])

    return (
        <>
            <NavBar user={userInfo}/>

            {(error) ? <Messages error={error} setError={setError}/> : '' }

            <div className="main-window shadow-lg d-flex">

                {(userInfo) ? <Userpicture userInfo={userInfo} setError={setError} /> : <h1>Loading...</h1>}
                {(userInfo) ? <Inputboxes userInfo={userInfo} setError={setError} /> : <h1>Loading...</h1>}
                {(userInfo) ? <Delete /> : <h1>Loading...</h1>}

            </div>
        </>
    );

};

export default Profile;