// import { motion } from 'framer-motion';
import { useState } from 'react';
import '../styles/Hello.css';
import Navbar from '../Navbar';
import Hello from './Hello';
import About from './About';
import Contact from './Contact';
import Projects from './Projects';
import Footer from './Footer';

const Home = () => {
    const [page, setPage] = useState('hello');
    return (<>
      <header><Navbar setPage={setPage} /></header>
      <Hello />
      <Footer />

      {/* sections are the entire block in which content is housed */}
      <About />
      <Projects />
      {/* <section id='section-projects'>Projects</section>
      <section id='section-experience'>Experience</section> */}
      <Contact />
    </>);
}
export default Home;
