import {default as React, useState } from 'react';
import '../pages.css'
import './home.css'

function Home () {
    return (
        <div className="category">
            <div className="container" id="home-container">
                <div className="content page-assets" >
                </div>
                <div className="content" id="home-content">
                    <div className='section welcome' id="title-card">
                        <h1
                        >
                            welcome!
                        </h1>
                    </div>
                </div>
            </div>
            <div className="container" id="about-me-container">
                <div className="content page-assets" >
                </div>
                <div className="content" >
                    <div className='section' id="about-me" style={{textAlign: "center"}}>
                        <h1 
                        style={{textAlign: "center"}}
                        >
                            about me
                        </h1>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home