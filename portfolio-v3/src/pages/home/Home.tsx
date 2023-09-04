import React from 'react';
import '../pages.css'

function Home () {
    return (
        <div className="container" id="home">
            <div className="page-assets">

            </div>
            <div className="content" >
                <div className='section' id="title-card" style={{textAlign: "center"}}>
                    <h1 
                    style={{textAlign: "center"}}
                    >
                        welcome!
                    </h1>
                </div>
                <div className='section'>
                    <h1 
                    style={{textAlign: "center"}}
                    >
                        about me
                    </h1>
                </div>
            </div>
        </div>
    )
}

export default Home