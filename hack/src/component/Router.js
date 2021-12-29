import { BrowserRouter } from "react-router-dom";
import Main from "../component/mainbar/main";
import Nav from "../component/navbar/nav";
import Home from "../component/home/home";
import Login  from "./login/login";
import Join from "./join/join";


const Router = () => {
    return(
        <BrowserRouter>
          {/* <Login/> */}
          {/* <Join/> */}
          <Home/>
        </BrowserRouter>
    )
}

export default Router;