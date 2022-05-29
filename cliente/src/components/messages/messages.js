import './messages.css'

import { useNavigate } from 'react-router-dom';

const Messages = (props) => {
    const navigate = useNavigate()

    // props será a resposta do servidor

    //ver alertas do BOOTSTRAP em https://getbootstrap.com/docs/5.0/components/alerts/

    function handleClickErrorMessage() {
        navigate(0);
    }


    return (
        <div className="alert alert-warning alert-dismissible fade show d-flex align-items-center mt-2" role="alert">
            <div>{props.error}</div>
            <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close" onClick={handleClickErrorMessage}></button>
        </div>
    )

}

export default Messages;