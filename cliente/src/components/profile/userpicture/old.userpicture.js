import './userpicture.css';

import noFoundImage from '../../../images/nofound.png'
import Messages from '../../messages/messages';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';


const Userpicture = (userInfo) => {
    const navigate = useNavigate();

    const [error, setError] = useState('');
    const [fileImage, setFileImage] = useState('');

    const path = 'http://localhost:5001/user/picture'; // fetch para obter imagem ?? será melhor maneira?!!

    // console.log(userInfo.userInfo.picture)

    async function toUpdateUserImage(e) {
        e.preventDefault();

        const formData = new FormData();
		formData.append('image', fileImage);

        const response = await fetch('http://localhost:5001/profile/updateimage', {
            method: 'post',
            body: formData
        })

        const result = await response.json();

        if (result.message) {
            setError(result.message)
        }
    }

    return (
        // <form method='post' action="http://localhost:5001/profile/updateimage" encType='multipart/form-data'>
        <form onSubmit={toUpdateUserImage}>
            {(error) ? <Messages error={error} /> : ''}
            <div className="imageAndChanger d-flex align-items-center">

                {(userInfo.userInfo.picture) ? <img className="container-fluid w-25 mt-5 user" src={path} alt="" /> : <img className="container-fluid w-50 my-3 noFoundImage" src={noFoundImage} alt="" />}
                <div className='d-flex'>
                    <input type="file" className="form-control" name="image" id="userImage" onChange={(e) => setFileImage(e.target.files[0])}/>
                    <button type="submit" className='btn btn-dark m-4 btn-m mx-auto rounded-3 d-block'>Save Image User</button>
                </div>
            </div>
        </form>
    )
}

export default Userpicture;