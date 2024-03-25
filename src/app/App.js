import './App.css';
import {Features} from './components/Features';
import {LandingPageHeader} from './components/Header/LandingPageHeader';
 import { Hero} from './components/Hero';
import {PricingSection} from './components/Pricing';

function App() {

  return (<div>
    <LandingPageHeader/>
      <Hero/>  
      <Features/>
      <PricingSection/>
  </div>
   
  );
}

export default App;


