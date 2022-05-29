import { useState } from "react";

const Addplatform = (props) => {

    const [name_platform, setName_platform] = useState('')
    const [file, setFile] = useState()

    function handleChange(event) {
        setFile(event.target.files[0])
    }

    const add = async (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append('file', file);
        formData.append('name', name_platform);

        const response = await fetch('http://localhost:5001/add/platform', {
            method: 'post',
            credentials: 'include',
            body: formData
        })

        const data = await response.json()

        if (data.status) {
            props.setError(data.message);
        }
    }

    return (
        // <form method='post' action='http://localhost:5001/profile/platform' encType="multipart/form-data" className='d-flex flex-column'>
        <form className='d-flex flex-column' onSubmit={add}>
            <input type="text" className="w-50" autoComplete="on" placeholder="Platform's name" name="name_platform" value={name_platform} required onChange={(e) => setName_platform(e.target.value)} />
            <input type="file" className="w-50 bg-dark text-light" accept=".jpg,.png,.jpeg,.webp" onChange={handleChange} />
            <button type="submit" className="btn btn-primary w-25 mx-auto">Add platform</button>
        </form>
    )

}

export default Addplatform;