import './platformlist.css';

const PlatformList = (props) => {
    //     <img src="./epic-games-logo.png" className="d-block w-100" alt="" />
    //     <img src="./xbox_logo.jpg" className="d-block w-100" alt="" />
    // <img src="./steam-logo-580x332.webp" alt="" className="d-block w-100" />


    //SCRIPT EM JAVASCRIPT PARA OS CONTROLOS
    // $(document).ready(function(){
    //     $(".wish-icon i").click(function(){
    //         $(this).toggleClass("fa-heart fa-heart-o");
    //     });
    // });	

    const path = 'http://localhost:5001/user/picture'; // fetch para obter imagem ?? será melhor maneira?!!



    return (
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <div id="myCarousel" className="carousel slide" data-ride="carousel" data-interval="0">
                        {/* <!-- Carousel indicators --> */}
                        <ol className="carousel-indicators">
                            <li data-target="#myCarousel" data-slide-to="0" className="active"></li>
                            <li data-target="#myCarousel" data-slide-to="1"></li> 
                        </ol>
                        {/* <!-- Wrapper for carousel items --> */}
                        <div className="carousel-inner">
                            <div className="item active">
                                <div className="row">
                                    <div className="col-sm-3">
                                        <div className="thumb-wrapper">
                                            <span className="wish-icon"><i className="fa fa-heart-o"></i></span>
                                            <div className="img-box">
                                                <img src="./epic-games-logo.png" className="img-responsive" alt="" />
                                            </div>
                                            <div className="thumb-content">
                                                <h4>Epic</h4>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-sm-3">
                                        <div className="thumb-wrapper">
                                            <span className="wish-icon"><i className="fa fa-heart-o"></i></span>
                                            <div className="img-box">
                                                <img src="./steam-logo-580x332.webp" className="img-responsive" alt="" />
                                            </div>
                                            <div className="thumb-content">
                                                <h4>Steam</h4>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-sm-3">
                                        <div className="thumb-wrapper">
                                            <span className="wish-icon"><i className="fa fa-heart-o"></i></span>
                                            <div className="img-box">
                                                <img src="./xbox_logo.jpg" className="img-responsive" alt="" />
                                            </div>
                                            <div className="thumb-content">
                                                <h4>Steam</h4>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-sm-3">
                                        <div className="thumb-wrapper">
                                            <span className="wish-icon"><i className="fa fa-heart-o"></i></span>
                                            <div className="img-box">
                                                <img src="./gog_logo.png" className="img-responsive" alt="" />
                                            </div>
                                            <div className="thumb-content">
                                                <h4>GOG</h4>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="item">
                                <div className="row">
                                    <div className="col-sm-3">
                                        <div className="thumb-wrapper">
                                            <span className="wish-icon"><i className="fa fa-heart-o"></i></span>
                                            <div className="img-box">
                                                <img src="/examples/images/products/play-station.jpg" className="img-responsive" alt="" />
                                            </div>
                                            <div className="thumb-content">
                                                <h4>Sony Play Station</h4>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-sm-3">
                                        <div className="thumb-wrapper">
                                            <span className="wish-icon"><i className="fa fa-heart-o"></i></span>
                                            <div className="img-box">
                                                <img src="/examples/images/products/macbook-pro.jpg" className="img-responsive" alt="" />
                                            </div>
                                            <div className="thumb-content">
                                                <h4>Macbook Pro</h4>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                        {/* <!-- Carousel controls --> */}
                        <a className="carousel-control left" href="#myCarousel" data-slide="prev">
                            <i className="fa fa-angle-left"></i>
                        </a>
                        <a className="carousel-control right" href="#myCarousel" data-slide="next">
                            <i className="fa fa-angle-right"></i>
                        </a>
                    </div>
                </div>
            </div>
        </div>

    )

}

export default PlatformList