import { useContext } from "react"
import { Redirect, Route } from "react-router-dom";
import { TutorContext } from "../../App"

const AdminRouter = ({ children, ...rest })=>{
    const {user} = useContext(TutorContext);
    return (
        <Route
        {...rest}
        render=
        {
            ({ location })=>(user?.email && user?.type==="admin")?( children ):(<Redirect to={{ pathname:'/', state:{ from:location } }}/>)
        }

        />
    )
}

export {AdminRouter}