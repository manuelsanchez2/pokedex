import React from "react";
import './LoadingScreen.css'

function LoadingScreen({src, alt}) {
    return <img className="loadingScreen" src = {src} alt = {alt}/>
}

export default LoadingScreen;