import React, {useState} from "react";



export default function From(props) {
    const handleupClick = ()=>{
        // console.log("uppercase was clicked" + text);
        let newText  = text.toUpperCase();
        setText(newText);
        props.showAler("Converted to Uppercase!", "Success" );
        document.title = "textutils - Uppercase";
    }
    const handleloClick = ()=>{
        // console.log("Lowercase was clicked" + text);
        let newText  = text.toLowerCase();
        setText(newText);
        props.showAler("Converted to lowercase!", "Success" );
    }
    const handleClearClick = ()=>{
        // console.log("uppercase was clicked" + text);
        let newText  = '';
        setText(newText);
        props.showAler("Text Cleard!", "Success" );
    }
        const handleonchanged = (event)=>{
            // console.log("on change");
            setText(event.target.value);
        
    }

    const handleCopy = () => {
      console.log("I am copy");
      var text = document.getElementById("myBox");
      text.select();
      
      navigator.clipboard.writeText(text.value);
      props.showAler("Copied to Clipboard!", "Success" );
    }
    const handleExtraSpaces = () => {
      let newText = text.split(/[ ]+/);
      setText(newText.join(" "));
      props.showAler("Extra Spacess Removed!", "Success" );
    }
    
    const [text, setText] = useState('');
  return (
      <>
      <div className="container" style={{color: props.mode==='dark'?'white':'#042743'}}>
   
      <h1>{props.heading}</h1>
      <div className="mb-3">
        <textarea className="form-control" value={text} onChange={handleonchanged} style={{backgroundColor: props.mode==='dark'?'grey':'white', color: props.mode==='dark'?'white':'black'}} id="myBox" rows="8"></textarea>
      </div>
      <button className="btn btn-primary mx-2" onClick={handleupClick}>Convert to Uppercase</button>
      <button className="btn btn-primary mx-2" onClick={handleloClick}>Convert to Lowercase</button>
      <button className="btn btn-primary mx-2 my-3" onClick={handleClearClick}>Clear text</button>
      <button className="btn btn-primary mx-2 my-3" onClick={handleCopy}>Copy text</button>
      <button className="btn btn-primary mx-2 my-3" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
    </div>
    <div className="container my-3" style={{color: props.mode==='dark'?'white':'#042743'}}>
        <h1>Your text summary</h1>
        <p>{text.split(" ").length} words and {text.length} characters</p>
        <p>{0.008 * text.split(" ").length} minute read</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Enter Sumthing in The TextBox above to preview it here"}</p>
    </div>
    
    </>
  );
}
