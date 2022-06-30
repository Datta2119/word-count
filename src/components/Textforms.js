import React, { useState } from 'react'

import '../style/main.css'

export default function TextForm(props) {
  const upperCaseConvertHandeler = () => {
    let newText = text.toUpperCase()
    setText(newText)
    // console.log('You clicked the Uppercase Convertion button')
  }

  const lowerCaseConvertHandeler = () => {
    let newText = text.toLowerCase()
    setText(newText)
    // console.log('You clicked the Uppercase Convertion button')
  }

  const removeSpaceHandeler = () => {
    let newText = text.replace(/ /g, '')
    setText(newText)
    // console.log('You clicked the Uppercase Convertion button')
  }

  const onChangeHandeler = (event) => {
    // console.log('Your text is changed')
    setText(event.target.value)
  }

  const [text, setText] = useState('')

  return (
    <div>
        <h1 className='app-header my-3 text-center'>{props.heading}</h1>
        <div className='container'>
          <div className="text-content">
                  <form>
                      <div className="form-group">
                          <textarea className="form-control" value={text} id="textBox" onChange={onChangeHandeler} rows="8"></textarea>
                      </div>
                      <button type='button' className="btn btn-primary btn-sm" onClick={upperCaseConvertHandeler}>Convert to Uppercase</button>
                      <button type='button' className="btn btn-primary btn-sm ml-1" onClick={lowerCaseConvertHandeler}>Convert to Lowercase</button>
                      <button type='button' className="btn btn-primary btn-sm ml-1" onClick={removeSpaceHandeler}>Remove White Space</button>
                  </form>
          </div>

          <div className="summary-content">
              {/* <h2 className="text-center mt-5">Your Text Analysis:</h2> */}
              <div className="container">
                  {/* <h2>Text Preview: <br /> {text}</h2> */}
                  <p className='text-weight-bold'>Total Words: {text.split(' ').length}</p>
                  <p className='text-weight-bold'>Total Characters: {text.length}</p>
                  <p className='text-weight-bold'>Time to Read: {0.008 * text.length} minutes</p>
              </div>
          </div>
        </div>
    </div>
  )
}