import './App.css';
import Header from './components/Header';
import Path from './components/Path';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Home from './components/Home';
import Footer from './components/Footer';
import Technologies from './components/Technologies';

function App() {
  return (
    <div>
      <Header/>
      <div className="Main">
      <Home />
      <Technologies />
      <Path/>
      <Projects/>
      <Contact />
      <Footer />
      </div>
    </div>
  );
}

export default App;
