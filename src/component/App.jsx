import './App.css';
import Heading from './heading/Heading';
import Home from './heading/Home';
import About from './heading/About';
import Experience from './heading/Experience';
import Contact from './heading/Contact';
import Footer from './heading/Footer';

const App = () => {
  return (
    <div className="main-container">
      <Heading />
      <section className="body-container">
        <Home />
        <About />
        <Experience />
        <Contact />
      </section>
      {/* End of body section */}
      <Footer />
    </div>
  );
};

export default App;
