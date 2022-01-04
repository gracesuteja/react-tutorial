//Can just type rafce to create the structure of const including import and export, then put in the const logic
//Note: export default is only 1 per js file, however export only can be used more than 1 in 1 js file.

import React from 'react'

const Book = ({ img, title, author }) => {
  //attribute, eventHandler
  //in camelCase eg: onClick, onMouseOver
  // const clickHandler = () => {
  //   alert('Hello World')
  // }

  //with parameter (e) is the event details, its very useful to know the information
  const clickHandler = (e) => {
    console.log(e)
    console.log(e.target)
    alert('Hello World')
  }

  const passParameter = (author) => {
    console.log(author)
  }

  //remember when calling an eventHandler with a parameter, make sure you put the eventHandler inline, else the eventHandler will always be triggered the moment you render the page (and also on the event occured)
  //if you put the eventHandler inline prior to call the parameter event, it will be triggered only when the event occured.
  return (
    <article
      className='book'
      onMouseOver={() => {
        console.log(title)
      }}
    >
      <img src={img} alt='' />
      <h1
        onClick={() => {
          console.log(title)
        }}
      >
        {title}
      </h1>
      <h4>{author}</h4>
      <button type='button' onClick={clickHandler}>
        Reference Example
      </button>
      <button type='button' onClick={() => passParameter(author)}>
        More Example
      </button>
    </article>
  )
}

export default Book
