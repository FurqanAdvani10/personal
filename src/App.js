import './App.css';
import Footer from './Pages/footer/footer';
import HeroSection from './Pages/hero/hero';
import OurTeam from './Pages/members/ourTeam';
import Header from './Pages/nabar';
import Offering from './Pages/offering /offer';
import SubFooter from './Pages/sub-footer/sub';

function App() {
  return (
    <div className="App">
     <Header />
     <div style={{ height: '70px', padding: '0px' }}>
            </div>
            <HeroSection />
     <Offering />
     <OurTeam />
     <SubFooter />
     <Footer />
    </div>
  );
}

export default App;
