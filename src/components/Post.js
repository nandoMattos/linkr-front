import { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { deleteLike, insertLike } from "../services/posts";

export default function Post({post}) {
  const {id, username, profilepicture, url, description, 
    title, image, linkDescription} = post

  const [likedBy, setLikedBy] = useState(post.likedBy);
  if(likedBy[0] === null) setLikedBy([])
  
  const [userLiked, setUserLiked] = useState(likedBy.includes("naruto"))
  
  function deslikePost(id) {
    setUserLiked(false);
    likedBy.shift();
    setLikedBy(likedBy)
    deleteLike(id)
  }

  function likePost(id) {
    setUserLiked(true);
    likedBy.unshift("naruto")
    setLikedBy(likedBy)
    insertLike(id)
  }


  return (
    <Container>
      <Header>
        <img src={profilepicture} alt="user_img"></img>
        <HeartColor color={userLiked ? "red" : "none"}>
          <ion-icon 
            onClick={()=> userLiked ? deslikePost(id) : likePost(id) } 
            name={userLiked ? "heart" : "heart-outline"}/>
        </HeartColor>
        <p>{likedBy.length} likes</p>
      </Header>

      <Content>
        <BoxHeader>
          <Link to={`/user/${id}`}>{username} {id}</Link>

          <BoxSettings>
            <ion-icon name="pencil-outline"></ion-icon>
            <ion-icon name="trash"></ion-icon>
          </BoxSettings>
        </BoxHeader>

        <p>
          {description.split(" ")
            .map(el => 
              !el.includes("#") ? 
              el : 
              el
            ).join(" ")}
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
    width: 50px;
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

const HeartColor = styled.span`
  color: ${ ({color})=> color };
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;

  height: 100%;

  p {
    color: #b7b7b7;

    span {
      color: #ffffff;
    }
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
