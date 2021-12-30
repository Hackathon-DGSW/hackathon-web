import {  useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import axios from "axios";
import config from "../../config/config";
import { UserData } from "../app/store";
import LogoImg from "../asset/img/logo.png" 


const LoginBox = styled.div`
  width: 100vw;
  height: 100vh;
  `

const Input = styled.input`
  width: 600px;
  height: 70px;
  background-color: #FF891C;
  text-align: center;
  border: none;
  border-radius: 50px;
  margin: 20px;
  font-size: 25px;
  outline: none;
  color: white;
  &::placeholder{
      color: white
  }
  `

const Form =styled.form`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`
// const Span = styled.span`
//   width: 400px;
//   height: 120px;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   font-size: 100px;
//   font-weight: bold;
// `

const Submit = styled.input`
 background-color: #FF891C;
  width: 180px;
  height: 50px;
  text-align: center;
  border: none;
  border-radius: 50px;
  margin: 14px;
  font-size: 20px;
  color: white;
  outline: none;
`

const PageMove = styled.input`
  background-color: #FF891C;
  width: 180px;
  height: 50px;
  text-align: center;
  border: none;
  border-radius: 50px;
  margin: 14px;
  font-size: 20px;
  color: white;
  outline: none;
`

const Div = styled.div`
  width: 600px;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
`

const Img = styled.img`
  width: 200px;
  height: 200px;
  margin-bottom: 30px;
`

const Login = () => {
    const [id, setId] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    const dispatch = useDispatch()
    const onsubmit = (e) => {
        e.preventDefault();
        axios.post(`${config.API_CONFIG}/user/login`, {
           id,
           password
       }).then((res) => {
           console.log(res);
           navigate('/home')
           localStorage.setItem('jwtTotken', res.data.token);
           localStorage.setItem('user_name', res.data.names);
           axios.defaults.headers.common['x-access-token'] = res.data.token;
            dispatch(UserData(res.data))
       }).catch((err) => {
           console.log(err);
       })
    }



    return (
        <LoginBox>
            <Form onsubmit={onsubmit}>
            <Img src={LogoImg}/>
            <Input type="text" onChange={(e) => setId(e.target.value)} placeholder="id"/>
            <Input type="password" onChange={(e) => setPassword(e.target.value)}  placeholder="password"/>
            <Div>
            <Submit type="submit" onClick={onsubmit} value="Login" />
            <PageMove type="button" value="join" onClick={()=> {
              navigate('/join')
            }}/>
            </Div>
            </Form>
        </LoginBox>
    );
};

export default Login;