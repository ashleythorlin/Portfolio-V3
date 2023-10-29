import { default as React, useState, useEffect, SetStateAction } from "react";
import "./navbar.css";
import { ActiveNav } from "../../types"

interface NavProps {
    activeNav: ActiveNav,
    setActiveNav: React.Dispatch<SetStateAction<ActiveNav>>,
    colorWay: Array<string>
}

function NavBar (props: NavProps) {
    const body = document.body;
    const bgColorsBody = props.colorWay
    const menu: Element | null = body.querySelector(".menu");
    const menuBorder: Element | null | undefined = menu?.querySelector(".menu_border");

    window.onload = function() {
        triggerUpdate("homeNav", 0)
    };

    useEffect(() => {
        animateNav();
        // eslint-disable-next-line react-hooks/exhaustive-deps
      }, [props.activeNav]);

    // set clicked element as active
    function triggerUpdate(id: any, index: number) {
        if (id !== props.activeNav){
            // animate items and titles
            // remove "active" class from old active element
            document.getElementById(props.activeNav.id)?.classList.remove("active");
            document.getElementById(props.activeNav.id + "Title")?.classList.remove("active");
            // add active class to new active element
            document.getElementById(id)?.classList.add("active");
            document.getElementById(id + "Title")?.classList.add("active");
            //update activeNav state
            props.setActiveNav({
                id: id, 
                index: index
            })
        }
    }

    function animateNav() {
        // animates nav border
        const index = props.activeNav.index
        // body.style.backgroundColor = bgColorsBody[index];
        const element = document.getElementById(props.activeNav.id)
        if (menu !== null){
            const offsetActiveItem = element?.getBoundingClientRect();
            if (offsetActiveItem !== undefined){
                const left = Math.floor(offsetActiveItem.left - (menu as HTMLElement).offsetLeft - (((menuBorder as HTMLElement).offsetWidth)  - offsetActiveItem.width) / 2) +  "px";
                (menuBorder as HTMLElement).style.transform = `translate3d(-${left}, 0 , 0)`;
            }
        }
    }

  return (
    <div className="anim-nav-bar">
        {/* <h1 id="name">ashley thorlin</h1> */}
        <menu className="menu">
            {/* <!--     Home 23876C --> */}
            <a 
            className="menu_item active" 
            id="homeNav"
            style={{"backgroundColor": bgColorsBody[0]}}
            onClick={() => triggerUpdate("homeNav", 0)}
            href="#home-container"
            >
                <svg className="icon" viewBox="0 0 24 24" >
                    <path  d="M4,12 l8,-8 l8,8"/>
                    <path  d="M7,9 v10 h10 v-10"/>
                    <path  d="M10,19 v-6 h4 v6"/>
                </svg>
                <p
                className="menu_item_title"
                id="homeNavTitle"
                >
                    home
                </p>
            </a>
            {/* <!--  About Me  --> */}
            <a 
            className="menu_item" 
            id="aboutNav"
            style={{"backgroundColor": bgColorsBody[1]}}
            onClick={(e) => triggerUpdate("aboutNav", 1)}
            href="#about-me-container"
            >
                <svg className="icon" viewBox="0 0 24 24">
                    <path  d="M4,4 v12 h16 v -12 z"/>
                    <path  d="M17,13 v-6 h-10 v6 z"/>
                    <path  d="M12,16 v4"/>
                    <path  d="M6,20 h12"/>
                </svg>
                <p
                className="menu_item_title"
                id="aboutNavTitle"
                >
                    about me
                </p>
            </a>
            {/* <!-- Experience --> */}
            <a 
            className="menu_item" 
            id="experienceNav"
            style={{"backgroundColor": bgColorsBody[2]}}
            onClick={(e) => triggerUpdate("experienceNav", 2)}
            href="#experience-container"
            > 
                <svg className="icon" viewBox="0 0 24 24" >
                    <path  d="M8,8 v-4 h8 v4"/>
                    <path  d="M4,18 v-10 h16 v10z"/>
                    <path  d="M20,12 h-16"/>
                    <path  d="M10,12 v2 h4 v-2"/>
                </svg>
                <p
                className="menu_item_title"
                id="experienceNavTitle"
                >
                    experience
                </p>
            </a>
            {/* <!-- Skills --> */}
            <a 
            className="menu_item" 
            id="skillsNav"
            style={{"backgroundColor": bgColorsBody[3]}}
            onClick={(e) => triggerUpdate("skillsNav", 3)}
            href="#skills-container"
            >
                <svg className="icon" viewBox="0 0 24 24">
                    <path  d="M3.4,11.9l8.8,4.4l8.4-4.4"/>
                    <path  d="M3.4,16.2l8.8,4.5l8.4-4.5"/>
                    <path  d="M3.7,7.8l8.6-4.5l8,4.5l-8,4.3L3.7,7.8z"/>
                </svg>
                <p
                className="menu_item_title"
                    id="skillsNavTitle"
                >
                    skills
                </p>
            </a> 
            {/* <!-- Projects --> */}
            <a 
            className="menu_item" 
            id="projectsNav"
            style={{"backgroundColor": bgColorsBody[4]}}
            onClick={(e) => triggerUpdate("projectsNav", 4)}
            href="#projects-container"
            >
                <svg className="icon" viewBox="0 0 24 24" >
                    <path  d="M7,8 l-4,4 l4,4"/>
                    <path  d="M17,8  l4,4 l-4,4"/>
                    <path  d="M10,19 l4,-14"/>
                </svg>
                <p
                className="menu_item_title"
                id="projectsNavTitle"
                >
                    projects
                </p>
            </a>
            {/* <!-- Education 1C7665 --> */}
            <a
            className="menu_item"
            id="educationNav"
            style={{"backgroundColor": bgColorsBody[5]}}
            onClick={() => triggerUpdate("educationNav", 5)}
            href="#education-container"
            >
                <svg className="icon" viewBox="0 0 24 24">
                    <path d="M4,7.5 l8,-3.5 l8,3.5 l-8,3.5 l-8,-3.5"/>
                    <path d="M12,7 l-8,2 c0,0,-0.3,0.3,0.3,0.3 l-0.5,3 l1,3 h-2 l1,-3"/>
                    <path d="M8,9 l-1.5,8 c0,0,0,2,6,2 c0,0,4,0,6,-2 l-1.5,-8"/>
                </svg>
                <p
                className="menu_item_title"
                id="educationNavTitle"
                >
                    education
                </p>
            </a>
            {/* <!-- Contact --> */}
            <a 
            className="menu_item" 
            id="contactNav"
            style={{"backgroundColor": bgColorsBody[6]}}
            onClick={(e) => triggerUpdate("contactNav", 6)}
            href="#contact-container"
            >
                <svg className="icon" viewBox="0 0 24 24">
                    <path  d="M6.7,4.8 h10.7 c0.3,0,0.6,0.2,0.7,0.5 l2.8,7.3 c0,0.1,0,0.2,0,0.3 v5.6 c0,0.4-0.4,0.8-0.8,0.8 H3.8
                    C3.4,19.3,3,19,3,18.5 v-5.6 c0-0.1,0-0.2,0.1-0.3 L6,5.3C6.1,5,6.4,4.8,6.7,4.8z"/>
                    <path  d="M3.4,12.9 H8 l1.6,2.8 h4.9 l1.5-2.8 h4.6"/>
                </svg>
                <p
                className="menu_item_title"
                id="contactNavTitle"
                >
                    contact
                </p>
            </a>
            <div className="menu_border"></div>

        </menu>

        <div className="svg-container">
            <svg viewBox="0 0 202.9 45.5" >
            <clipPath id="menu" clipPathUnits="objectBoundingBox" transform="scale(0.0049285362247413 0.021978021978022)">
                <path  d="M6.7,45.5c5.7,0.1,14.1-0.4,23.3-4c5.7-2.3,9.9-5,18.1-10.5c10.7-7.1,11.8-9.2,20.6-14.3c5-2.9,9.2-5.2,15.2-7
                c7.1-2.1,13.3-2.3,17.6-2.1c4.2-0.2,10.5,0.1,17.6,2.1c6.1,1.8,10.2,4.1,15.2,7c8.8,5,9.9,7.1,20.6,14.3c8.3,5.5,12.4,8.2,18.1,10.5
                c9.2,3.6,17.6,4.2,23.3,4H6.7z"/>
            </clipPath>
            </svg>
        </div>
    </div>
  );
}

export default NavBar;
