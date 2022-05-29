import './gameslibrary.css'

const Gameslibrary = (props) => {

    const deleteGame = async (e) => {
        const gameID = e.target.name;
        const response = await fetch('http://localhost:5001/profile/gamedelete', {
            method: 'delete',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                gameID
            })
        })
        
        const result = await response.json();

        if (result) {
            props.setError(result.message);
        }
    }

    const data = props.data

    //obter nome
    const gameName = data.map((one, index) => {
        return (
            <div className="card m-1" key={index}>
                {/* <img src="..." className="card-img-top" alt="..." /> */}
                <div className="card-body d-flex flex-column justify-content-between">
                    <div>
                        <h5 className="card-title">{one.name}</h5>
                        <h4 className="card-title">{one.platform.platform_name}</h4>
                    </div>
                    <div className='d-flex justify-content-end'>
                        <button className="btn btn-danger" onClick={deleteGame} name={one._id}>Delete</button>
                    </div>
                </div>
            </div>
        )
    })

    return (
        <div className="w-75 container-fluid list-games">
            <div className="card-group d-flex flex-wrap">
                {gameName}
            </div>
        </div>
    )
}

export default Gameslibrary;