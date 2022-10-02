import React, { useRef, useState, useEffect } from "react";
import * as tf from "@tensorflow/tfjs";
import * as cocossd from "@tensorflow-models/coco-ssd";
import Speech from 'react-speech';
import Webcam from "react-webcam";
import drawRect from './utilities';
import './detection.css';

const DetectionModel = () => {
  const [activate, setActivate] = useState(false);
  const [cameraFacing, setCameraFacing] = useState('Selfie');
  const webcamRef = useRef(null);
  const canvasRef = useRef(null);
  const predictions = useRef([]);
  const lastPredict = useRef([]);

  // Main function
  const runCoco = async () => {
    // 3. TODO - Load network 
    const net = await cocossd.load();
    
    //  Loop and detect hands
    setInterval(() => {
      detect(net);
    }, 10);
  };

  const detect = async (net) => {
    // Check data is available
    if (
      typeof webcamRef.current !== "undefined" &&
      webcamRef.current !== null &&
      webcamRef.current.video.readyState === 4
    ) {
      // Get Video Properties
      const video = webcamRef.current.video;
      const videoWidth = webcamRef.current.video.videoWidth;
      const videoHeight = webcamRef.current.video.videoHeight;

      // Set video width
      webcamRef.current.video.width = videoWidth;
      webcamRef.current.video.height = videoHeight;

      // Set canvas height and width
      canvasRef.current.width = videoWidth;
      canvasRef.current.height = videoHeight;

      // 4. TODO - Make Detections
      const objs = await net.detect(video);

      // Predictions storage
      objs.forEach((obj) => {
        if(!predictions.current.includes(obj.class)){
          predictions.current.push(obj.class);
          console.log(predictions.current);
        }
      })

      // Draw mesh
      const ctx = canvasRef.current.getContext("2d");

      // 5. TODO - Update drawing utility
      drawRect(objs, ctx);
    }
  };

  const handleActivation = () => {
    setActivate(!activate)
  }

  const handleCamera = () => {
    if(cameraFacing === 'Selfie')
      setCameraFacing('Environment')
    else
      setCameraFacing('Selfie')
  }

  const result = () => {
    lastPredict.current = predictions.current;
    predictions.current = [];
    setActivate(false);
  }

  const videoConstraints = {
    width: 640,
    height: 720,
    facingMode: cameraFacing === 'Selfie'? 'user' : { exact: 'environment' }
  };

  const style = {
    container: { },
    text: { },
    buttons: { },
    play: {
      hover: {
        backgroundColor: 'GhostWhite'
      },
      button: {
        cursor: 'pointer',
        outline: 'none',
        backgroundColor: 'Gainsboro',
        border: 'solid 1px rgba(255,255,255,1)',
        borderRadius: 6
      }
    },
    pause: {
      play: { },
      hover: { }
    },
    stop: {
      play: { },
      hover: { },
      button: { }
    },
    resume: {
      play: { },
      hover: { },
      button: { }
    }
  };

  useEffect(() => {
    runCoco();
  });
  
  if(activate)
  return (
    <div className="model">
        <h2>Time to See the World</h2>
        <button className='activateBtn' onClick={handleActivation}>Deactivate Detection Model</button>
        <button className='cameraBtn' onClick={handleCamera}>{'Current: '+cameraFacing+' Camera'}</button>
        <button className='resultBtn' onClick={result}>Result</button>
        {lastPredict.current.map((obj) => {
            return <div><Speech 
            style={style}
            text={obj} 
            textAsButton={true} 
            pitch="1"
            rate="1"
            volume="1"
            lang="en-GB"
            voice="Daniel" /></div>
          })
        }
        <br></br> 
          <Webcam
            ref={webcamRef}
            muted={true} 
            style={{
              position: "absolute",
              marginLeft: "auto",
              marginRight: "auto",
              left: 0,
              right: 0,
              textAlign: "center",
              zindex: 9,
            }}
            videoConstraints = {videoConstraints}
          />

          <canvas
            ref={canvasRef}
            style={{
              position: "absolute",
              marginLeft: "auto",
              marginRight: "auto",
              left: 0,
              right: 0,
              textAlign: "center",
              zindex: 8,
              width: 640,
              height: 480,
            }}
          />
    </div>
  );
  else
    return (
      <div className="model">
          <h2 className='topic'>Time to See the World</h2>
          <button className='activateBtn' onClick={handleActivation}>Activate Detection Model</button>
          <button className='cameraBtn' onClick={handleCamera}>{'Current: '+cameraFacing+' Camera'}</button>
          <button className='resultBtn' onClick={result}>Result</button>
          {lastPredict.current.map((obj) => {
              return <div><Speech 
              style={style}
              text={obj} 
              textAsButton={true} 
              pitch="1"
              rate="1"
              volume="1"
              lang="en-GB"
              voice="Daniel" /></div>
            })
          }
      </div>
    );
}

export default DetectionModel;