import './addbyuser.css';

import { useState, useEffect } from 'react';

import NavBar from '../navBar/navBar';
import Addplatform from './addplatform/addplatform';
import Addgame from './addgame/addgame';
import Addgenre from './addgenre/addgenre';
import Messages from '../messages/messages';


const Addbyuser = () => {

    const [error, setError] = useState('');
    const [user, setUser] = useState('');
    
    useEffect(() => {
        async function getAll() {
            const response = await fetch('http://localhost:5001/user', {
                credentials: "include"
            })
            const all = await response.json();
            setUser(all);
        }
        getAll();
    }, [])

    return (
        <>
            <NavBar user={user}/>
            {(error) ? <Messages error={error} /> : ''}
            <div className="main-window shadow-lg d-flex flex-column align-content-center justify-content-center">

                <Addplatform setError={setError} />
                <hr />
                <Addgenre setError={setError} />
                <hr />
                <Addgame setError={setError} />

            </div>

        </>

    )
}

export default Addbyuser;



