import React from "react";
import preloader from "../../../assets/images/loader.svg";

const Preloader = props =>{
    return(
        <div style={{'backgroundColor': 'red'}}>
            <img src={preloader}  width='130px'/>
        </div>
    )
};


export default Preloader;

