import React from 'react';
import './index.css';
import useTimer from './hooks/useTimer';
import formatTime from './utils/formatTime';

const App: React.FC = () => {
  const { time, isRunning, startTimer, stopTimer, resetTimer } = useTimer();

  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center bg-gray-100 text-gray-900">
      <h1 className="text-5xl font-extrabold mb-8">Stopwatch Timer</h1>
      <div className="bg-white p-8 rounded-xl shadow-lg flex flex-col items-center">
        <div className="text-6xl font-mono mb-8">
          {formatTime(time)}
        </div>
        <div className="flex space-x-4">
          <button 
            onClick={startTimer} 
            disabled={isRunning}
            className="cursor-pointer bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded disabled:opacity-50 disabled:cursor-not-allowed transition">
            Start
          </button>
          <button 
            onClick={stopTimer}
            disabled={!isRunning}
            className="cursor-pointer bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded disabled:opacity-50 disabled:cursor-not-allowed transition">
            Stop
          </button>
          <button 
            onClick={resetTimer}
            className="cursor-pointer bg-gray-500 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded transition">
            Reset
          </button>
        </div>
      </div>
      <footer className="mt-12">
        <a href="https://www.zapt.ai" target="_blank" rel="noopener noreferrer" className="text-sm text-gray-600">
          Made on ZAPT
        </a>
      </footer>
    </div>
  );
};

export default App;