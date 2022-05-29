import './platformlist.css';
import noFoundImage from '../../../images/nofound.png';
import { useRef } from 'react';
import arrowD from '../../../images/button-round-drt-icon.png';
import arrowE from '../../../images/button-round-esq-icon.png';
import cancel from '../../../images/button-round-cancel-icon.png';

const PlatformList = (props) => {
    
    const carroussel = useRef(null);

    const data = props.data;
    const filteredData = data.filter((obj, pos, arr) => {
        return arr
            .map(mapObj => mapObj.platform.platform_name)
            .indexOf(obj.platform.platform_name) === pos;
    });

    const slide = (shift) => {
        carroussel.current.scrollLeft += shift;
    };

    function filter(plat) {
        props.onSelect(plat);
    }

    if (!data || !data.length) return null;

    return (
        <div className="lista">
            <div className="contentor">
                <div className="carroussel" ref={carroussel} style={{ 'display': 'flex', 'overflowX': 'auto' }}>
                    {filteredData.map((item) => {
                        const path = `http://localhost:5001/user/platform/${item.platform.platform_name}`
                        return (
                            <div className="one" key={item.platform.platform_name} onClick={()=>filter(item.platform.platform_name)} aria-hidden="true">
                                <div className="imagem">
                                    {(item.platform.photo) ? <img src={path} alt={item.platform.platform_name} /> : <img src={noFoundImage} alt=".." />}
                                </div>
                                <div className="info">
                                    <span className="name">{item.platform.platform_name}</span>
                                </div>
                            </div>
                        )

                    })}
                </div>
                <div className='botoes'>
                    <button onClick={() => slide(-carroussel.current.offsetWidth)}><img src={arrowE} alt="scrool left" ></img></button>
                    <button onClick={props.clear} name=""><img src={cancel} alt="cancel"></img></button>
                    <button onClick={() => slide(+carroussel.current.offsetWidth)}><img src={arrowD} alt="scrool right"></img></button>
                </div>
            </div>
        </div>



    )

}

export default PlatformList