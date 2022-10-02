# 💡 Luminos
## MLDA DL Week 2022 Theme: AI and Smart Nation

## ❓ Problem Statement
The blind communities have been relying on conventional methods such as blind canes. What if they can 'see' the world through technology. That is the topic that we will address in this project.


*A web app that allows users to predict stock prices using LSTM and compare them to actual prices.* <br>
*View it [here](https://share.streamlit.io/rowentey/stock-price/main/app.py). Made by [@RowenTey](https://github.com/RowenTey) & [@Horstann](https://github.com/Horstann)*

#### Video Demo: https://www.youtube.com/watch?v=SKLymjKc8Ic

---

## ❓ Assignment

Being interested in data science and the financial markets, we were interested in how predictive models are applied in forecasting the stock market. So this project allowed us to dive deeper into this topic. The particular model we examined was called the Long Short-Term Memory or LSTM.

*Problem Statement*: Current LSTM price prediction models can be easily thrown off by black swan events akin to Covid-19.

*Our Solution*: We hypothesise that black swan events are characterised by sudden spikes in trading volume. For example, when there is rapid buying or selling in a short amount of time. Our app provides a platform for students, professionals and enthusiasts alike to conveniently experiment with LSTM, and study the relationship between trade volume and the accuracy of LSTM predictions relative to actual prices.

## 🧪 Tech

This website is fully coded with Python. We utilised the [`Streamlit`](https://streamlit.io/) module as our web app's framework, given its simplicity and effectiveness in visualising data.

As for our stock price data, we extracted it via the [`yfinance`](https://pypi.org/project/yfinance/) API.

Data science libraries like, [`Numpy`](https://numpy.org/) and [`Pandas`](https://pandas.pydata.org/) helped us to pre-process and clean our data.

The [`Matplotlib`](https://matplotlib.org/) and [`Seaborn`](https://seaborn.pydata.org/) libraries was later used to construct our time series charts to visualise our data.

Finally, we used the LSTM prediction model to predict stock prices. Our LSTM was built using the machine learning libraries [`Keras`](https://keras.io/), [`Scikit-learn`](https://scikit-learn.org/stable/) and [`Tensorflow`](https://www.tensorflow.org/).


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
