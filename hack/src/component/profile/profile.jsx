import styled from "styled-components";

const profileBox = styled.div`
 width: 500px;
`
const Name = styled.div`
    color: orange;
`
const Major = styled.div`
`
const GNum = styled.div`
`
const SelfIntro = styled.div`
    color: darkgray;
`
// GraduationNumber

const Profile = () => {
    return (
        <profileBox>
            <Name></Name>
            <Major></Major>
            <GNum></GNum>
            <SelfIntro></SelfIntro>
        </profileBox>
    );
};

export default Profile;