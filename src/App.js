  // import logo from './logo.svg';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import { useState } from 'react'
import Alert from './components/Alert';
import React from "react";
import {
  BrowserRouter as Router,
  // Switch,
  Routes,
  Route,
  // Link
} from "react-router-dom";


// let myName='Himanshu';
// let myNameTwo='<b>Himanshu Don</b>';  // this is not a bug 
function App() {
  const [mode, setmode] = useState('light');  //whether dark mode is enableor not

  const [alert, setalert] = useState(null)

  const showAlert = (message, type) => {
    setalert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setalert(null)
    }, 1500)
  }

  // Dark and light theam
  const handleToggleMode = () => {
    if (mode === 'light') {
      setmode('dark')
      document.body.style.backgroundColor = '#0f2332';
      showAlert("Dark mode has been enabled", "success");
      document.title = 'TextUtils - Dark Mode';
      // setInterval(() => {
      //   document.title = 'Download now!';
      // }, 400);
      // setInterval(() => {
      //   document.title = 'TextUtils is Amazing!';
      // }, 703);
      // we use this set interval for blinking the text like in evil websites example "your mobile in danger" or "install this antivirus" etc
    } else {
      setmode('light')
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled", "success");
      document.title = 'TextUtils - Light Mode';
    }
  }


  const handleToggleModeTwo = () => {
    if (mode === 'light') {
      setmode('dark')
      document.body.style.backgroundColor = '#0f2332';
      showAlert("Dark mode has been enabled", "success");
      document.title = 'TextUtils - Dark Mode';
    } else {
      setmode('light')
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled", "success");
      document.title = 'TextUtils - Light Mode';
    }
  }

  const handleToggleModeThree = () => {
    if (mode === 'light') {
      setmode('dark')
      document.body.style.backgroundColor = '#0f2332';
      showAlert("Dark mode has been enabled", "success");
      document.title = 'TextUtils - Dark Mode';
    } else {
      setmode('light')
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled", "success");
      document.title = 'TextUtils - Light Mode';
    }
  }
  const handleToggleModeFour = () => {
    if (mode === 'light') {
      setmode('dark')
      document.body.style.backgroundColor = '#0f2332';
      showAlert("Dark mode has been enabled", "success");
      document.title = 'TextUtils - Dark Mode';
    } else {
      setmode('light')
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled", "success");
      document.title = 'TextUtils - Light Mode';
    }
  }

  return (<>
    <Router>
      {/* <Navbar/> */}
      {/* this will show the default properties */}
      <Navbar title="Text Utils" aboutText="About TextUtiles" modeIs={mode} toggleMode={handleToggleMode} toggleModeTwo={handleToggleModeTwo} toggleModeThree={handleToggleModeThree} toggleModeFour={handleToggleModeFour} />
      {/* if we passes the number then we got error because we give the proptype is string */}
      {/* we can change from here if we make the another web site */}
      <Alert alert={alert} />
      <div className='container my-3'>
        {/* container is the class in bootstrap that will middle the container
      my-3 is also the class that will margin the content in y direction */}
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        {/* <Switch> */}
        {/* we can not use switch because it is deprecated from react now we use Routes instead of switch */}
        <Routes>
          {/* /users ----> component 1
          /users/home ----> component 2 
          to avoid this conflict we should use exact*/}
          <Route exact path="/about"  element={<About/>}/>  
          <Route exact path="/" element={<TextForm showAlert={showAlert} modeIs={mode} />}/>
        </Routes>
        {/* </Switch> */}
        {/* <TextForm showAlert={showAlert} modeIs={mode} /> */}
      </div>
    </Router>
  </>
  );
}

export default App;

/* <nav>
<li>Home</li>
<li>About</li>
<li>Contact</li>
</nav>
<div className Name='container'>
<h1>Hello {myName}
this is js in the curly braces
</h1>
<h2>{myNameTwo}</h2>
this will be rendering the tags also but we can also use this by some method soon
<p>
Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas eaque voluptatum quas commodi molestiae ad laboriosam, illo nemo repudiandae nisi neque asperiores repellat at, placeat cum beatae nesciunt, natus recusandae.Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas eaque voluptatum quas commodi molestiae ad laboriosam, illo nemo repudiandae nisi neque asperiores repellat at, placeat cum beatae nesciunt, natus recusandae.Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas eaque voluptatum quas commodi molestiae ad laboriosam, illo nemo repudiandae nisi neque asperiores repellat at, placeat cum beatae nesciunt, natus recusandae. 
</p>
</div>
<div className Name='blank'>Lovely</div> */