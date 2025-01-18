import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Skills from '../components/about/Skills';
import CTA from '../components/about/CTA';
import AboutHero from "../components/about/AboutHero";
import Navbar from "../global/Navbar";
import Footer from "../global/Footer";


const About = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <div>
      {/* Other About Components */}
      <Navbar/>
      <AboutHero/>
      <Skills />
      <CTA/>
      <Footer/>
    </div>
  );
};

export default About;
