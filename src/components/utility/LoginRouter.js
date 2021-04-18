import { useContext } from "react"
import { Redirect, Route } from "react-router-dom";
import { TutorContext } from "../../App"

const LoginRouter = ({ children, ...rest })=>{
    const {user} = useContext(TutorContext);
    return (
        <Route
        {...rest}
        render=
        {
            ({ location })=>user?.email?( children ):(<Redirect to={{ pathname:'/login', state:{ from:location } }}/>)
        }

        />
    )
}

export {LoginRouter}