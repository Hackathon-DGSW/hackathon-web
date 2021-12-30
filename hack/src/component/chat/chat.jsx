import { useEffect,useState } from 'react';
import axios from 'axios'; 
import io from 'socket.io-client'
import styled from "styled-components";
import config from '../../config/config'
import { useDispatch,useSelector } from "react-redux"
import { UserList } from "../app/store"
import { v4 as uuid } from 'uuid';
import LogoImg from "../asset/img/logo.png";

const ChatBox = styled.div`
width: 74vw;
margin-left:500px;
height: 100vh;
 background-color: #eaeaea;
 `

const ChatTextInput = styled.input`
  width: 600px;
  height: 40px;
  font-size: 20px;
  position: fixed;
  bottom: 40px;
  left: 50%;
  transform: translateX(-50%);
  border-radius: 30px;
  border: none;
  padding-left: 15px;
  background-color: #ff742360;
  color: white;
  outline: none;
  &::placeholder{
    
    color: white;
  }
  `

const InputBox = styled.form`
width: 100%;
height: 30px;
display: flex;
justify-content: center;
position: fixed;
bottom: 40px;
`

const RoomInfo = styled.div`
  width: 70%;
  height: 50px;
  background-color: white;
  border-radius: 20px;
  position: relative;
  top: 15px;
  left: 20%;
  transform: translateX(-20%);
  `
//   const Img = styled.div`
//     width: 50px;
//     height: 50px;


//   `


const Ul = styled.ul`
  list-style: none;
  font-size: larger;
  font-weight: 600;
`

const Span = styled.span`
  margin-left: 20px;
  font-size: 20px;
  display: flex;
  align-items: center;
`

const Chat = ({roomInfo}) => {
  const [socket, setSocket] = useState(null) 
  
  const [message,setMessage] = useState()
  const [chatList, setChatList] = useState([])

  
  const dispatch = useDispatch()
  const state = useSelector((state) => state);
  const { List } = state;


  useEffect(() => {
    const newSocket = io.connect(config.API_CONFIG)
    setSocket(newSocket)

    newSocket.on('to_message', (data) => {
      console.log(data)
      setChatList(prev =>[...prev,data])
    })
    
    return () => newSocket.close()
  }, [setSocket])

  useEffect(() => {
    axios.post(`${config.API_CONFIG}/list/userList`, {
  }).then((res) => {
    console.log(res);

      dispatch(UserList(res.data.userArray));
    }).catch((err) => {
      console.log(err);
    })
  },[dispatch])


  
function showRoom() {
  // 방 보여주는거
  // 누가 들어왔는지
}

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(message)
    const unique_id = uuid();
    console.log(unique_id)
    socket.emit('send_message', {
      roomName: roomInfo?.name,
      name: roomInfo?.name,
      mento: List.name,
      msg: message,
    }, showRoom);

    setChatList((prev) => [...prev, {
      message
    }])

    setMessage('')
  }

  
    return (
        <ChatBox>
          <RoomInfo>
            <Span>{roomInfo?.name}</Span>
          </RoomInfo>

            <Ul>
            {chatList.map(chatItem => {
              return <li>{chatItem?.message}</li>
            })}
            </Ul>

            <InputBox onSubmit={handleSubmit}>
            <ChatTextInput value={message} onChange={(e) => {setMessage(e.target.value)}} type="text" placeholder="chat"/>
            </InputBox>
        </ChatBox>
    );
};

export default Chat;