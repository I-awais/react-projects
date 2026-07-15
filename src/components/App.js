import { useState } from 'react';
import TravelList from './TravelList/TravelList';
import Accordion from './Accordian/Accordian';
import TipCalculator from './TipCalculator/TipCalculator';
import EatNSplit from './Eat-N-Split/EatNSplit';
import UsePopcorn from './PopcornWatch/UsePopcorn';
import StarRating from './StarRating';

export default function App() {
  const [activeComponent, setActiveComponent] = useState(null);

  return (
    <UsePopcorn />
    // <EatNSplit />
    // <div className="main">
    //   <div className="btn-container">
    //     <button onClick={() => setActiveComponent('travel')}>
    //       Travel List
    //     </button>

    //     <button onClick={() => setActiveComponent('accordion')}>
    //       Accordion
    //     </button>
    //     <button onClick={() => setActiveComponent('tipCalculator')}>
    //       Tip Calculator
    //     </button>
    //     <button onClick={() => setActiveComponent('eatNSplit')}>
    //       Eat-N-Split
    //     </button>
    //   </div>
    //   {activeComponent === 'travel' && <TravelList />}
    //   {activeComponent === 'accordion' && <Accordion />}
    //   {activeComponent === 'tipCalculator' && <TipCalculator />}
    //   {activeComponent === 'eatNSplit' && <EatNSplit />}
    // </div>
  );
}
