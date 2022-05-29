import './searchbar.css'

const Searchbar = (props) => {

    function filter(e) {
        const filtro = e.target.value;
        props.searchBar(filtro);
    }

    return (
        <div className="d-flex justify-content-center fixed-bottom">

            <div className="container-fluid mb-4 w-50">
                <form className="d-flex">
                    <input className="form-control me-2 bg-dark text-light" type="search" placeholder="Search" aria-label="Search" onChange={filter} />
                    <button className="btn btn-dark" type="submit">Search</button>
                </form>
            </div>
        </div>
    )
}

export default Searchbar;