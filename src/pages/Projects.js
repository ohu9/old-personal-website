import { useState } from 'react';
import { motion } from 'framer-motion';
import '../styles/Projects.css';

import projects from '../images/projects.png';
import arrow from '../images/arrow.png';


const Projects = () => {
    const [hover, setHover] = useState(true);
    function onMouseOver() {
        setHover(true);
        console.log(hover);
    }
    return(
    <section className='projects' id='section-projects'>
        <motion.img src={projects} className='projects'
            animate={{ y: 0, transition: { duration: .7 } }}
            whileHover={{ y: -13, transition: { duration: .7 } }}
        />
        <div className='projects'>
            <p> A work in progress...
                <br />Current projects I'm working on: (<i>click to see more</i>)
            </p>
            <div className="project-buttons">
                <a href="#top" target="_blank" className="project-button">
                    <button className="project-button">This website!</button>
                </a>
                <a href="https://www.gtagora.com" target="_blank" className="project-button">
                    <button className="project-button">Website for <i>Agora</i>, a literary journal at Georgia Tech
                    <ul>
                        <li>Prototyping: Figma</li>
                        <li>Tech stack: React, TypeScript, Expo, Next.js</li>
                        <li>Public repository <a className="link" href="https://github.com/GTagora/AgoraFrontend.git" target="_blank">here</a></li>
                    </ul>
                    </button>
                </a>
                <a href="https://educast.library.gatech.edu/" target="_blank" className="project-button">
                    <button className="project-button">Website for <b>Empathy Bytes</b>, a vertically integrated project at Georgia Tech
                    <ul>
                        <li>Tech stack: React, Gatsby, GraphQL, Drupal</li>
                        <li>Public repository: <a className="link" href="https://github.com/EmpathyBytes/empathy-bytes-2024.git" target="_blank">here</a></li>
                    </ul>
                    </button>
                </a>
            </div>
        </div>
        <a href="#section-contact"><motion.img src={arrow} className='projects-arrow'
                initial={{ opacity: 0}}
                animate={{ 
                    opacity: [1,1,1], y:[0,10,0],
                    transition: {repeat: Infinity, duration: 1.9}}}
                whileHover={{scale:1.05}}/>
            </a>
    </section>);
};
export default Projects;