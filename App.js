import React from "react"
import ReactDOM from "react-dom/client" 
 
// JSX (transpilled before it reaches th JS) - Parcel - Babel

// JSX => React.createElement => ReactElement-JS Object => HTMLElement(render)

const jsxHeading = (<h1 
id = "heading">
    Namaste from JSX
</h1>);

// React components
// Class based components - OLD
// Functional components - NEW

let HeadingComponent1 = ()=> {
  return  <h1>This is React function component from top</h1>
}

let Title = ()=> {
  return  <h2>This is title</h2>
}

// Above and below code are same


let balance = 1000
// Component Composition 
let HeadingComponent2 = ()=> (
    <div>
        HeadingComponent1
        <Title/>
        {balance = balance * Math.random(1000)}
<h1>
    My bank balance is = `${balance}`
</h1>
</div>
)


const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(<HeadingComponent2/>)


// JSX take care of cross site scripting to prevent injection attacks from attackers.
