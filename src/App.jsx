import { useState, useEffect } from "react";
import ProgressBar from "./components/ProgressBar"


function App() {
  const [progress, setProgress] = useState(0);
  const [theme, setTheme] = useState(() => (
    localStorage.getItem('theme') || 'light'
  ));

  useEffect(() => {
    // Update body class when theme changes
    document.body.className = `${theme}-mode`;
    // Save theme preference
    localStorage.setItem('theme', theme);
  }, [theme]);

  // Add effect to handle auto-reset
  useEffect(() => {
    if (progress === 100) {
      const resetTimer = setTimeout(() => {
        setProgress(0);
      }, 1500); // Wait 1.5 seconds before resetting

      return () => clearTimeout(resetTimer);
    }
  }, [progress]);

  const updateProgress = () => {
    setProgress(prevProgress => {
      const nextProgress = prevProgress + 10;
      return nextProgress <= 100 ? nextProgress : 100;
    });
  };

  const toggleTheme = () => {
    setTheme(prevTheme => prevTheme === 'light' ? 'dark' : 'light');
  };

  return (
    <div className="app-container">
      <button onClick={toggleTheme} className="theme-toggle">
        {theme === 'light' ? '🌙' : '☀️'}
      </button>
      <ProgressBar progress={progress} />
      <button 
        onClick={updateProgress} 
        className="progress-button"
        disabled={progress === 100}
      >
        {progress === 100 ? 'Resetting...' : 'Increase Progress'}
      </button>
    </div>
  );
}

export default App