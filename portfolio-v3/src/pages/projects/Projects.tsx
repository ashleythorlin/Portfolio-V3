import React from 'react';
import '../pages.css'
import './projects.css'

const Projects = () => {
    return (
        <div className="container" id="projects-container">
            <div className="page-assets">

            </div>
            <div className="content" id="projects-content">
                <div className='section' id="projects-grid">
                    <h1 >
                        projects
                    </h1>
                    <div className="grid">
                        <div className="grid-item">
                            <div className="grid-item-title">Sorting Visualizer</div>
                        </div>
                        <div className="grid-item">
                            <div className="grid-item-title">Risk Prediction Model for Heart Disease</div>
                        </div>
                        <div className="grid-item">
                            <div className="grid-item-title">Portfolio</div>
                        </div>
                        <div className="grid-item">
                            <div className="grid-item-title">something else</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Projects