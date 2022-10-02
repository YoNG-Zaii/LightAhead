import './App.css';
import HomePage from './components/HomePage';
import Guide from './components/Guide/Guide';
import DetectionModel from './COCO/detection';
import Problem from './components/Problem/Problem';
import Background from './components/Background/Background';
import Separation1 from './separation/separation1';
import Separation2 from './separation/separation2';
import Separation3 from './separation/separation3';

const App = () => {
  return (
    <div className="App">
      <HomePage />
      <Separation1 />
      <Background />
      <Separation2 />
      <Problem />
      <Separation3 />
      <Guide />
      <Separation2 />
      <DetectionModel />
    </div>
  );
}

export default App;
