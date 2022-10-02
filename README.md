# 💡 Luminos: A Vision for the Blind
## MLDA DL Week 2022 Theme: AI and Smart Nation
## 🤝 The Team
 - [@YoNG-Zaii](https://github.com/YoNG-Zaii)
 - [@Horstann](https://github.com/Horstann)
 - [@SLAU925](https://github.com/SLAU925)
 - [@blws02](https://github.com/blws02)
 
---

## ❓ Problem Statement
Meet Sam. <br>
His visual impairment makes it a pain in everyday life to navigate his own surroundings. <br>
It gets all the more difficult when he’s all by himself, with no one to help him, exposing him to road hazards and physical injury.


## :gift_heart: Our Solution
What if there was a device that could help Sam detect objects around him in real-time and tells him what he’s looking at? <br>
That is what our ML model does! <br>
It identifies objects from a real time camera feed and reads out what they are. 

- #### Web App: https://luminos-project.vercel.app/
- #### Video Demo: https://www.youtube.com/watch?v=SKLymjKc8Ic

---

## 🧪 Tech

Our software prototype is a web application.
### Front-end
[`ReactJS`](https://reactjs.org/) was used for the components, styling and functions on the web application.

### API
[`TensorflowJS`](https://www.tensorflow.org/js) was used for the object detection model - [`COCO-SSD`](https://github.com/tensorflow/tfjs-models/blob/master/coco-ssd/README.md). [`COCO`](https://viso.ai/computer-vision/coco-dataset/) stands for Common Objects in Context by Microsoft, as the image dataset was created with the goal of advancing image recognition. [`SSD`](https://towardsdatascience.com/ssd-single-shot-detector-for-object-detection-using-multibox-1818603644ca#:~:text=Single%20Shot%20detector%20like%20YOLO,object%20detection%20models%20on%20VOC2007) stands for Single-Shot Multibox Detection and takes only one shot to detect multiple objects present in an image using multibox.<br>
It is significantly faster in speed and high-accuracy object detection algorithm. Through this web application, users can use their own camera-enabled devices to capture the video of their surroundings. The model will identify the objects inside the video. In particular, we want to focus the use of this application among the blind communities.




## 📁 Organisation

- [.streamlit/](https://github.com/Horstann/Stock-Prediction-App/tree/main/.streamlit) contains the front-end configurations of our web app
- [app.py](https://github.com/Horstann/Stock-Prediction-App/blob/main/app.py) contains the Python code of our Streamlit framework, LSTM prediction model and data visualisation
- [requirements.txt](https://github.com/Horstann/Stock-Prediction-App/blob/main/requirements.txt) contains all the libraries and modules required to execute our web app, alongside their respective versions

## ⚙ How To Use
1. First, type in the **ticker** symbol you're looking for.
2. If it is a valid ticker symbol, the app will display a full description of the stock and its interactive time series chart.
3. Next, click the arrow icon on the top left corner. This opens up a sidebar. Select the date you 3. wish to start predicting the stock price from.
4. Give a moment for the model to process your input.
5. And that's it! The prediction will appear magically before your eyes. It's that **easy**!
