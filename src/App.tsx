import './App.css';
import {useState} from 'react';

const Incbutton = ({diff, val, setVal}:{
  diff:number, 
  val: number, 
  setVal:React.Dispatch<React.SetStateAction<number>>
}) => {
  const clicked = () => {
    setVal(val + diff)
  }
  return(
  <button onClick  = {clicked}>{diff}</button>
  );
}


function App() {
  const[cnt, setCnt] = useState(0);
  return (
    <div className="App">
      <Incbutton diff = {-1} val = {cnt} setVal = {setCnt}/>
      {cnt}
      <Incbutton diff = {1} val = {cnt} setVal = {setCnt}/>
    </div>
  );
}

export default App;
