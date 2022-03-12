import './Button.css'

import React from 'react';

import { useHistory } from 'react-router-dom';

const Buttons = ({value,
    displayTrue,
    displayFalse,})=> {

        const history = useHistory();

        const handleClick = ()=> {
            history.push("/registration")
        }
    return (
        <div className="button">
            <button className = "register" onClick={handleClick}>
                Register
                
            </button>
        </div>
    )

}

export default Buttons;