import {useRouteError} from "react-router-dom"

const Error = ()=> {
    const error = useRouteError()
    console.log(error)
    return(
        <div className="error-container">
            <h1 className="error-heading">Oops !!!</h1>
            <h2 className="error-subHeading">Something Went Wrong</h2>
            <h3 >status: {error.status}</h3>
            <h3 >Error Reason: {error.statusText}</h3>
        </div>
    )
}

export default Error;