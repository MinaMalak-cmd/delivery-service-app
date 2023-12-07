# delivery-service-app

Delivery service app built uisng Node.js, Express, Mongoose, React, Typescript, and react-bootstrap

## 🖥 Demo

Check out a [live demo]('https://drive.google.com/file/d/1U7tcREA0dmbKmObf1YMxwc3_bvZtrNwR/view?usp=sharing').

## 📦 Installation

To go with the latest version please copy and past in your terminal the following steps: <br />

⚠️❗ <b>Take into consideration I'm working on Node version 18.17.1 </b>
```bash
git clone git@github.com:MinaMalak-cmd/delivery-service-app.git
```

Run the server side:

```bash
cd server-side
npm i

create config folder 
inside it add .env file with env variables here is an example 
DB_URL = "mongodb://127.0.0.1:27017/Service-Delivery-App"
TOKEN_SIGNATURE="DHDKWJWWJW"
BEARER_KEY="HDHJkejk__"

npm start
# or
nodemon
```
Run the development server:

```bash

cd client-side

npm i 

create .env file with env variables here is an example
REACT_APP_API_URL = "http://localhost:5000"

npm start
```

