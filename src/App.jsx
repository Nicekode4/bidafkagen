import logo from './logo.svg';
import './App.css';
import { useCallback, useMemo, useState } from 'react';

function App() {
const [angle, setAngle] = useState(0)
const [radius, setRadius] = useState(0)
const [PersonWeigh, setPersonWeigh] = useState(75)

const kcal = 7 * 442
const toBaker = 900 * 2 / 1000 // meter



const sliceCalc = useMemo(() => {
return ((angle/360) * Math.PI * radius ** 2)
}, [angle, radius])


  return (
    <div className="App">
      <p>Angle: {angle}</p>
      <input type="number" name="angle" id="" value={angle} onChange={(e) => setAngle(e.target.value)} />
      <p>Vægt: {PersonWeigh}</p>
      <input type="number" name="angle" id="" value={PersonWeigh} onChange={(e) => setPersonWeigh(e.target.value)} />
      <p>Radius: {radius}</p>
      <input type="number" name="radius" id="" value={radius} onChange={(e) => setRadius(e.target.value)} />

      <button >Udregn</button>
       <p>{Math.ceil(sliceCalc)} cm</p>
   <p>Du skal gå til bageren {Math.ceil((kcal / PersonWeigh) / 1.8)} gange for at forbænde en hel kage</p>
    </div>
  );
}

export default App;
