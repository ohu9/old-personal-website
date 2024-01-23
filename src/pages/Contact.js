import { motion } from 'framer-motion';
import '../styles/Contact.css';

import contact from '../images/contact.png';
import arrow from '../images/up-arrow.png';
import back_to_top from '../images/back-to-top.jpeg';

const labels = ['email', 'github', 'linkedin']
const buttons = labels.map(label => <button className='contact-btn' >{label}</button>)

export default function Contact() {
    return (<section id='section-contact'>
      <div className='contact'>
        <motion.img src={contact} alt='Contact Me!' className='contact'
          transition={{ duration: 1 }}
          // whileHover={{ y: -10 }}
          animate={{ 
            y:[0,-10,0],
            transition: {repeat: Infinity, duration: 2}}}
        />
      </div>
      <div className='contact-btn'>
          <a href="mailto:oliviahu@gatech.edu">{buttons[0]}</a>
          <a href="https://github.com/ohu9" target="_blank">{buttons[1]}</a>
          <a href="https://www.linkedin.com/in/oliviahhu/" target="_blank">{buttons[2]}</a>
      </div>
      <div className='up-arrow'>
        <a href="#top"><motion.img src={arrow} className='up-arrow'
          initial={{ opacity: 0}}
          animate={{ 
              opacity: [1,1,1], y:[0,10,0],
              transition: {repeat: Infinity, delay: .3, duration: 1.9}}}
          whileHover={{ scale: 1.06 }} />
        </a>
        <a href="#top">
          <motion.img src={back_to_top} className='back-to-top' whileHover={{ scale: 1.06 }}/>
        </a>
      </div>
    </section>);
};
