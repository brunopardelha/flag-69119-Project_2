import { useEffect, useState } from 'react';

const GameGenre = (props) => {

    let [listAllGenre, setListAllGenre] = useState([]);

    useEffect(() => {
        async function getAll() {
            const response = await fetch('http://localhost:5001/profile/genre/all', { credentials: 'include' })
            const result = await response.json()
            setListAllGenre(result);
        }
        getAll();
    }, [])


    const listOptions = listAllGenre.map((one) => {
        return (
            <option value={one._id} key={one._id} name={one.style}>{one.style}</option>
        );
    })

    return (
        <select id="genre" required value={props.genre} onChange={(e) => props.setGenre(e.target.value)}>Pick the game genre:
            <option value="undefined">Pick a genre</option>
            {listOptions}
        </select>
    );
};

export default GameGenre;