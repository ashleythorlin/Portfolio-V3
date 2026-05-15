import { default as React, useRef, useEffect, SetStateAction } from "react";
import "./navbar.css";
import { ActiveNav } from "../../types";

interface NavProps {
  activeNav: ActiveNav;
  setActiveNav: React.Dispatch<SetStateAction<ActiveNav>>;
  colorWay: string[];
}

function NavBar(props: NavProps) {
  const { activeNav, setActiveNav, colorWay } = props;
  const menuRef = useRef<HTMLElement | null>(null);
  const menuBorderRef = useRef<HTMLElement | null>(null);
  const prevActiveNavRef = useRef<ActiveNav>(activeNav);

  useEffect(() => {
    const prev = prevActiveNavRef.current;
    const curr = activeNav;

    document.getElementById(prev.id)?.classList.remove("active");
    document.getElementById(prev.id + "Title")?.classList.remove("active");
    document.getElementById(curr.id)?.classList.add("active");
    document.getElementById(curr.id + "Title")?.classList.add("active");

    const menu = menuRef.current;
    const menuBorder = menuBorderRef.current;
    const element = document.getElementById(curr.id);

    if (menu && menuBorder && element) {
      const offsetActiveItem = element.getBoundingClientRect();
      const left = Math.floor(
        offsetActiveItem.left -
        (menu as HTMLElement).offsetLeft -
        ((menuBorder as HTMLElement).offsetWidth - offsetActiveItem.width) / 2
      ) + "px";
      (menuBorder as HTMLElement).style.transform = `translate3d(-${left}, 0, 0)`;
    }

    prevActiveNavRef.current = curr;
  }, [activeNav]);

  return (
    <div className="anim-nav-bar">
      <menu className="menu" ref={el => { menuRef.current = el; }}>

        <a className="menu_item" id="homeNav"
          style={{ backgroundColor: colorWay[0] }}
          onClick={() => setActiveNav({ id: "homeNav", index: 0 })}
          href="#home-container"
          aria-label="Home"
          aria-current={activeNav.id === "homeNav" ? "page" : undefined}
        >
          <svg className="icon" viewBox="0 0 24 24">
            <path d="M4,12 l8,-8 l8,8" />
            <path d="M7,9 v10 h10 v-10" />
            <path d="M10,19 v-6 h4 v6" />
          </svg>
          <p className="menu_item_title" id="homeNavTitle">home</p>
        </a>

        <a className="menu_item" id="aboutNav"
          style={{ backgroundColor: colorWay[1] }}
          onClick={() => setActiveNav({ id: "aboutNav", index: 1 })}
          href="#about-me-container"
          aria-label="About Me"
          aria-current={activeNav.id === "aboutNav" ? "page" : undefined}
        >
          <svg className="icon" viewBox="0 0 24 24">
            <path d="M4,4 v12 h16 v -12 z" />
            <path d="M17,13 v-6 h-10 v6 z" />
            <path d="M12,16 v4" />
            <path d="M6,20 h12" />
          </svg>
          <p className="menu_item_title" id="aboutNavTitle">about me</p>
        </a>

        <a className="menu_item" id="experienceNav"
          style={{ backgroundColor: colorWay[2] }}
          onClick={() => setActiveNav({ id: "experienceNav", index: 2 })}
          href="#experience-container"
          aria-label="Experience"
          aria-current={activeNav.id === "experienceNav" ? "page" : undefined}
        >
          <svg className="icon" viewBox="0 0 24 24">
            <path d="M8,8 v-4 h8 v4" />
            <path d="M4,18 v-10 h16 v10z" />
            <path d="M20,12 h-16" />
            <path d="M10,12 v2 h4 v-2" />
          </svg>
          <p className="menu_item_title" id="experienceNavTitle">experience</p>
        </a>

        <a className="menu_item" id="skillsNav"
          style={{ backgroundColor: colorWay[3] }}
          onClick={() => setActiveNav({ id: "skillsNav", index: 3 })}
          href="#skills-container"
          aria-label="Skills"
          aria-current={activeNav.id === "skillsNav" ? "page" : undefined}
        >
          <svg className="icon" viewBox="0 0 24 24">
            <path d="M3.4,11.9l8.8,4.4l8.4-4.4" />
            <path d="M3.4,16.2l8.8,4.5l8.4-4.5" />
            <path d="M3.7,7.8l8.6-4.5l8,4.5l-8,4.3L3.7,7.8z" />
          </svg>
          <p className="menu_item_title" id="skillsNavTitle">skills</p>
        </a>

        <a className="menu_item" id="projectsNav"
          style={{ backgroundColor: colorWay[4] }}
          onClick={() => setActiveNav({ id: "projectsNav", index: 4 })}
          href="#projects-container"
          aria-label="Projects"
          aria-current={activeNav.id === "projectsNav" ? "page" : undefined}
        >
          <svg className="icon" viewBox="0 0 24 24">
            <path d="M7,8 l-4,4 l4,4" />
            <path d="M17,8  l4,4 l-4,4" />
            <path d="M10,19 l4,-14" />
          </svg>
          <p className="menu_item_title" id="projectsNavTitle">projects</p>
        </a>

        <a className="menu_item" id="educationNav"
          style={{ backgroundColor: colorWay[5] }}
          onClick={() => setActiveNav({ id: "educationNav", index: 5 })}
          href="#education-container"
          aria-label="Education"
          aria-current={activeNav.id === "educationNav" ? "page" : undefined}
        >
          <svg className="icon" viewBox="0 0 24 24">
            <path d="M4,7.5 l8,-3.5 l8,3.5 l-8,3.5 l-8,-3.5" />
            <path d="M12,7 l-8,2 c0,0,-0.3,0.3,0.3,0.3 l-0.5,3 l1,3 h-2 l1,-3" />
            <path d="M8,9 l-1.5,8 c0,0,0,2,6,2 c0,0,4,0,6,-2 l-1.5,-8" />
          </svg>
          <p className="menu_item_title" id="educationNavTitle">education</p>
        </a>

        <a className="menu_item" id="contactNav"
          style={{ backgroundColor: colorWay[6] }}
          onClick={() => setActiveNav({ id: "contactNav", index: 6 })}
          href="#contact-container"
          aria-label="Contact"
          aria-current={activeNav.id === "contactNav" ? "page" : undefined}
        >
          <svg className="icon" viewBox="0 0 24 24">
            <path d="M6.7,4.8 h10.7 c0.3,0,0.6,0.2,0.7,0.5 l2.8,7.3 c0,0.1,0,0.2,0,0.3 v5.6 c0,0.4-0.4,0.8-0.8,0.8 H3.8
            C3.4,19.3,3,19,3,18.5 v-5.6 c0-0.1,0-0.2,0.1-0.3 L6,5.3C6.1,5,6.4,4.8,6.7,4.8z" />
            <path d="M3.4,12.9 H8 l1.6,2.8 h4.9 l1.5-2.8 h4.6" />
          </svg>
          <p className="menu_item_title" id="contactNavTitle">contact</p>
        </a>

        <div className="menu_border" ref={el => { menuBorderRef.current = el; }}></div>
      </menu>

      <div className="svg-container">
        <svg viewBox="0 0 202.9 45.5">
          <clipPath id="menu" clipPathUnits="objectBoundingBox" transform="scale(0.0049285362247413 0.021978021978022)">
            <path d="M6.7,45.5c5.7,0.1,14.1-0.4,23.3-4c5.7-2.3,9.9-5,18.1-10.5c10.7-7.1,11.8-9.2,20.6-14.3c5-2.9,9.2-5.2,15.2-7
            c7.1-2.1,13.3-2.3,17.6-2.1c4.2-0.2,10.5,0.1,17.6,2.1c6.1,1.8,10.2,4.1,15.2,7c8.8,5,9.9,7.1,20.6,14.3c8.3,5.5,12.4,8.2,18.1,10.5
            c9.2,3.6,17.6,4.2,23.3,4H6.7z" />
          </clipPath>
        </svg>
      </div>
    </div>
  );
}

export default NavBar;
