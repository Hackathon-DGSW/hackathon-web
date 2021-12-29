import styled from "styled-components";

const ChatBox = styled.div`
  width: 100vw;
  height: 100vh;
`
const ChatList = styled.div`
   width: 300px;
   height: 100%;
`

const Chat = () => {
    return (
        <ChatBox>
            <ChatList>

            </ChatList>
        </ChatBox>
    );
};

export default Chat;