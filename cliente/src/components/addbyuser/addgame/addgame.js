import './addgame.css'

import { useState } from 'react';

import GameGenre from "./gameGenre/gamegenre";
import SelectPlataform from "./selectPlatform/selectplataform";

const Addgame = (props) => {

    const [gameName, setGameName] = useState('');
    const [genre, setGenre] = useState(undefined);
    const [plat, setPlat] = useState(undefined);

    async function handleSubmit(e) {
        e.preventDefault();

        const response = await fetch('http://localhost:5001/add/game', {
            method: 'post',
            headers: {
                'Content-Type': 'application/json',
            },
            credentials: 'include',
            body: JSON.stringify({
                gameName,
                genre,
                plat
            })
        })

        const data = await response.json();

        if (data) {
            props.setError(data.message)
        }
    }

    return (
        <form className="d-flex flex-column add_game" onSubmit={handleSubmit}>
            <input type="text" className="w-75" autoComplete="on" placeholder="Videogame Name" name="game_name" onChange={(e) => setGameName(e.target.value)} />
            <SelectPlataform plat={plat} setPlat={setPlat} />
            <GameGenre genre={genre} setGenre={setGenre} />
            <button type="submit" className="btn btn-primary w-50 mx-auto">Add game to library</button>
        </form>
    );

};

export default Addgame;