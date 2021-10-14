import './App.css';
import {useState, useEffect} from 'react';
import RoomNav from './components/RoomNav';

function App() {
  const [selection, setSelection] = useState('Home');
  return (
    <div className="App">
      <RoomNav selection={selection} setSelection={setSelection}/>
    </div>
  );
}

export default App;
