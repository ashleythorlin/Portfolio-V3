import { default as React, useState} from 'react';
import '../pages.css'
import './projects.css'
import { ProjectData, DisplayInfo } from '../../types'

const Projects = () => {
    const projects = [
        {
            name: "Sorting Visualizer",
            desc: ["yeehaw", "yay fun"]
        },
        {
            name: "Portfolio",
            desc: ["yeehaw", "yay fun"]
        },
    ]

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
                        {projects && 
                        (projects as Array<ProjectData>).map((item, index) => (
                        <Project data={item} key={index+item.name}/>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

interface Data {
    data: ProjectData
}

const Project = (props: Data) => {
    const [displayInfo, setDisplayInfo] = useState<DisplayInfo>(
        {
            display: "none"
        })

    function handleMouseIn() {
        setDisplayInfo({ display: "inline-block" })
    }
    
    function handleMouseOut() {
        setDisplayInfo({ display: "none" })
    }

    function handleInfoMouseIn() {
        setDisplayInfo({ display: "inline-block" })
    }
    
    function handleInfoMouseOut() {
        setDisplayInfo({ display: "none" })
    }
    return (
        <div style={{position: "relative"}}>
            <div className="grid-item"
            onMouseOver={handleMouseIn.bind(this)}
            onMouseOut={handleMouseOut.bind(this)}>
                <div className="grid-item-title">{props.data.name}</div>
            </div>
            <div style={{position: "absolute"}}>
                <div className="info-tooltip"
                style={{display: displayInfo.display}}
                onMouseOver={handleInfoMouseIn.bind(this)}
                onMouseOut={handleInfoMouseOut.bind(this)}>
                    <ul>
                        {props.data.desc && 
                        (props.data.desc as Array<string>).map((item, index) => (
                        <li key={index+item}>
                            {item}
                        </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
      );
}

export default Projects