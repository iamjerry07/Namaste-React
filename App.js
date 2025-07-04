// let heading =  React.createElement("h1", {id: "firstID"}, "Hello world from react")
import React from "react"
import ReactDOM from "react-dom/client"
 

    const parent = React.createElement("div", {id: "parent"},[
         React.createElement("div", {id:"child"}, 
            [React.createElement("h1", {},"I am a child") , 
             React.createElement("h2", {},"I am a child 2")]
            ),
            React.createElement("div", {id:"child"}, 
            [React.createElement("h1", {},"I am a child") , 
             React.createElement("h2", {},"I am a child 2")]
            )])



    console.log(parent)
    const root = ReactDOM.createRoot(document.getElementById("root"))
   root.render(parent)
    