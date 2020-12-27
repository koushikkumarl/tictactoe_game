import React from "react";
import {FaTimes, FaPen, FaRegCircle} from "react-icons/fa";

const Icon = ({name}) => {
    switch (name) {
        case "circle":
            return <FaRegCircle className="icon"/>;
        case "cross": 
            return <FaTimes className="icon"/>;
        default:
            return <h1 />;
    }
}

export default Icon;