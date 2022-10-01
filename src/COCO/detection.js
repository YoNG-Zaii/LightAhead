import React, { useRef, useState, useEffect } from "react";
import * as tf from "@tensorflow/tfjs";
import * as cocossd from "@tensorflow-models/coco-ssd";
import Webcam from "react-webcam";
import drawRect from './utilities';
import './detection.css';

const DetectionModel = () => {
  const [activate, setActivate] = useState(false);
  const webcamRef = useRef(null);
  const canvasRef = useRef(null);
  const predictions = useRef([]);

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
      const obj = await net.detect(video);
      console.log(obj);

      // Draw mesh
      const ctx = canvasRef.current.getContext("2d");

      // 5. TODO - Update drawing utility
      drawRect(obj, ctx);
    }
  };

  const Activation = () => {
    setActivate(!activate)
  }

  useEffect(()=>{
    predictions.current = [];
    runCoco();
  },[]);
  
  if(activate)
  return (
    <div className="Model">
        <h2>Time to See the World</h2>
        <button className='activateBtn' onClick={Activation}>Activate Detection Model</button>
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
              width: 640,
              height: 480,
            }}
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
      <div className="Model">
          <h2>Time to See the World</h2>
          <button className='activateBtn' onClick={Activation}>Activate Detection Model</button>
      </div>
    );
}

export default DetectionModel;