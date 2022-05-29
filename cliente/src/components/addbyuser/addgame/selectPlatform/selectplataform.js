import { useEffect, useState } from 'react';


const SelectPlataform = (props) => {

    let [optionsPlatform, setOptionsPlatform] = useState([]);

    useEffect(() => {
        async function getAll() {
            const response = await fetch('http://localhost:5001/profile/platform/all', { credentials: 'include' })
            const all = await response.json();
            setOptionsPlatform(all);
        }
        getAll();
    }, [])

    const listOptions = optionsPlatform.map((name) => {
        return (
            <option key={name.platform_name} value={name._id}>{name.platform_name}</option>
        );
    })

    return (
        <select id="platform" className="w-25" required value={props.plat} onChange={(e) => props.setPlat(e.target.value)}>Pick the platform game:
            <option value="undefined">Pick Platform</option>
            {listOptions}
        </select>
    )

};

export default SelectPlataform;