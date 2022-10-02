import './App.css';
import HomePage from './components/HomePage';
import Guide from './components/Guide/Guide';
import AboutUs from './components/AboutUs/AboutUs';
import DetectionModel from './COCO/detection';
import Problem from './components/Problem/Problem';
import Background from './components/Background/Background';

const App = () => {
  return (
    <div className="App">
      <HomePage />
      <Background />
      <Problem />
      {/* <AboutUs /> */}
      <Guide />
      <DetectionModel />
    </div>
  );
}

export default App;
