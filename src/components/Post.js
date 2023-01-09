import { Link } from "react-router-dom";
import styled from "styled-components";
import 'react-tooltip/dist/react-tooltip.css'
import LikeButton from "./LikeButton";
import { Trash } from "./trash";

export default function Post({post}) {
  const {
    id, 
    postId, 
    username, 
    profilepicture, 
    url, 
    description, 
    title, 
    image, 
    linkDescription
  } = post

  return (
    <Container>

      <Header>
        <img src={profilepicture} alt="user_img"></img>
        <LikeButton 
          likedByPost={post.likedBy} 
          postId = {postId}
        />
      </Header>

      <Content>
        <BoxHeader>
          <Link to={`/user/${id}`}>{username}</Link>
          <BoxSettings>
            <ion-icon name="pencil-outline"></ion-icon>
            <Trash></Trash>
          </BoxSettings>
        </BoxHeader>

        <p>
          {description && description.split(" ").map((e) => 
            !e.includes("#") ?
            e + " " : 
            <Link to={`/hashtags/${e.replace("#","")}`}>
              {e + " "}
            </Link>
          )}
        </p>

        <BoxInfo href={url} target="_blank">
          <Info>
            <h1>{title}</h1>
            <h2>{linkDescription}</h2>
            <p>{url}</p>
          </Info>

          <img src={image} alt="img_link" />
        </BoxInfo>
      </Content>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 15px;

  background-color: #171717;
  height: 270px;
  

  border-radius: 16px;

  padding: 15px 20px;

  color: #ffffff;
  font-family: Lato;

  @media (max-width: 425px) {
    border-radius: 0px;
  }
`;

const Header = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5px;

  img {
    width: 40px;
    height: 40px;
    border-radius: 50%;

    margin-bottom: 10px;
  }

  ion-icon {
    font-size: 22px;
  }

  p {
    font-size: 11px;
  }
`;


const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;

  height: 100%;

  p {
    color: #b7b7b7;
  }

  a {
    font-weight: bold;
    color: #ffffff;

    max-width: 505px;
  }
`;

const BoxHeader = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 19px;
`;

const BoxSettings = styled.div`
  display: flex;
  gap: 10px;
  font-size: 15px;
`;


const BoxInfo = styled.a`
  height: 100%;
  border: 1px solid #4d4d4d;
  border-radius: 12px;

  display: flex;

  img {
    width: 200px;
    border-radius: 0px 12px 12px 0px;
  }

  @media (max-width: 425px) {
    max-height: 185px;
  }
`;

const Info = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;

  height: 100%;
  width: 65%;

  padding: 20px 15px;

  font-size: 11px;

  overflow-wrap: anywhere;

  h1 {
    font-size: 16px;
    color: #cecece;
  }

  h2 {
    color: #9b9595;
  }

  p {
    color: #cecece;
  }

  @media (max-width: 425px) {
    h1 {
      font-size: 10px;
    }
    
  }
`;
