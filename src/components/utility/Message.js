import { Notification } from "rsuite"

const EditMessage = (funcName, message)=>{
    Notification[funcName]({
        title:funcName,
        description: <h6>{message}</h6>
    })

}

export { EditMessage }