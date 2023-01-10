import { useEffect, useState } from "react";
import styled from "styled-components";
import Header from "./Header";
import TrendingBar from "./TrendingBar";
import { followUser } from "../services/user";

export default function Main({ title, children, loading, isUserPage, hasFollowedUser, idUser }) {
  const [activeButton, setActiveButton] = useState(false);
  const [userIsFollower, setUserIsFollower] = useState();

  useEffect(() => {
    setUserIsFollower(hasFollowedUser);
  }, [hasFollowedUser])

  async function followAndUnfollowUser() {
    setActiveButton(true);
    try {
      const idFollower = JSON.parse(localStorage.getItem("id"));
      const res = await followUser(idFollower, idUser);
      setUserIsFollower(res.data.follow);
      setActiveButton(false);
    } catch(err) {
      alert("An error occurred");
      console.log(err)
    }
  }

  console.log(isUserPage)

  return (
    <Container>
      <Header />
      <Content>
        <Timeline>
          {loading ? <TextInfo>Loading ...</TextInfo> : (
            <>
              <Title>
                <h1>{title}</h1> 
                {isUserPage && ( userIsFollower ? 
                  <Button disabled={activeButton} onClick={() => {followAndUnfollowUser()}} className="unfollow">Unfollow</Button> :
                  <Button disabled={activeButton} onClick={() => {followAndUnfollowUser()}} className="follow">Follow</Button> 
                )}
              </Title>
              {children}
            </>
          )}
        </Timeline>


        <TrendingBar loading={loading}/>
      </Content>

    </Container>
  );
}

const Container = styled.div`
  display: flex;
`;

const Content = styled.div`
  display: flex;
  margin: auto;

  gap: 20px;
`;

const Timeline = styled.div`
  display: flex;
  flex-direction: column;

  margin: auto;
  margin-top: 130px;

  width: 600px;

  gap: 15px;
`;

const Title = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  h1{
    font-family: Oswald;
    font-size: 43px;
    font-weight: 700;
    color: #ffffff;

    margin-bottom: 10px;

    @media (max-width: 425px) {
      margin-left: 20px;
    }
  }

`;

const Button = styled.button`
    font-family: Lato;
    font-weight: 700;
    height: 30px;
    width: 100px;
    border-radius: 5px;
    border: none;
    cursor: pointer;

    &.follow {
      background-color: #1877F2;
      color: #ffffff;
    }

    &.unfollow {
      background-color: #ffffff;
      color: #1877F2;
    } 

    &:disabled {
      opacity: 0.5;
    }
`;


const TextInfo = styled.h1`
  font-family: Oswald;
  font-size: 25px;
  font-weight: 700;
  text-align: center;
  color: #ffffff;
`;
