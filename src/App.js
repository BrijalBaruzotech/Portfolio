import Profile from './PortfolioContainer/Home/Profile';
import './App.css';
import Header from './PortfolioContainer/Header/Header';
import Footer from './PortfolioContainer/Footer/Footer';
import AboutMe from './PortfolioContainer/AboutMe/AboutMe';
import Resume from './PortfolioContainer/Resume/Resume';
import ContactMe from './PortfolioContainer/ContactMe/ContactMe';

function App() {
  return (
    <div >
      <Header/>
      <Profile/>
      <Footer/>
      <AboutMe/>
      <Resume/>
      <ContactMe/>
    </div>
  );
}

export default App;
