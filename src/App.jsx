import './App.css';
import Header from './components/Header';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Home from './components/Home';

function App() {
  return (
    <div>
      <Header/>
      <div className="Main">
      <Home />
      <About/>
      <Projects/>
      <Contact />
      </div>
    </div>
  );
}

export default App;
