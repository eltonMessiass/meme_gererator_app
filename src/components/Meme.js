import React from "react";


export default function Meme(){
    return(
        <main className="meme">
            <div className="form">
                
                    <input className="form--input" type="text" placeholder="Top text"/>
                    <input className="form--input" type="text" placeholder="Bottom text"/>
               
                <button className="form--button">Get a new meme image  🖼</button>


            </div>
        </main>
    )
}