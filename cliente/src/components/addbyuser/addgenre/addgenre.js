import React, { useState } from 'react'

const Addgenre = (props) => {
    const [genre, setGenre] = useState('');

    async function handleSubmit(e) {
        e.preventDefault();
        const response = await fetch('http://localhost:5001/add/genre', {
            method: 'post',
            headers: {
                'Content-Type': 'application/json'
            },
            credentials: 'include',
            body: JSON.stringify({ genre })
        })
        const result = await response.json();
        
        if (result) {
            props.setError(result.message);
        }
    }

    return (
        <form className="d-flex flex-column add_game" onSubmit={handleSubmit}>
            <input type="text" className="w-50" required autoComplete="on" placeholder="Genre" value={genre} onChange={(e) => setGenre(e.target.value)} />
            <button type="submit" className="btn btn-primary w-25 mx-auto">Add genre</button>
        </form>
    )
}

export default Addgenre;