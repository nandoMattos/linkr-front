import { Link } from "react-router-dom";
import styled from "styled-components";
import 'react-tooltip/dist/react-tooltip.css'
import LikeButton from "./LikeButton";
import { Trash } from "./trash";
import { PostDescription } from "./PostDescription";
import { useEffect, useRef, useState } from "react";
import { editPost } from "../services/posts";
import Comments from "./Comments";
import { Repost } from "./Repost";

export default function Post({ post }) {
  const {
    id,
    postId,
    username,
    profilepicture,
    url,
    description,
    likedBy,
    comments,
    title,
    image,
    linkDescription,
    repost_count,
    reposted_by
  } = post

  console.log(post);

  const inputRef = useRef();
  const [isEdit, setIsEdit] = useState(false);
  const [currentDescription, setCurrentDescription] = useState(description)
  const [isCommentsOpened, setIsCommentsOpened] = useState(false)
  const [commentsNow, setCommentsNow] = useState(getComments());
  const repost = true

  const myName = JSON.parse(localStorage.getItem("username"));

  function getComments() {
    if (comments[0].id === null) {
      return []
    }
    return comments;
  }

  function toggleEdit() {
    setIsEdit(state => !state)
  }

  useEffect(() => {
    if (isEdit && inputRef.current) {
      inputRef.current.value = currentDescription;
    }
  }, [isEdit, inputRef, currentDescription])

  async function handleKeyPress(e) {
    if (e.code === "Escape") {
      setCurrentDescription(description)
      toggleEdit()
    }

    if (e.code === "Enter") {
      setCurrentDescription(e.target.value)
      const body = {
        description: e.target.value
      }
      inputRef.current.disabled = true

      editPost(postId, body).then((result) => {
        console.log(result)
        if ((result?.status || result?.response?.status) !== 200) {
          alert(result.response.data.message)
          return
        }

        toggleEdit()

      }).finally(() => {
        inputRef.current.disabled = false
      })

    }
  }

  return (
    <BigContainer>
      <RepostedBy>
          {/* <ion-icon name="repeat-outline" />
          <p>Re-posted by you</p> */}
          <Repost postId={postId} ></Repost>
      </RepostedBy>
      <Container radius={repost && !isCommentsOpened ? "0px 0px 16px 16px" : !repost && 
      isCommentsOpened ? "16px 16px 0 0" : repost && isCommentsOpened ? "0px" :"16px"}>

        <Header>
          <img src={profilepicture} alt="user_img"></img>

          <LikeButton
            likedByPost={likedBy}
            postId={postId}
          />

          <ion-icon
            onClick={() => setIsCommentsOpened(!isCommentsOpened)} name="chatbubbles-outline"
          />
          <p>{commentsNow.length} comments</p>

          <Repost postId={postId}></Repost>
        </Header>

        <Content>
          <BoxHeader>
            <Link to={`/user/${id}`}>{username}</Link>
            <BoxSettings>
              {username === myName && <button onClick={toggleEdit} style={{ all: "unset" }}>
                <ion-icon name="pencil-outline"></ion-icon>
              </button>}
              <Trash postId={postId} username={username} />
            </BoxSettings>
          </BoxHeader>
          {isEdit ? (
            <input
              ref={inputRef}
              itemRef={inputRef}
              onKeyDown={key => handleKeyPress(key)}
            >
            </input>
            //   <input onSubmit={sendEdition}
            //   ref={inputRef}
            //   onChange={handleInput}
            //   value={newDescription}>
            // </input>
          )
            : <PostDescription currentDescription={currentDescription} />
          }

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
      <Comments
        isCommentsOpened={isCommentsOpened}
        commentsNow={commentsNow}
        setCommentsNow={setCommentsNow}
        postId={postId}
      />
    </BigContainer>
  );
}

const BigContainer = styled.div`
  margin-bottom: 15px;
`

const Container = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 15px;

  background-color: #171717;
  height: 270px;
  

  border-radius: ${({ radius }) => radius};

  padding: 15px 20px;

  color: #ffffff;
  font-family: Lato;

  @media (max-width: 425px) {
    border-radius: 0px;
  }
`;

const RepostedBy = styled.div`
  display: flex;
  gap: 8px;
  height: 30px;
  justify-content: flex-start;
  align-items: center;
  margin-top: 15px;
  background-color: #1E1E1E;
  border-radius: 16px 16px 0 0;
  padding-left: 10px;

  p {
    font-family: 'Lato';
    font-style: normal;
    font-weight: 400;
    font-size: 11px;
    line-height: 13px;
    color: #FFFFFF;
  }

  ion-icon {
    font-size: 22px;
    color: #FFFFFF;
  }
`

const Header = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  gap: 5px;
  height: 100%;
  width: 10%;
  margin-bottom: 0;

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
    font-size: 10px;
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
