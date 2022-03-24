import Profile from "./PortfolioContainer/Home/Profile";
import "./App.css";
import Header from "./PortfolioContainer/Header/Header";
import Footer from "./PortfolioContainer/Footer/Footer";
import AboutMe from "./PortfolioContainer/AboutMe/AboutMe";
import Resume from "./PortfolioContainer/Resume/Resume";
import Testimonial from "./PortfolioContainer/Testimonial/Testimonial";
import Contaactme from "./PortfolioContainer/ContactMe/Contaactme";

function App() {
  return (
    <div>
      <Header />
      <div id="home">
        <Profile />
      </div>
      <Footer />
      <div id="aboutMe">
        <AboutMe />
      </div>
      <div id="resume">
        <Resume />
      </div>
      <div id="testimonial">
        <Testimonial />
      </div>
      <div id="contactMe">
        <Contaactme />
      </div>
    </div>
  );
}

export default App;
