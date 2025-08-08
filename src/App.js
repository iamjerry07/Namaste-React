import React, {lazy, Suspense} from "react"
import ReactDOM from "react-dom/client"
import Header from "../src/components/Header"
import Body from "../src/components/Body"
import Footer from "../src/components/Footer"
import {createBrowserRouter,RouterProvider,Outlet } from "react-router-dom"
import About from "./components/About"
import Error from "./components/Error"
import Contact from "./components/Contact"
import ResturantInfo from "./components/ResturantInfo"
// import Grocery from "./components/Grocery"

const Grocery = lazy(()=> import("./components/Grocery"))
const AppLayout = () => {
    return (
        <div className="app">
            <Header />
            <Outlet />
            <Footer />
        </div>)
}

let appRouter = createBrowserRouter([
    {
        path:"/",
        element: <AppLayout/>,
        errorElement : <Error/>,
        children: [
            {
            
        path: "/",
        element:<Body/>
    },{
            
        path: "/about",
        element:<About/>
    },
    {
        path: "/contact",
        element: <Contact/>
    },
    {
        path:"/resturants/:id",
        element: <ResturantInfo/>
    },
    {
        path:"/grocery",
        element: <Suspense fallback={<h1>loading....</h1>}><Grocery/></Suspense>
    }
]
}
])

const root = ReactDOM.createRoot(document.getElementById("root"))
 
root.render(<RouterProvider router = {appRouter}/>)


// JSX take care of cross site scripting to prevent injection attacks from attackers. 
