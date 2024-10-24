
import Navbar from '../src/components/Navbar'
import Hero from '../src/sections/Hero'
import About from '../src/sections/About'
import Explore from '../src/sections/Explore'
import GetStarted from '../src/sections/GetStarted'
import WhatsNew from '../src/sections/WhatsNew'
import World from '../src/sections/World'
import Insights from '../src/sections/Insights'
import Feedback from '../src/sections/Feedback'
import Footer from '../src/components/Footer'
import './styles/globals.css';
function App() {
  return (
    <div className="bg-primary-black overflow-hidden">
      <Navbar />
      <Hero />
      <div className="relative">
        <About />
        <div className="gradient-03 z-0" />
        <Explore />
      </div>
      <div className="relative">
        <GetStarted />
        <div className="gradient-04 z-0" />
        <WhatsNew />
      </div>
      <World />
      <div className="relative">
        <Insights />
        <div className="gradient-04 z-0" />
        <Feedback />
      </div>
      <Footer />
    </div>
  );
}

export default App;
