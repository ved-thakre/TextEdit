import React from 'react'

function Contact(props) {
  return (
    <>
     <div className="mb-3 mx-5" style={{color : props.mode === 'dark'?'white':'#282c34'}}>
      <h1 style={{color : props.mode === 'dark'?'white':'#282c34'}}>Contact Us</h1>
        <div className="container " style={{border : '1px solid rgb(33, 37, 41)', borderColor: 'rgb(222, 226, 230)', borderRadius: '5px', padding : '30px', color : props.mode === 'dark'?'white':'#282c34'}}>
          <div class="mb-3">
              <label for="exampleFormControlInput1" className="form-label" style={{backgroundColor : props.mode === 'dark'?'#282c34':'white'}}>Email</label>
              <input type="email" className ="form-control" id="exampleFormControlInput1" placeholder="name@example.com" style={{ width: '100%', padding: '10px', fontSize: '14px', backgroundColor : props.mode === 'dark'?'#282c34':'white', }}/>
          </div>
          <div class="mb-3">
              <label for="exampleFormControlTextarea1" className="form-label">Message</label>
              <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" placeholder='Enter the message you want send...' style={{ width: '100%', padding: '10px', fontSize: '14px', backgroundColor : props.mode === 'dark'?'#282c34':'white', color: props.mode === 'dark' ? 'white' : '#282c34'}}></textarea>
          </div>
          <button type="button" class="btn btn-dark my-3 mx-2" style={{backgroundColor : props.mode === 'dark'?'white':'#282c34', color : props.mode === 'dark'?'#282c34':'white'}}>Submit</button>
        </div>
      </div>
    </>
  )
}

export default Contact
