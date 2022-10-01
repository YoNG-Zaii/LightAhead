import './App.css';
import HomePage from './components/HomePage';
import Guide from './components/Guide/Guide';
import AboutUs from './components/AboutUs/AboutUs';
import DetectionModel from './COCO/detection';

const App = () => {
  return (
    <div className="App">
      <HomePage />
      <AboutUs />
      <Guide />
      <DetectionModel />
    </div>
  );
}

export default App;
