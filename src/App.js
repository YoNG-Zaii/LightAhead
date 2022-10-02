import './App.css';
import HomePage from './components/HomePage';
import Guide from './components/Guide/Guide';
import DetectionModel from './COCO/detection';
import Problem from './components/Problem/Problem';
import Background from './components/Background/Background';
import Solution from './components/Solution';
import Separation2 from './separation/separation2';
import Separation3 from './separation/separation3';

const App = () => {
  return (
    <div className="App">
      <HomePage />
      <Background />
      <Separation2 />
      <Problem />
      <Separation3 />
      <Solution />
      <Separation2 />
      <Guide />
      <Separation3 />
      <DetectionModel />
    </div>
  );
}

export default App;
