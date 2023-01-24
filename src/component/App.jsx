import './App.css';
import Heading from './Heading';
import Home from './Home';
import About from './About';
import Experience from './Experience';
import Contact from './Contact';
import Footer from './Footer';
import Education from './Education';

const App = () => {
  return (
    <div className="main-container">
      <Heading />
      <section className="body-container">
        <Home />
        <About />
        <Education />
        <Experience />
        <Contact />
      </section>
      {/* End of body section */}
      <Footer />
    </div>
  );
};

export default App;
