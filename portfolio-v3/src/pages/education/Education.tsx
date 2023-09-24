import React from 'react';
import '../pages.css'
import './education.css'

const Education = () => {
    return (
        <div className="container" id="education-container">
            {/* <div className="page-assets">
            </div> */}
            <div className="content" id="education-content">
                <div className='section' id="education">
                    <div className='sub-section' id="education">
                        <h1 >
                            education
                        </h1>
                        <p>Lorem ipsum</p>
                    </div>
                    <div className='sub-section' id="coursework">
                        <h1 >
                            coursework
                        </h1>
                        <p>Lorem ipsum</p>
                    </div>
                </div>
                <div className='section' id="orgs" style={{marginLeft: "auto"}}>
                    <h1 >
                        organizations & clubs
                    </h1>
                    <p>Lorem ipsum</p>
                </div>
            </div>
        </div>
    )
}

export default Education