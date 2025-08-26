import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from "./components/Footer";
import ModelAssistant from './components/ModelAssistant';

function App() {
  return (
    <div className="bg-black text-white min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Projects />
      {/* Chatbot Section */}
      <section id="assistant" className="bg-gray-100 py-16">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h3 className="text-3xl font-bold mb-6">Train Model Assistant</h3>
          <ModelAssistant />
        </div>
      </section>
      <Contact />
      <Footer/>
    </div>
  );
}

export default App;