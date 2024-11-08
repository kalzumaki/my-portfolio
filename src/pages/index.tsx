import Header from "../components/Header";
import MainSection from "../components/MainSection";
import About from "../components/About";
import Project from "../components/Project";
import Skills from "../components/Skills";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import ScrollToTopButton from "../components/FloationgButton";

const Home = () => {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 font-sans dark:bg-gray-900 dark:text-gray-100">
      {/* Header  */}
      <Header />

      {/* Main Section */}
      <MainSection
        name="Van Kirk A. Lumantas"
        description={`
            I'm a backend developer focused on building reliable systems that work smoothly and scale easily.\n
            With strong backend and server-side skills, I create solutions that boost efficiency and make user experiences better—ready to bring these skills to help your team succeed.`}
        resumeLink="/resume.pdf"
      />

      {/* About Section */}
      <About />

      {/* Projects Section */}
      <Project />

      {/* Skills Section */}
      <Skills />

      {/* Contact Section */}
      <Contact />
      {/* Footer */}
      <Footer />

      <ScrollToTopButton />
    </div>
  );
};

export default Home;
