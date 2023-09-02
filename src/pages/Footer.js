import '../styles/Footer.css';
import { motion } from 'framer-motion';
import email from '../images/email.png';
import li from '../images/li.png';
import git from '../images/git.png';

const imgVariants = {
    hover: {
        opacity:1,
        scale: 1.1
    }
};

export default function Footer() {
    return (<div className="footer">
        <a href='mailto:oliviahu@gatech.edu' target="_blank">
            <motion.img src={email} alt='email'className="footer"
                variants={imgVariants}
                whileHover="hover"
            /></a>
        <a href='https://github.com/ohu9' target="_blank">
            <motion.img src={git} alt='github'className="footer"
                variants={imgVariants}
                whileHover="hover"
            /></a>
        <a href='https://www.linkedin.com/in/oliviahhu/' target="_blank">
            <motion.img src={li} alt='linkedin'className="footer"
                variants={imgVariants}
                whileHover="hover"
            /></a>
    </div>);
};