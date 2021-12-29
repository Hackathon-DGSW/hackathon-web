import styled from "styled-components";

const JoinBox = styled.div`
   width: 100vw;
   height: 100vh;
`

const Input = styled.input`
  width: 300px;
  height: 30px;

`

const Join = () => {
    return (
        <JoinBox>
            <Input type="text"/>
        </JoinBox>
    );
};

export default Join;