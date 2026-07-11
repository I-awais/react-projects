import { useState } from 'react';
import TravelList from './TravelList/TravelList';
import Accordion from './Accordian/Accordian';
import TipCalculator from './TipCalculator/TipCalculator';

export default function App() {
  const [activeComponent, setActiveComponent] = useState(null);

  return (
    <div className="main">
      <div className="btn-container">
        <button onClick={() => setActiveComponent('travel')}>
          Travel List
        </button>

        <button onClick={() => setActiveComponent('accordion')}>
          Accordion
        </button>
        <button onClick={() => setActiveComponent('tipCalculator')}>
          Tip Calculator
        </button>
      </div>
      {activeComponent === 'travel' && <TravelList />}
      {activeComponent === 'accordion' && <Accordion />}
      {activeComponent === 'tipCalculator' && <TipCalculator />}
    </div>
  );
}
