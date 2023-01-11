import styled from "styled-components";
import { colors } from "../assets/constants";

export default function Comments({ isCommentsOpened, comments }) {
  const profileImg = JSON.parse(localStorage.getItem("profileImg"));

  return (
    <AllCommentsContainer
      display={isCommentsOpened ? "flex" : "none"}
      justify={comments.length === 0 ? "center" : "inital"}
    >
      {comments.length === 0 ? (
        <TextInfo>There are no comments yet</TextInfo>
      ) : (
        comments.map((c) => (
          <CommentContainer>
            <UserImage src={c.profile_picture} />
            <CommentDiv>
              <Username>{c.username}</Username>
              <Comment>{c.comment}</Comment>
            </CommentDiv>
          </CommentContainer>
        ))
      )}

      <InsertCommentDiv>
        <UserImage src={profileImg} />
        <InputComment placeholder="write a comment..." />
        <ion-icon name="paper-plane-outline" />
      </InsertCommentDiv>
    </AllCommentsContainer>
  );
}

const AllCommentsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: ${({ justify }) => justify};
  width: 100%;
  height: fit-content;
  min-height: 100px;
  border-radius: 0 0 16px 16px;
  display: ${({ display }) => display};
  background-color: #1e1e1e;
`;

const TextInfo = styled.h1`
  font-family: Oswald;
  font-size: 25px;
  font-weight: 700;
  text-align: center;
  color: #ffffff;
`;

const CommentContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;

  width: 100%;
  height: fit-content;
  min-height: 80px;

  color: #acacac;
  font-family: Lato;
  border-bottom: 2px solid ${colors.MAIN_COLOR};
  padding-bottom: 10px;
`;

const CommentDiv = styled.div`
  width: 80%;
  height: fit-content;
  min-height: 60px;
`;

const Username = styled.p`
  padding: 10px 0 5px 0;
  font-weight: bold;
  color: white;
`;

const Comment = styled.p`
  overflow-wrap: break-word;
`;

const InsertCommentDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 0 10px;
  height: 80px;
  width: 100%;
  padding-top: 10px;

  ion-icon {
    right: 100px;
    color: white;
    font-size: 20px;
  }
`;

const UserImage = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  object-fit: cover;
`;

const InputComment = styled.input`
  width: 80%;
  height: 40px;
  border-radius: 10px;
  padding-left: 15px;
  background-color: #252525;
  color: #acacac;
  border: none;

  ::placeholder {
    font-style: italic;
  }
`;
