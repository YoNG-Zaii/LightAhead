import './App.css';
import HomePage from './components/HomePage';
import Guide from './components/Guide/Guide';
import AboutUs from './components/AboutUs/AboutUs';
import VideoInput from './components/VideoInput/VideoInput';
import ImageInput from './components/ImageInput/ImageInput';

const App = () => {
  return (
    <div className="App">
      <HomePage />
      <AboutUs />
      <Guide />
      <VideoInput />
      <ImageInput />
    </div>
  );
}

export default App;
