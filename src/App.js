import './App.css';
import HomePage from './HomePage';
import Guide from './components/Guide/Guide';
import AboutUs from './components/AboutUs/AboutUs';
import VideoInput from './components/VideoInput/VideoInput';

function App() {
  return (
    <div className="App">
      <HomePage />
      <AboutUs />
      <Guide />
      <VideoInput />
    </div>
  );
}

export default App;
