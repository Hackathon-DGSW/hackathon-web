import styled from "styled-components";
import Chating from "../chat/chat";
import { useSelector } from "react-redux";
import io from 'socket.io-client';
import Logo from '../asset/img/logo.png';
import { v4 as uuid } from 'uuid';
import { useEffect, useState } from "react";
import config from "../../config/config";

const HomeBox = styled.div`
  width: 500px;
  height: 100vh;
  background-color: #fff;
`
const ChatList = styled.div`
    position: absolute;
    top: 110px;
    background-color: #eaeaea;
   width: 460px;
   height: 50%;
   margin-left:19px;
   border-radius: 20px;
   overflow: auto;
`

const ChatListNav = styled.div`
display: inline-block;
    height: 100px;
`

const SeekersListItem = styled.div`
    width: 400px;
    height: 50px;
    position: relative;
    top: 10px;
    left: 10px;
    border-bottom: 0.5px solid #c4c4c4;
    padding-bottom: 5px;
    cursor: pointer;
    padding-bottom: 10px;
    padding-left: 10px;
`
const Img = styled.img`
    width: 70px;
    height: 70px;
    position: absolute;
    left: 20px;
    top: 20px;
`

const Span = styled.span`
color: #ffae72;
`
const Span1 = styled.span`

color: #e15100;
    font-size: large;
    font-weight: bold;
    display: flex;
    padding-top: 10px;
`

const ChatLsitNav = styled.div`
display: flex;
justify-content: space-between;
    width: 100%;
    height: 50px;
    background-color: #ffae72;
    p{
            padding: 0px 12px;
            color: white;
            font-weight: bold;
    }
    p:hover{
        text-decoration: underline;
    }
    
`
const Home = () => {
    const state = useSelector((state) => state);
    const { List } = state;

    const [roomInfo , setRoomInfo] = useState(null)
    const [socket, setSocket] = useState(null);
    useEffect(() => {
        const newSocket = io.connect(config.API_CONFIG);
        setSocket(newSocket);

        return () => {
            newSocket.close();
            setSocket(null);
        };
    }, [setSocket]);



    const handleSeekersListItemClick = (name, major) => {
        const unique_id = uuid();
        console.log(name, major);
        setRoomInfo({name, major})
        socket.emit('come_in', {
                roomName: name,
                name
        });
    }

    return (
        <HomeBox>
            {/* <ChatListNav>
                <Img src={Logo}/>
            </ChatListNav> */}
            <ChatList>
                <ChatLsitNav>
                    <p>web</p>
                    <p>andriod</p>
                    <p>server</p>
                    <p>desin</p>
                    <p>embedded</p>
                </ChatLsitNav>
                    {List.map((value) => (
                    <SeekersListItem onClick={() => handleSeekersListItemClick(value.name, value.major)}>
                        <Span1>{value.name}</Span1>
                        <Span>{value.major}</Span>
                    </SeekersListItem>   
                         )
                    ) }
            </ChatList>
            <Chating roomInfo={roomInfo}/>
        </HomeBox>
    );
};

export default Home;