import ProjectOverview from "../components/projects/ProjectOverview";
import ProjectCategories from "../components/projects/ProjectCategories";
import Navbar from "../global/Navbar";
import Footer from "../global/Footer";
function Projects() {
  return <>
  <Navbar/>
  <ProjectOverview/>
  <ProjectCategories/>
  <Footer/>
  </>
}
export default Projects;