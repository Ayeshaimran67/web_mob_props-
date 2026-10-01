import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

function Greeting({name,age}) {
  return <h2 style = {{background: 'lightblue'}}>Hello {name}! You are {age} years old.</h2>;
}
function Book(props) {
  return <h2 style={{background: 'pink'}}>The book title is {props.title}, the author is {props.author}.</h2>
}
function YourCar({color, brand, ...rest}){
  return (<h2 style={{background: 'lightgreen'}}>Your {brand} {rest.model} is {color}.</h2>)
}
function MyCar({color = "blue", brand}) {
  return (<h2 style={{background: 'Coral'}}>My car is {color} coulored and its brand is {brand}.</h2>)
}
function Son(props) {
  return (<div style={{background:'pink'}}>
    <h2>Son</h2>
    <div>{props.children}</div>
  </div>);
}
function Daughter(props) {
  return (<div style = {{background: 'yellow'}}>
    <h2> Daughter</h2>
    <div>{props.children} and daughter also has properties: education : {props.education} and age: {props.age}</div>
  </div>);
}
function Parent() {
  return(<div>
    <p>My two children</p>
    <Son>
      <p>This was written in the parent component, but displayed as a part of the son component. </p></Son>
    <Daughter education ='Masters' age='25'>
      <p>This was written in the parent component, but displayed as a part of the Daughter component.</p>
    </Daughter>
  </div>)
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    {/* <Greeting name={'Alice'} age={30} />
    <Book title = "Charlie and the chocolate factory" author = "Roald Dhal" />
    <YourCar brand={'Ford'} model= {"2026"} color={"red"} />
    <MyCar brand={"Corola"}/>
    <Parent children /> */}
  </StrictMode>,
)
