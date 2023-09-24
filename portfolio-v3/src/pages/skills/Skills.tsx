import React from 'react';
import '../pages.css'
import './skills.css'

const Skills = () => {
    return (
        <div className="container" id="skills-container">
            <div className="page-assets">

            </div>
            <div className="content" id="skills-content">
                <div className='section' id="skill-grid">
                    <h1 >
                        languages
                    </h1>
                    <div className="grid">
                        <div className="grid-item">
                            <div className="grid-item-title">Python</div>
                        </div>
                        <div className="grid-item">
                            <div className="grid-item-title">Javascript</div>
                        </div>
                        <div className="grid-item">
                            <div className="grid-item-title">C++</div>
                        </div>
                        <div className="grid-item">
                            <div className="grid-item-title">R</div>
                        </div>
                    </div>
                </div>
                <div className='section' id="tech-grid" style={{marginLeft: "auto"}}>
                    <h1 >
                        technologies
                    </h1>
                    <div className="grid">
                        <div className="grid-item">
                            <div className="grid-item-title">Amazon Web Services</div>
                        </div>
                        <div className="grid-item">
                            <div className="grid-item-title">Nginx</div>
                        </div>
                        <div className="grid-item">
                            <div className="grid-item-title">Keras</div>
                        </div>
                        <div className="grid-item">
                            <div className="grid-item-title">Bitbucket</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Skills