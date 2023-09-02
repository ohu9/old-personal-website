import { motion } from 'framer-motion';
import hello from '../images/hello.png';
import goat from '../images/goat.png';
import bluebox from '../images/bluebox.png';
import arrow from '../images/arrow.png';

export default function Hello() {
    return (
        <section className='front-page'>
            <motion.img src={hello} className='layer3 hello'
                initial={{ x: 25, opacity:0 }}
                animate={{ x: 0 , opacity:1 }}
                transition={{ duration: 1 }}
                whileHover={{ y: -10 }}
            />
            <motion.div className='layer3 h'
                initial={{ x:50, opacity:0 }}
                animate={{ x:0 , opacity:1, transition: { delay: .5, duration: 1 } }}>
                I'm Olivia Hu:
            </motion.div>

            <motion.p className='layer3' 
                initial={{ x:50, opacity:0 }} 
                animate={{ x:0 , opacity:1 }} 
                transition={{ delay: .7, duration: 1 }}>
                aspiring full-stack developer</motion.p>
            <motion.p className='layer3' 
                initial={{ x:50, opacity:0 }} 
                animate={{ x:0 , opacity:1 }} 
                transition={{ delay: .8, duration: 1 }}>
                computer science undergraduate</motion.p>
            <motion.p className='layer3' 
                initial={{ x:50, opacity:0 }} 
                animate={{ x:0 , opacity:1 }} 
                transition={{ delay: .9, duration: 1 }}>
                at Georgia Tech</motion.p>

            <motion.p className='layer3 download' 
                initial={{ x:50, opacity:0 }} 
                animate={{ x:0 , opacity:1 }} t
                transition={{ delay: 1, duration: 1 }}>
                <a href="https://drive.google.com/file/d/1bNhmnoFNlzsFNvxx0OTKhnY_nhL20t4z/view?usp=sharing" target="_blank"><button className='download'>view resume</button></a>
                {/* <a href='src/olivia-hu-resume.pdf' download='olivia-hu-resume'><button className='download'>download resume</button></a> */}
            </motion.p>

            <motion.img src={goat} className='layer2 goat' 
                initial={{ y:-50 }} 
                animate={{ y:0 }}
                whileHover={{ x: -6, y: -10 }}
                transition={{ duration: 1 }}/>
            <motion.img src={bluebox} className='layer1 bluebox' 
                initial={{ y:-20 }} 
                animate={{ y:0 }}
                transition={{duration: .8 }}/>
            <a href="#section-about"><motion.img src={arrow} className='arrow'
                initial={{ opacity: 0}}
                animate={{ 
                    opacity: [1,1,1], y:[0,10,0],
                    transition: {repeat: Infinity, duration: 1.9}}}
                whileHover={{scale:1.05}}/>
            </a>
        </section>
    );
};