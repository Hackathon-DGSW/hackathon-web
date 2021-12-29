import styled from "styled-components";
import Chating from "./chat";

const HomeBox = styled.div`
  width: 100vw;
  height: 100vh;
`
const ChatList = styled.div`
   width: 300px;
   height: 100%;
   background-color: gray;
`

const Home = () => {
    return (
        <HomeBox>
            <ChatList>

            </ChatList>
            <Chating/>
        </HomeBox>
    );
};

export default Home;