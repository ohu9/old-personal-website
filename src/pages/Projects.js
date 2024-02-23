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
    return(<section id='section-projects'>
        {/* <motion.div class='section'>hi</motion.div> */}

        <motion.img src={projects} className='projects'
            animate={{ y: 0, transition: { duration: .7 } }}
            whileHover={{ y: -13, transition: { duration: .7 } }}
        />
        <div className='projects'>
            <p>&emsp;Hello! I’m currently an undergrad at Georgia Tech in my second year studying
                computer science. </p>
            <p>&emsp;I was first drawn to the world of computer programming in middle school when 
                we were assigned a project in Scratch. On presentation day, I looked up to see 
                the game I’d created on everyone’s screens, my custom ‘Game Over’ graphic 
                flashing periodically, and I couldn’t help but smile. Since then, I’ve chased 
                the special satisfaction that comes with delivering a product that’s both 
                functional <i>and</i> aesthetically designed.</p>

            <p>&emsp;As you can see, I’ve done a bit more coding since my drag-and-drop coding days. 
                I got my feet wet in front-end development by coding this website with 
                React, but I’m working towards mastering the full stack. At school, I’m on 
                track to delve deeper into the world of AI, from the technical backbone to 
                the intricacies of LLMs and deep neural networks, and beyond: the ethical 
                implications and AI’s imminent impact on our future.</p>

            {hover && <motion.div className='highlight'
                initial={{ width: 0 }}
                animate={{ width: 145 }}
                transition={{ duration: .4 }}
            ></motion.div>}
        </div>
        <a href="#section-contact"><motion.img src={arrow} className='about-arrow'
                initial={{ opacity: 0}}
                animate={{ 
                    opacity: [1,1,1], y:[0,10,0],
                    transition: {repeat: Infinity, duration: 1.9}}}
                whileHover={{scale:1.05}}/>
            </a>
    </section>);
};
export default Projects;