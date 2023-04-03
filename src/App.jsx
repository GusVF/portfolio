import './App.css';
import Header from './components/Header';
import MyPath from './components/MyPath';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Home from './components/Home';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Header/>
      <div className="Main">
      <Home />
      <MyPath/>
      <Projects/>
      <Contact />
      <Footer />
      </div>
    </div>
  );
}

export default App;
