import React, { useEffect } from 'react';
import './index.css';
import useTimer from './hooks/useTimer';
import formatTime from './utils/formatTime';

const App: React.FC = () => {
  const { time, isRunning, startTimer, stopTimer, resetTimer } = useTimer();

  useEffect(() => {
    if (isRunning) {
      document.title = `⏱️ ${formatTime(time)} - StopWatch`;
    } else {
      document.title = 'StopWatch - Fabulous Timer';
    }
    
    return () => {
      document.title = 'StopWatch - Fabulous Timer';
    };
  }, [time, isRunning]);

  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center bg-gradient-to-br from-purple-600 via-blue-500 to-teal-400 text-white">
      <h1 className="text-6xl font-extrabold mb-10 uppercase tracking-wider text-center text-white drop-shadow-lg">
        <span className="inline-block transform hover:scale-110 transition-transform duration-300">S</span>
        <span className="inline-block transform hover:scale-110 transition-transform duration-300">t</span>
        <span className="inline-block transform hover:scale-110 transition-transform duration-300">o</span>
        <span className="inline-block transform hover:scale-110 transition-transform duration-300">p</span>
        <span className="inline-block transform hover:scale-110 transition-transform duration-300">W</span>
        <span className="inline-block transform hover:scale-110 transition-transform duration-300">a</span>
        <span className="inline-block transform hover:scale-110 transition-transform duration-300">t</span>
        <span className="inline-block transform hover:scale-110 transition-transform duration-300">c</span>
        <span className="inline-block transform hover:scale-110 transition-transform duration-300">h</span>
      </h1>
      
      <div className="bg-white bg-opacity-20 backdrop-filter backdrop-blur-lg p-10 rounded-2xl shadow-2xl border border-white border-opacity-20 flex flex-col items-center transform hover:scale-105 transition-transform duration-300">
        <div className="text-7xl font-mono mb-10 text-white font-bold relative">
          {formatTime(time)}
          <div className="absolute -bottom-3 left-0 right-0 h-0.5 bg-white bg-opacity-50 rounded"></div>
        </div>
        
        <div className="flex flex-wrap justify-center gap-4">
          <button 
            onClick={startTimer} 
            disabled={isRunning}
            className="cursor-pointer bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-8 rounded-full disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 transform hover:scale-105 active:scale-95 shadow-lg">
            Start
          </button>
          <button 
            onClick={stopTimer}
            disabled={!isRunning}
            className="cursor-pointer bg-red-500 hover:bg-red-600 text-white font-bold py-3 px-8 rounded-full disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 transform hover:scale-105 active:scale-95 shadow-lg">
            Stop
          </button>
          <button 
            onClick={resetTimer}
            className="cursor-pointer bg-gray-700 hover:bg-gray-800 text-white font-bold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105 active:scale-95 shadow-lg">
            Reset
          </button>
        </div>
      </div>
      
      <footer className="mt-16 text-center">
        <a 
          href="https://www.zapt.ai" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="text-white text-opacity-80 hover:text-opacity-100 font-semibold transition-colors duration-300 border-b-2 border-transparent hover:border-white pb-1">
          Made on ZAPT
        </a>
      </footer>
    </div>
  );
};

export default App;