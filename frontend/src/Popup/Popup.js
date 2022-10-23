import React from "react";
import './Popup.css';

const Popup = props =>{
    return(
        <div className="Popup-box">
            <div className="Popbox">
                <button className="pop_cancel" onClick={props.handleClose}>X</button>
                {props.content}
            </div>
        </div>
    )
};

export default Popup;