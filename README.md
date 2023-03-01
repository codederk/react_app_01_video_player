# Video Player React App Project

- App.js

```js
import React, { useState } from "react";
import Menu from "./components/Menu";
import Video from "./components/Video";

const VIDEOS = {
  fast: "https://content.codecademy.com/courses/React/react_video-fast.mp4",
  slow: "https://content.codecademy.com/courses/React/react_video-slow.mp4",
  cute: "https://content.codecademy.com/courses/React/react_video-cute.mp4",
  eek: "https://content.codecademy.com/courses/React/react_video-eek.mp4",
};

const App = () => {
  const [src, setSrc] = useState("");

  const chooseVideo = (e) => {
    setSrc(VIDEOS[e]);
  };

  return (
    <div className="container">
      <h1>Video Player</h1>
      <Menu chooseVideo={chooseVideo} />
      <Video src={src} />
    </div>
  );
};

export default App;
```

- index.js

```js
import React from "react";
import ReactDOM from "react-dom/client";
import "./style.css";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
```

### Components

- Menu.js

```js
import React from "react";

const Menu = (props) => {
  const handleClick = (e) => {
    const text = e.target.value;
    props.chooseVideo(text);
  };

  return (
    <form>
      <input
        type="radio"
        name="src"
        value="fast"
        id="fast"
        onClick={handleClick}
      />
      <label htmlFor="fast">fast</label>
      <input
        type="radio"
        name="src"
        value="slow"
        id="slow"
        onClick={handleClick}
      />
      <label htmlFor="slow">slow</label>
      <input
        type="radio"
        name="src"
        value="cute"
        id="cute"
        onClick={handleClick}
      />
      <label htmlFor="cute">cute</label>
      <input
        type="radio"
        name="src"
        value="eek"
        id="eek"
        onClick={handleClick}
      />
      <label htmlFor="eek">eek</label>
    </form>
  );
};

export default Menu;
```

- Video.js

```js
import React from "react";

const Video = (props) => {
  return (
    <div>
      <video src={props.src} controls autoPlay muted></video>
    </div>
  );
};

export default Video;
```

### Style

- style.css

```css
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  background-color: #8d8d8d;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

.container {
  background-color: #fff;
  padding: 30px;
  text-align: center;
  border-radius: 4px;
}

.container h1 {
  text-decoration: underline;
  margin-bottom: 24px;
}

.container form {
  margin-bottom: 12px;
}

.container form input {
  margin-right: 4px;
}

.container form label {
  margin-right: 16px;
}

.container video {
  width: 576px;
  height: 300px;
}
```
