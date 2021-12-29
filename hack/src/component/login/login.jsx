import {  useState } from "react";
import styled from "styled-components";
import axios from "axios";
import config from "../../config/config";


const LoginBox = styled.div`
  width: 100vw;
  height: 100vh;
  `

const Input = styled.input`
  width: 730px;
  height: 90px;
  background-color: #FF891C;
  text-align: center;
  border: none;
  border-radius: 50px;
  margin: 14px;
  font-size: 30px;
  color: white;
  `

const Form =styled.form`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`


const Login = () => {
    const [id, setId] = useState("");
    const [password, setPassword] = useState("");

    
    const onsubmit = (e) => {
        e.preventDefault();
        axios.post(`${config.API_CONFIG}/user/login`, {
           id,
           password
       }).then((res) => {
           console.log(res.data.token);

           localStorage.setItem('jwtTotken', res.data.token);
       }).catch((err) => {
           console.log(err);
       })
    }
    return (
        <LoginBox>
            <Form onsubmit={onsubmit}>
            <Input type="text" onChange={(e) => setId(e.target.value)} placeholder="id"/>
            <Input type="password" onChange={(e) => setPassword(e.target.value)}  placeholder="password"/>
            <Input type="submit" onClick={onsubmit} />
            </Form>
        </LoginBox>
    );
};

export default Login;