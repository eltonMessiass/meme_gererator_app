import React from "react";
import troll_face from '../images/Troll_Face.svg'
import '../index.css'

export default function Header(){
    return(
        <header className="header">
            <img src={troll_face} alt="troll face" className="header--image"/>
            <h2 className="header--title">Meme Generator</h2>
            <h4 className="header--project">React Project</h4>
        </header>
    )
}