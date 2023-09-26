import { default as React, useState } from 'react';
import '../pages.css'
import './skills.css'
import { DisplayInfo, SkillData } from "../../types";

const skills = [
    {
        name: "Python",
        desc: ["Ambry Genetics", "Data Science"]
    },
    {
        name: "Python",
        desc: ["Ambry Genetics", "Data Science"]
    }
]

const techs = [
    {
        name: "AWS",
        desc: ["Ambry Genetics", "Capstone Project"]
    },
    {
        name: "Docker",
        desc: ["Ambry Genetics"]
    }
]

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
                        {skills && 
                        (skills as Array<SkillData>).map((item, index) => (
                        <Skill data={item} key={index+item.name}/>
                        ))}
                    </div>
                </div>
                <div className='section' id="tech-grid" style={{marginLeft: "auto"}}>
                    <h1 >
                        technologies
                    </h1>
                    <div className="grid">
                        {techs && 
                        (techs as Array<SkillData>).map((item, index) => (
                        <Skill data={item} key={index+item.name}/>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

interface Data {
    data: SkillData
}

const Skill = (props: Data) => {
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

export default Skills