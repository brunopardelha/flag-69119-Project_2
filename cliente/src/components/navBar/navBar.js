import './navBar.css';
import { Link } from 'react-router-dom';

import Dropdown from 'react-bootstrap/Dropdown';


const NavBar = (props) => {
    return (
        <div className="main-bar m-auto">

            <nav className="navbar navbar-expand-lg navbar-dark rounded-pill shadow-lg mt-2">
                <div className="container-fluid">
                    {/* <Link className="navbar-brand" to="/dashboard">Games Library{(!props.user.name) ? `` : `of ${props.user.name}`}</Link> */}
                    <Link className="navbar-brand" to="/dashboard">Games Library {(props.user?.name) ? `of ${props.user.name}` : ''}</Link>

                    <Dropdown>
                        <Dropdown.Toggle variant="secondary" id="dropdown-basic">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-person" viewBox="0 0 16 16">
                                <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z" />
                            </svg>
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                            <Dropdown.Item href="/add">Add Platform/Genre/Game</Dropdown.Item>
                            <Dropdown.Item href="/dashboard">Dashboard</Dropdown.Item>
                            <Dropdown.Item href="/profile">Profile</Dropdown.Item>
                            <Dropdown.Divider />
                            <Dropdown.Item href="/logout">Logout</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>

                </div>
            </nav>

        </div>
    )
};

export default NavBar;