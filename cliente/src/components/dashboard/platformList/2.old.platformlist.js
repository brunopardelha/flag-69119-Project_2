import './platformlist.css';
import noFoundImage from '../../../images/nofound.png'

const PlatformList = (props) => {
    //SCRIPT EM JAVASCRIPT PARA OS CONTROLOS
    // $(document).ready(function(){
    //     $(".wish-icon i").click(function(){
    //         $(this).toggleClass("fa-heart fa-heart-o");
    //     });
    // });	
    
    // console.log(props.data);

    function filter(e) {
        console.log(e)
    }

    const data = props.data

    //obter nome
    const platName = data.map((one, index) => {
        const name = one.platform.platform_name;
        const path = `http://localhost:5001/user/platform/${name}`; // fetch para obter imagem ?? será melhor maneira?!!
        //TODO onde está o index tem que ser transformado em botão para depois servir de filtro
        return (
            <div className="col-sm-3" key={index} onClick={filter}>
                <div className="thumb-wrapper platformlist">
                    <div className="img-box">
                        {(one.platform.photo) ? <img src={path} className="img-responsive" alt="" /> : <img src={noFoundImage} className="img-responsive" alt="" />}
                    </div>
                    <div className="thumb-content">
                        <strong>{name.toUpperCase()}</strong>
                    </div>
                </div>
            </div>)
    })

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <div id="myCarousel" className="carousel slide" data-ride="carousel" data-interval="0">
                        <ol className="carousel-indicators">
                            <li data-target="#myCarousel" data-slide-to="0" className="active"></li>
                            <li data-target="#myCarousel" data-slide-to="1"></li>
                        </ol>
                        <div className="carousel-inner">
                            <div className="item active">
                                <div className="row">

                                    {platName}

                                </div>
                            </div>
                            <div className="item">
                                <div className="row">
                                </div>
                            </div>

                        </div>
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