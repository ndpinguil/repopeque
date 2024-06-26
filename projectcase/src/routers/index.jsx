import {Route , Routes} from "react-router-dom"
import Auth from "../components/Auth"
import Welcome from "../components/Welcome"

const AppRouter = () => {
    return
    <Routes>
        <Route path= "/" elemente={<Welcome/>}/>
        <Route path= "login" elemente={<Auth/>}/>
    </Routes>
}

export default AppRouter