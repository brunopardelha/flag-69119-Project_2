import './notfound.css'

const NotFound = () => {
    return (
        <div className="position-absolute top-50 start-50 translate-middle notfound">
            <h1 className="display numbers">404</h1>
            <h1 className="display">Page not found! Please verifify url</h1>
        </div>
    )
}

export default NotFound;