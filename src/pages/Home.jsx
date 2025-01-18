import Navbar from "../global/Navbar";
import HomeHero from "../components/home/HomeHero";
import HomeProjects from "../components/home/HomeProjects";
import Testimonials from "../components/home/Testimonials";
import HomeContact from "../components/home/HomeContact";
import Footer from "../global/Footer";
function Home() {
  return <>
  <Navbar/>
  <HomeHero/>
  <HomeProjects/>
  <Testimonials/>
  <HomeContact/>
  <Footer/>
  </>
}
export default Home;