import { Routes , BrowserRouter, Route} from "react-router-dom";
// import Main from "../component/mainbar/main";
// import Nav from "../component/navbar/nav";
import Home from "../component/home/home";
import Login  from "./login/login";
import Join from "./join/join";


const Router = () => {
    return(
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Login/>}/>
          <Route exact path="/join" element={<Join/>}/>
          <Route exact path="/home" element={<Home/>} /> 
        </Routes>
        </BrowserRouter>
    )
}

export default Router;