
import { useState } from 'react';
import './App.css';
import AudioControls from './AudioControls';

function App() {
  const [volume, setvolume] = useState(0);
  const [bass, setbass] = useState(0);
  const [mid, setmid] = useState(0);
  const [treble, settreble] = useState(0);
  return (
    <>
      <AudioControls name="Volume" set={setvolume} value={volume} />
      <br />
      <AudioControls name="Bass" set={setbass} value={bass} />
      <br />
      <AudioControls name="Mid" set={setmid} value={mid} />
      <br />
      <AudioControls name="Treble" set={settreble} value={treble} />
    </>
  );
}

export default App;
