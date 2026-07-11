import { useState } from 'react';

export default function TipCalculator() {
  const [bill, setBill] = useState('');
  const [tip1, setTip1] = useState(0);
  const [tip2, setTip2] = useState(0);

  const tipAverage = bill * ((tip1 + tip2) / 2 / 100);

  function handleReset() {
    setBill('');
    setTip1(0);
    setTip2(0);
  }
  return (
    <div>
      <BillInput bill={bill} onSetBill={setBill} />
      <SelectPercentage tip={tip1} onSetTip={setTip1}>
        {' '}
        How do you like the service?
      </SelectPercentage>
      <SelectPercentage tip={tip2} onSetTip={setTip2}>
        {' '}
        How did your friend like the service?
      </SelectPercentage>

      {bill > 0 && (
        <>
          {' '}
          <Output bill={bill} tip={tipAverage} />
          <Reset onReset={handleReset} />
        </>
      )}
    </div>
  );
}

function BillInput({ bill, onSetBill }) {
  return (
    <div>
      <label>How much was the bill?</label>
      <input
        type="text"
        value={bill}
        onChange={(e) => onSetBill(Number(e.target.value))}
        placeholder="Enter bill amount"
      />
    </div>
  );
}
function SelectPercentage({ tip, onSetTip, children }) {
  return (
    <div>
      <label>{children}</label>
      <select value={tip} onChange={(e) => onSetTip(Number(e.target.value))}>
        <option value={'0'}>Dissatisfied! 0%</option>
        <option value={'5'}>It was okay! 5%</option>
        <option value={'10'}>It was good! 10%</option>
        <option value={'20'}>Amazing! 20%</option>
      </select>
    </div>
  );
}
function Output({ bill, tip }) {
  return (
    <h3>
      You pay ${tip + bill} (${bill} + ${tip} tip )
    </h3>
  );
}
function Reset({ onReset }) {
  return <button onClick={onReset}>Reset</button>;
}
