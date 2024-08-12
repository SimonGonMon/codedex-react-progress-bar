import { useState } from 'react';
import './App.css';
import ProgressBar from './ProgressBar';

function App() {
  const [progress, setProgress] = useState(0);

  function updateProgress() {
    if (progress >= 100) {
      setProgress(0);
      return;
    }

    setProgress(progress + 10);
  }

  return (
    <div>
      <ProgressBar progress={progress} />
      <button onClick={updateProgress}>Increase Progress</button>
    </div>
  );
}

export default App;
