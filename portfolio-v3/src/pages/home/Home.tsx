import {default as React, useState } from 'react';
import '../pages.css'

function Home () {
      // change background color on scroll
    const [scrollTop, setScrollTop] = useState(0);

    const handleScroll = (event: React.UIEvent<HTMLElement>) => {
        const scrollTop = event.currentTarget.scrollTop;
        console.log("here: ", scrollTop)
        console.log(event.currentTarget.offsetHeight);
        // if (scrollTop > 100){
        //     document.body.style.backgroundColor = bgColorsBody[1];
        // }

    };
    return (
        <div className="container" id="home-container"
        onScroll={(e) => handleScroll(e)}>
            {/* <div className="content page-assets" >
            </div> */}
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