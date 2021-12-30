// import styled from "styled-components";
// import { useState } from "react";
// import { useNavigate } from "react-router";
// import config from "../../config/config";
// import axios from "axios";

// const LoginBox = styled.div`
//     width: 100vw;
//     height: 100vh;
// `

// const Login = () => {
//     const [id, setId] = useState("");
//     const [password, setPassword] = usestate("");
//     const navigate = usenavigate()
//     const onsubmit = (e) => {
//         e.preventDefault();
//         axios.post(`${config.API_CONFIG}/user/login`, {
//             id,
//             password
//         }).then((res) => {
//             console.log(res);

//             localStorage.setItem('jwtTotken', res.data.token);
//         }).catch((err) => {
//             console.log(err);
//         })
//     }


//     return (



//     )
// };