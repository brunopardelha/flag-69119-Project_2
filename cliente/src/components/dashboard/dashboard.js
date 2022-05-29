import './dashboard.css'

import { useEffect, useState } from 'react';

import NavBar from '../navBar/navBar';
import PlatformList from './platformList/platformlist';
import Gameslibrary from './gamesLibrary/gameslibrary';
import Searchbar from './searchBar/searchbar';
import NoGames from '../NoGames/nogames';
import Messages from '../messages/messages'

const Dashboard = () => {

    const [dataUser, setDataUser] = useState('');
    const [error, setError] = useState(undefined);
    const [user, setUser] = useState(null);

    const [filterData, setFilterData] = useState('');

    useEffect(() => {
        async function getDataUser() {

            const response = await fetch('http://localhost:5001/user/fordash', {
                credentials: 'include'
            });
            const data = await response.json();
            setDataUser(data.result);
            setUser(data.userInfo);
            setFilterData(data.result);
        }
        getDataUser();
    }, [])

    if (!dataUser || !dataUser.length) return <><NavBar /><NoGames /></>;

    function onSelect(plat) {
        setFilterData(dataUser.filter((one) => one.platform.platform_name === plat))
    }

    function searchBar(string) {
        setFilterData(dataUser.filter((value) => {
            return value.name.toLowerCase().includes(string.toLowerCase())
        }
        ))
    }

    function clear() {
        setFilterData(dataUser);
    }


    return (
        <>
            <NavBar user={user} />
            {(error) ? <Messages error={error} /> : ''}
            <PlatformList data={filterData} setError={setError} onSelect={onSelect} clear={clear} />
            <Gameslibrary data={filterData} setError={setError} />
            <Searchbar setError={setError} searchBar={searchBar} />
        </>
    )
};

export default Dashboard;