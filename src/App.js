import './App.css';
import Completed from './Pages/completd';
import Footer from './Pages/footer/footer';
import HeroSection from './Pages/hero/hero';
import OurTeam from './Pages/members/ourTeam';
import Header from './Pages/nabar';
import Offering from './Pages/offering /offer';
import Projects from './Pages/projects/projects';
import Ready from './Pages/ready';
import SubFooter from './Pages/sub-footer/sub';
import Testimonial from './Pages/testimonial/test';

function App() {
  return (
    <div className="App">
     <Header />
     <div style={{ height: '70px', padding: '0px' }}>
            </div>
            <HeroSection />
     <Offering />
     {/* <Completed /> */}
     <Ready />
     <OurTeam />
     <Projects />
     <Testimonial />
     <SubFooter />
     <Footer />
    </div>
  );
}

export default App;
