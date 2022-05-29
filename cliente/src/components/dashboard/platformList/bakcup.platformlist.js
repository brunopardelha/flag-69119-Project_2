import './platformlist.css';

const PlatformList = () => {

    return (

        <div id="carouselControls" className="carousel slide platformlist" data-bs-ride="carousel">
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img src="./steam-logo-580x332.webp" alt="" className="d-block w-100" />
                </div>
                <div className="carousel-item">
                    <img src="./epic-games-logo.png" className="d-block w-100" alt="" />
                </div>
                <div className="carousel-item">
                    <img src="./xbox_logo.jpg" className="d-block w-100" alt=""/>
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselControls" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselControls" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>





    )

}

export default PlatformList