import React from 'react';
import '../pages.css'
import './contact.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUpRightFromSquare, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
    faGithub,
    faLinkedin,
  } from "@fortawesome/free-brands-svg-icons";

const Contact = () => {
    return (
        <div className="container" id="contact-container">
            <div className="page-assets">

            </div>
            <div className="content" id="contact-content">
                <div className="section">
                    <div className='sub-section' id="contact-me">
                        <h1 
                        >
                            contact me
                        </h1>
                        <div id="contact-links">
                            <ContactLink
                            link={"https://www.github.com/ashleythorlin"}
                            icon={faGithub}
                            />
                            <ContactLink
                            link={"https://www.linkedin.com/in/ashley-thorlin"}
                            icon={faLinkedin}
                            />
                            <ContactLink
                            link={"mailto:ashleythorlin@gmail.com"}
                            icon={faEnvelope}
                            />
                        </div>
                    </div>
                    <ResumeLink />
                </div>
            </div>
        </div>
    )
}

interface ContactProps {
    link: string;
    icon: any;
  }

const ContactLink = (props: ContactProps) => {
    return (
        <a 
        className="link contact-link"
        href={props.link}
        >
            <FontAwesomeIcon icon={props.icon} size='sm'/>
        </a>
        )
}

const ResumeLink = () => {
    const link = "https://docs.google.com/document/d/1yI4ytS8uV8nLnPgFpWSELHJcQo1wFoPgBaNN06RFNZk/edit?usp=sharing"
    return (
        <a 
        className="link resume-link"
        href={link}
        target="_blank"
        rel="noreferrer"
        >
            <h1>resume</h1>
            <FontAwesomeIcon icon={faArrowUpRightFromSquare} size='sm'/>
        </a>
        )
}

export default Contact