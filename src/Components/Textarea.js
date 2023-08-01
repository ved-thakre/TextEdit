import React, {useState} from 'react'

export default function Textarea(props) {
    const[text, setText] = useState("");
    const[val1, setVal1] = useState("");
    const[val2, setVal2] = useState("");
    const toUppercase = () =>{
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to Uppercase", "success");
    }
    const replaceValue = () =>{
        let replacetext = text.replace(val1,val2)
        setText(replacetext);
        setVal1("");
        setVal2("");
        props.showAlert("Values has been replaced", "success");
    }
    const toLowercase = () =>{
        let lowetext = text.toLowerCase();
        setText(lowetext)
        props.showAlert("Converted to Lowercase", "success");
    }
    const clearText = () =>{
        let notext = "";
        setText(notext)
        props.showAlert("Text has been cleared", "success");
    }
    const handExtraSpaces = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "))
        props.showAlert("Extra spaces has been removed", "success");
    }
    const handleCopyText = () => {
        let copyText = document.getElementById("mybox");
        copyText.select();
        copyText.setSelectionRange(0, 9999);
        navigator.clipboard.writeText(copyText.value);
        props.showAlert("Text has been Copied", "success");
    }

    const handleOnChange = (event) => {
        console.log("On change happened")
        setText(event.target.value)
    }
    const handleVal1Change = (event) => {
        setVal1(event.target.value);
    }
    
      const handleVal2Change = (event) => {
        setVal2(event.target.value);
    } 

    // Counting the number of words in the textarea
    const wordCount = text.trim().split(/\s+/).filter(Boolean).length;

  return (
    <>
    <div>
        <div className="mb-3 mx-5" style={{color : props.mode === 'dark'?'white':'#282c34'}}>
        <h1>{props.heading}</h1>
        <textarea className="form-control" id="mybox" value={text} onChange={handleOnChange} style={{backgroundColor : props.mode === 'dark'?'#282c34':'white', color: props.mode === 'dark'?'white':'black'}} placeholder='Enter your text...' rows="9"></textarea>
        <button type="button" class="btn btn-dark my-3 mx-2" onClick={toUppercase} style={{backgroundColor : props.mode === 'dark'?'white':'#282c34', color : props.mode === 'dark'?'#282c34':'white'}}>Uppercase</button>
        <button type="button" class="btn btn-dark my-3 mx-2" onClick={toLowercase} style={{backgroundColor : props.mode === 'dark'?'white':'#282c34', color : props.mode === 'dark'?'#282c34':'white'}}>Lowercase</button>
        <button type="button" class="btn btn-dark my-3 mx-2" onClick={handExtraSpaces} style={{backgroundColor : props.mode === 'dark'?'white':'#282c34', color : props.mode === 'dark'?'#282c34':'white'}}>Extraspaces</button>
        <button type="button" class="btn btn-dark my-3 mx-2" onClick={handleCopyText} style={{backgroundColor : props.mode === 'dark'?'white':'#282c34', color : props.mode === 'dark'?'#282c34':'white'}}>Copy Text</button>
        <button type="button" class="btn btn-dark my-3 mx-2" onClick={clearText} style={{backgroundColor : props.mode === 'dark'?'white':'#282c34', color : props.mode === 'dark'?'#282c34':'white'}}>Clear Text</button>
        <button type="button" class="btn btn-dark my-3 mx-2" onClick={replaceValue} style={{backgroundColor : props.mode === 'dark'?'white':'#282c34', color : props.mode === 'dark'?'#282c34':'white'}}>Replace</button>
        <input type="text" className="inputval" value={val1} style={{backgroundColor : props.mode === 'dark'?'#282c34':'white', color: props.mode === 'dark'?'white':'light'}}  onChange={handleVal1Change} /> <input type="text" className="inputval" value={val2} style={{backgroundColor : props.mode === 'dark'?'#282c34':'white', color: props.mode === 'dark'?'white':'light'}}  onChange={handleVal2Change}/>
        </div>
    </div>
    <div className="container mx-5" style={{color : props.mode === 'dark'?'white':'#282c34'}}>
        <h2>Your text summery</h2>
        <p>The given text consist of <b>{wordCount}</b> words and <b>{text.length}</b> characters.</p>
        <p>{0.008 * text.split(" ").length} minutes will take to read.</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Enter something in the textbox to preview it here..."}</p>
    </div>
    </>
  )
}
