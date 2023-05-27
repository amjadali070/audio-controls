
import { useState } from 'react';
import './App.css';
import AudioControls from './AudioControls';
import Counter from './Counter';
import DataFecting from './DataFetch';
import TodoList from './Todo';

function App() {
  const [volume, setvolume] = useState(0);
  const [bass, setbass] = useState(0);
  const [mid, setmid] = useState(0);
  const [treble, settreble] = useState(0);

  return (
    <div>
      <AudioControls name="Volume" set={setvolume} value={volume} />
      <br />
      <AudioControls name="Bass" set={setbass} value={bass} />
      <br />
      <AudioControls name="Mid" set={setmid} value={mid} />
      <br />
      <AudioControls name="Treble" set={settreble} value={treble} />
      <br />
      <br />
      <br />
      <Counter/>

      <br />
      <br />
      <br />

      <DataFecting/>

      <br />
      <br />

      <TodoList/>

    </div>    
  );
}

export default App;
