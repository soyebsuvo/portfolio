import About from "../Components/About/About";
import Banner from "../Components/Banner/Banner";
import Contact from "../Components/Contact/Contact";
import Projects from "../Components/Projects/Projects";
import Skills from "../Components/Skills/Skills";

export default function Home() {
  return (
    <div>
      <Banner></Banner>
      <About></About>
      <Projects></Projects>
      <Skills></Skills>
      <Contact></Contact>
    </div>
  )
}
