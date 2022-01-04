import React from 'react'
import ReactDom from 'react-dom'

//CSS
import './index.css'

//Learn to export import (to import .js file, no need to speficy .js extension. else, ex: .css need to be mentioned)
import { books } from './books'
import Book from './Book'
import { greeting } from './testing/testing'

// stateless functional component
// always return function

// JSX rule
// to return single element
// div / section / article or React Fragment
// use camelCase for HTML attribute
// className instead of Class
// close every element
// formatting return with () to avoid error when more than 1 html tags returned

//To retun a component, need to type capital for the first letter of function name
// function Greeting() {
//   return (
//     <React.Fragment>
//       <div className=''>
//         <h4>This is Grace and this is my first component! :)</h4>
//         <ul>
//           <li>
//             <a href='#'> hello world</a>
//           </li>
//         </ul>
//       </div>
//     </React.Fragment>
//   )
// }

//Same function Greeting returning component, but use react syntax (a bit messier to type)
// const Greeting = () => {
//   return React.createElement(
//     'div',
//     {},
//     React.createElement('h1', {}, 'hello world')
//   )
// }

// Nested components, React tools
// const MyName = () => {
//   return <h2>Grace</h2>
// }

// const MyMessage = () => {
//   return <p>Hello this is my react component</p>
// }

// function Greeting() {
//   return (
//     <div>
//       <MyName />
//       <MyMessage />
//     </div>
//   )
// }

// Test to create a book list
// function BookList() {
//   return (
//     <section className='booklist'>
//       <Book />
//       <Book />
//       <Book />
//       <Book />
//       <Book />
//       <Book />
//       <Book />
//       <Book />
//       <Book />
//       <Book />
//       <Book />
//     </section>
//   )
// }

// const Image = () => {
//   return (
//     <img
//       src='https://images-na.ssl-images-amazon.com/images/I/81eB+7+CkUL._AC_UL127_SR127,127_.jpg'
//       alt=''
//     />
//   )
// }

// const Title = () => {
//   return <h1>I Love You to the Moon and Back</h1>
// }

// const Author = () => {
//   return (
//     <h4 style={{ color: '#617d98', fontSize: '0.75rem', marginTop: '0.25rem' }}>
//       Diana Gabaldon
//     </h4>
//   )
// }

// const Book = () => {
//   return (
//     <article className='book'>
//       <Image />
//       <Title />
//       <Author />
//     </article>
//   )
// }

//Another way to create the booklist using javascript variable
// function BookList() {
//   return (
//     <section className='booklist'>
//       <Book />
//       <Book />
//       <Book />
//       <Book />
//       <Book />
//       <Book />
//       <Book />
//       <Book />
//       <Book />
//       <Book />
//       <Book />
//     </section>
//   )
// }

// const author = 'Diana Gabaldon'

// const Book = () => {
//   const title = 'I Love You to the Moon and Back'
//   return (
//     <article className='book'>
//       <img
//         src='https://images-na.ssl-images-amazon.com/images/I/81eB+7+CkUL._AC_UL127_SR127,127_.jpg'
//         alt=''
//       />
//       <h1>{title}</h1>
//       <h4>{author.toUpperCase()}</h4>
//       <p>${6 + 6}</p>
//     </article>
//   )
// }

//How to put value in object variables
// const firstBook = {
//   img: 'https://images-na.ssl-images-amazon.com/images/I/81eB+7+CkUL._AC_UL127_SR127,127_.jpg',
//   title: 'I Love You to the Moon and Back',
//   author: 'Diana Gabaldon',
// }

// const secondBook = {
//   img: 'https://images-na.ssl-images-amazon.com/images/I/911rEvApjvL._AC_UL127_SR127,127_.jpg',
//   title: 'How to Catch a Mermaid',
//   author: 'Rachel Campos-Duffy',
// }

// function BookList() {
//   return (
//     <section className='booklist'>
//       <Book
//         img={firstBook.img}
//         title={firstBook.title}
//         author={firstBook.author}
//       >
//         <p>
//           Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur,
//           ratione? Illum nihil eius commodi sed ipsa libero magni laboriosam
//           dolore, sequi quo aliquid ipsam obcaecati odit quos amet
//           necessitatibus deserunt?
//         </p>
//       </Book>
//       <Book
//         img={secondBook.img}
//         title={secondBook.title}
//         author={secondBook.author}
//       />
//     </section>
//   )
// }

// const Book = (props) => {
//   return (
//     <article className='book'>
//       <img src={props.img} alt='' />
//       <h1>{props.title}</h1>
//       <h4>{props.author}</h4>
//     </article>
//   )
// }

