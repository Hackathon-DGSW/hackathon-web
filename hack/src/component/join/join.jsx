import { useState } from "react";
import axios from "axios";
import styled from "styled-components";
import config from "../../config/config";
import { useNavigate } from "react-router";
import Logoimg from "../asset/img/logo.png";

const JoinBox = styled.div`
   width: 100vw;
   height: 100vh;
`

const Input = styled.input`
  margin: 15px;
  width: 400px;
  height: 50px;
  background-color: #FF891C;
  border: none;
  padding-left: 20px;
  border-radius: 40px;
  outline: none;
  font-size: 20px;
  color: #fff;
  &::placeholder{
      opacity: 0.7;
      color: white
  }
`

const Span = styled.span`
  width: 400px;
  height: 120px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 100px;
  font-weight: bold;
  margin: 0px auto;
  margin-top: 50px;
`

const Div = styled.div`

    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin-top: 50px;
`


const Div2 = styled.div`
margin-top: 20px;
     display: flex;
     justify-content: center;

    select {
    border: 1px solid #999;
    font-family: inherit;
    border-radius: 0px;
  margin: 10px;
  width: 200px;
  height: 50px;
  background-color: #FF891C;
  text-align: center;
  border: none;
  border-radius: 40px;
  outline: none;
  font-size: 20px;
  
  appearance:none;
  background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAh0lEQVQ4T93TMQrCUAzG8V9x8QziiYSuXdzFC7h4AcELOPQAdXYovZCHEATlgQV5GFTe1ozJlz/kS1IpjKqw3wQBVyy++JI0y1GTe7DCBbMAckeNIQKk/BanALBB+16LtnDELoMcsM/BESDlz2heDR3WePwKSLo5eoxz3z6NNcFD+vu3ij14Aqz/DxGbKB7CAAAAAElFTkSuQmCC');
  background-repeat: no-repeat;
  background-position: 90% 50%;
  color: #fff;
  option {
      width: 100%;
      background-color: white;
      color: black;
    }
    }
`

const SubmitBox = styled.div`
margin-top: 50px;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
`

const Submit = styled.input`
    width: 200px;
  height: 60px;
  background-color: #FF891C;
  text-align: center;
  border: none;
  border-radius: 50px;
  outline: none;
  font-size: 20px;
  color: white;
`
const Img = styled.img`
  width: 200px;
  height: 200px;
`

const Div3 = styled.div`
    width: 100%;
    height: 280px;
    display: flex;
    justify-content: center;
    align-items: center;
`


const Join = () => {
    const [name,setName] = useState();
    const [id,setId] = useState();
    const [password,setPassword] = useState();
    const [password2,setPassword2] = useState();
    const [major,setMajor] = useState();
    const [job,setJob] = useState();
    const Navigate = useNavigate()
    const onsubmit = (e) => {
        e.preventDefault();
        axios.post(`${config.API_CONFIG}/user/join`, {
           name,
           id,
           password,
           password2,
           major,
           job
       }).then((res) => {
           console.log(res);
           localStorage.setItem('jwtTotken', res.data.token);
           if(res.data.status === 200){
               Navigate("/");
           }else{
               alert(`${res.data.message}`)
           }
       }).catch((err) => {
           console.log(err);
           alert(`${err.data.message}`)
       })
    }

    return (
        <JoinBox onSubmit={onsubmit}>
            <Div3>
            <Img src={Logoimg}/>
            </Div3>

            <Div>
            <Input type="text" onChange={(e) => setName(e.target.value)} placeholder="NAME"/>
             <Input type="text" onChange={(e) => setId(e.target.value)} placeholder="ID"/>
            <Input type="password" onChange={(e) => setPassword(e.target.value)}  placeholder="PASSWORD"/>
            <Input type="password" onChange={(e) => setPassword2(e.target.value)} placeholder="PASSWORD CHECK"/>
            </Div>

            <Div2>
            <select onChange={(e) => setMajor(e.target.value)}>
                <option disabled selected value>전공</option>
                <option value="WEB" >Web</option>
                <option value="Android">Android</option>
                <option value="Server">Server</option>
                <option value="Design">Design</option>
                <option value="Embedded">Embedded</option>
            </select>
            <select onChange={(e) => setJob(e.target.value)}>
                <option disabled selected value>직업</option>
                <option value="취업생">취업생</option>
                <option value="취준생">취준생</option>
                <option value="학생">학생</option>
            </select>
            </Div2>
            <SubmitBox>
                <Submit value="join" onClick={onsubmit} type="submit"/>
            </SubmitBox>
        </JoinBox>
    );
};

export default Join;