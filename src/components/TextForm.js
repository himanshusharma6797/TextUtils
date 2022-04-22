import React, { useState } from "react";

export default function TextForm(props) {
  // Making in UpperCase
  const handleUpClick = () => {
    console.log("Uppercase was clicked");
    // settext('You have clicked on handle up click')
    let toTheUpperCase = text.toUpperCase();
    settext(toTheUpperCase);
    // now we change the text to uppercase
    props.showAlert('Converted to uppercase!', 'success');
  };
  // Making in LowerCase
  const handleLoClick = () => {
    console.log("Lowercase was clicked");
    // settext('You have clicked on handle up click')
    let toTheLowerCase = text.toLowerCase();
    settext(toTheLowerCase);
    // now we change the text to lowercase
    props.showAlert('Converted to lowercase!', 'success');
  };

  const handleOnChange = (event) => {
    // console.log("On Change");
    settext(event.target.value);
    // by this we can target
  };

  const [text, settext] = useState("");
  // use state hook help us to make the state variable, text is the value by default in the inside of the usestate brackets
  // and settext is the function that we can use any time for updating the textState
  // text = 'new text' // wrong way to change the state
  // settext = 'new text' // correct way to change the state

  let charectersLength = text.length;
  let wordsLength = text.split(" ").length;

  // for clearing the text
  const handleClearClick = () => {
    console.log("All Clear");
    settext("");
    // this is for clearing the string
    props.showAlert('Text cleared!', 'success');
  };

  // for Capital
  const handleCapitalClick = ()=>{
    let forCapital = text.split(" ");
    let anArray = [];
    // console.log(forCapital);
    for (let i = 0; i < forCapital.length; i++) {
      anArray.push(forCapital[i].charAt(0).toUpperCase() + forCapital[i].slice(1).toLowerCase());
    }
    settext(anArray.join(" "));
    props.showAlert('Converted to capital letter!', 'success');
  } 


  const handleCopy = () =>{
    let text = document.getElementById('exampleFormControlTextarea1');
    text.select();  // this will select the whole text
    navigator.clipboard.writeText(text.value); // this navigator interface will copy the selected value from the text value
    props.showAlert('Copied to Clipboard!', 'success');
  }

  const handleExtraSapce = ()=>{
    let newText = text.split(/[ ]+/);
    settext(newText.join(" "));
    props.showAlert('Removed extra spaces!', 'success');
  }
  return (
    <>
      <div className="container" style={{color: props.modeIs==='dark'?'white':'black'}}>
        <div className="mb-3">
          <h1>{props.heading}</h1>
          {/* <h1>{props.heading} - {text}</h1> */}
          <textarea 
          className="form-control" id="exampleFormControlTextarea1" 
          style={{backgroundColor: props.modeIs==='dark'?'grey':'white', color: props.modeIs==='dark'?'white':'black'}} rows="8" 
          value={text}
          autoFocus
          onChange={handleOnChange}>
          </textarea>
        </div>
        <button className="btn btn-primary" onClick={handleUpClick}>
          Convert to Uppercase
        </button>
        <button className="btn btn-primary mx-3" onClick={handleLoClick}>
          Convert to Lowercase
        </button>
        <button className="btn btn-primary" onClick={handleCapitalClick}>
          Convert to Capital Letter
        </button>
        <button type="button" className="btn btn-primary mx-3" onClick={handleCopy}>
          Copy Text
        </button>
        <button type="button" className="btn btn-primary " onClick={handleExtraSapce}>
          Remove Extra Spaces
        </button>
        <button type="button" className="btn btn-primary mx-3" onClick={handleClearClick}>
          Clear Text
        </button>
      </div>
      <div className="container" style={{color: props.modeIs==='dark'?'white':'black'}}>
        <h2>Your text summary</h2>
        <p>
          {wordsLength} Words and {charectersLength} Characters
        </p>
        <p>{0.008 * wordsLength} Minutes to read</p>
        <h3>Preview</h3>
        <p>{text.length>0?text:"Enter something in the textbox above to preview it here"}</p>
      </div>
    </>
  );
}

TextForm.defaultProps = {
  heading: "Enter the Text to Analyze Below",
};