//or another way to access props is to destruct the props into another variable
// const Book = (props) => {
//   const { img, title, author } = props
//   return (
//     <article className='book'>
//       <img src={img} alt='' />
//       <h1>{title}</h1>
//       <h4>{author}</h4>
//     </article>
//   )
// }

//or just directly expect img, title, and author in the parameter
// const Book = ({ img, title, author }) => {
//   return (
//     <article className='book'>
//       <img src={img} alt='' />
//       <h1>{title}</h1>
//       <h4>{author}</h4>
//     </article>
//   )
// }

//how to use a children prop, take note, children prop is not a prop, else just add another property inside the object.
// const Book = (props) => {
//   const { img, title, author } = props
//   return (
//     <article className='book'>
//       <img src={img} alt='' />
//       <h1>{title}</h1>
//       <h4>{author}</h4>
//       {props.children}
//     </article>
//   )
// }

//how to display string as array to minimize re-coding each time new object coming in
// const names = ['john', 'peter', 'susan']
// console.log({ names })

// const nameList = names.map((name) => {
//   return <h1>{name}</h1>
// })

// console.log({ nameList })

// function BookList() {
//   return <section className='booklist'>{nameList}</section>
// }

//how to display array of object instead of only string
// const books = [
//   {
//     id: 1,
//     img: 'https://images-na.ssl-images-amazon.com/images/I/81eB+7+CkUL._AC_UL127_SR127,127_.jpg',
//     title: 'I Love You to the Moon and Back',
//     author: 'Diana Gabaldon',
//   },
//   {
//     id: 2,
//     img: 'https://images-na.ssl-images-amazon.com/images/I/911rEvApjvL._AC_UL127_SR127,127_.jpg',
//     title: 'How to Catch a Mermaid',
//     author: 'Rachel Campos-Duffy',
//   },
//   {
//     id: 3,
//     img: 'https://images-na.ssl-images-amazon.com/images/I/81ufiFuL3WL._UX300__PJku-sticker-v7,TopRight,0,-50_AC_UL127_SR127,127_.jpg',
//     title: 'Ignite: A Grumpy Single Dad Romance',
//     author: 'Jeff Kinney',
//   },
// ]

// function BookList() {
//   return (
//     <section className='booklist'>
//       {books.map((book) => {
//         return <Book key={book.id} book={book}></Book>
//       })}
//     </section>
//   )
// }

// const Book = (props) => {
//   console.log(props)
//   const { img, title, author } = props.book
//   return (
//     <article className='book'>
//       <img src={img} alt='' />
//       <h1>{title}</h1>
//       <h4>{author}</h4>
//     </article>
//   )
// }

//or to pass the book not as an object but destructure it
function BookList() {
  console.log(greeting)
  return (
    <section className='booklist'>
      {books.map((book) => {
        return <Book key={book.id} {...book}></Book>
      })}
    </section>
  )
}

// const Book = (props) => {
//   console.log(props)
//   const { img, title, author } = props
//   return (
//     <article className='book'>
//       <img src={img} alt='' />
//       <h1>{title}</h1>
//       <h4>{author}</h4>
//     </article>
//   )
// }

//or to just declare 1 by 1 the variable
// const Book = ({ img, title, author }) => {
//   return (
//     <article className='book'>
//       <img src={img} alt='' />
//       <h1>{title}</h1>
//       <h4>{author}</h4>
//     </article>
//   )
// }

//Learn to add an event
// const Book = ({ img, title, author }) => {
//   //attribute, eventHandler
//   //in camelCase eg: onClick, onMouseOver
//   // const clickHandler = () => {
//   //   alert('Hello World')
//   // }

//   //with parameter (e) is the event details, its very useful to know the information
//   const clickHandler = (e) => {
//     console.log(e)
//     console.log(e.target)
//     alert('Hello World')
//   }

//   const passParameter = (author) => {
//     console.log(author)
//   }

//   //remember when calling an eventHandler with a parameter, make sure you put the eventHandler inline, else the eventHandler will always be triggered the moment you render the page (and also on the event occured)
//   //if you put the eventHandler inline prior to call the parameter event, it will be triggered only when the event occured.
//   return (
//     <article
//       className='book'
//       onMouseOver={() => {
//         console.log(title)
//       }}
//     >
//       <img src={img} alt='' />
//       <h1
//         onClick={() => {
//           console.log(title)
//         }}
//       >
//         {title}
//       </h1>
//       <h4>{author}</h4>
//       <button type='button' onClick={clickHandler}>
//         Reference Example
//       </button>
//       <button type='button' onClick={() => passParameter(author)}>
//         More Example
//       </button>
//     </article>
//   )
// }

ReactDom.render(<BookList />, document.getElementById('root'))
