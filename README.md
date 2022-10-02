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

- #### [Web App](https://luminos-project.vercel.app/)
- #### [Video Demo](https://www.youtube.com/shorts/pRgkEFUXJ0U)

---

## 🧪 Tech

Our software prototype is a web application.
### Front-end
[`ReactJS`](https://reactjs.org/) was used for the components, styling and functions on the web application.

### API
[`TensorflowJS`](https://www.tensorflow.org/js) was used for the object detection model - [`COCO-SSD`](https://github.com/tensorflow/tfjs-models/blob/master/coco-ssd/README.md).<br><br>
[`COCO`](https://viso.ai/computer-vision/coco-dataset/) stands for Common Objects in Context by Microsoft, as the image dataset was created with the goal of advancing image recognition.<br><br>
[`SSD`](https://towardsdatascience.com/ssd-single-shot-detector-for-object-detection-using-multibox-1818603644ca#:~:text=Single%20Shot%20detector%20like%20YOLO,object%20detection%20models%20on%20VOC2007) stands for Single-Shot Multibox Detection and takes only one shot to detect multiple objects present in an image using multibox.<br><br>
It is significantly faster in speed and high-accuracy object detection algorithm. Through this web application, users can use their own camera-enabled devices to capture the video of their surroundings. The model will identify the objects inside the video. In particular, we want to focus the use of this application among the blind communities.


## ⚙ How To Use
1. First, navigate to [`Luminos™`](https://luminos-project.vercel.app/).
2. Scroll to the 'Our Solution: Time to See the World' section.
3. Activate the detection model. (Please provide permission to the browser for the use of webcam/camera)
4. Choose your point of view (Front/rear camera).
5. Scan around your surroundings.
6. Select the 'Results' button.
7. To get audio feedback, press the list of results.
