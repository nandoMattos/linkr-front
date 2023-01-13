import { useState } from "react";
import styled from "styled-components";
import { colors } from "../assets/constants";
import { insertComment } from "../services/posts";

export default function Comments({
  isCommentsOpened,
  commentsNow,
  setCommentsNow,
  postId,
  listFollowing,
  postBelongerId,
}) {
  const [form, setForm] = useState({ comment: "" });
  console.log(listFollowing)

  const profileImg = JSON.parse(localStorage.getItem("profileImg"));
  const username = JSON.parse(localStorage.getItem("username"));

  function handleForm(e) {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  }

  function sendMessage() {
    if (form.comment === "") {
      alert("Comment must be filled out");
      return;
    }

    insertComment(postId, form);
    setCommentsNow([
      ...commentsNow,
      { ...form, profile_picture: profileImg, username },
    ]);
    form.comment = "";
  }

  function handleKeyPress(e) {
    if (e.code === "Enter") {
      sendMessage();
    }
  }

  function getFollowingLabel(userId) {
    for (let u of listFollowing) {
      if (u.id_user_followed === userId) {
        return <Label>• following</Label>;
      }
    }
  }

  function getAuthorLabel(userId) {
    if (userId === postBelongerId) {
      return <Label>• post's author</Label>;
    }
  }

  return (
    <AllCommentsContainer display={isCommentsOpened ? "flex" : "none"}>
      {commentsNow.length === 0 ? (
        <TextInfo>There are no comments yet</TextInfo>
      ) : (
        commentsNow.map((c) => (
          <CommentContainer>
            <UserImage src={c.profile_picture} />
            <CommentDiv>
              <Username>
                {c.username}
                {getAuthorLabel(c.userId)}
                {getFollowingLabel(c.userId)}
              </Username>
              <Comment>{c.comment}</Comment>
            </CommentDiv>
          </CommentContainer>
        ))
      )}

      <InsertCommentDiv>
        <UserImage src={profileImg} />
        <InputComment
          placeholder="write a comment..."
          type="text"
          name="comment"
          onChange={handleForm}
          value={form.comment}
          onKeyPress={handleKeyPress}
        />

        <ion-icon onClick={() => sendMessage()} name="paper-plane-outline" />
      </InsertCommentDiv>
    </AllCommentsContainer>
  );
}

const AllCommentsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: fit-content;
  min-height: 100px;
  border-radius: 0 0 16px 16px;
  padding-top: 15px;
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
  min-height: 75px;

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
  display: flex;
  align-items: center;
  padding: 10px 0 5px 0;
  font-weight: bold;
  color: white;
`;

const Label = styled.span`
  font-size: 13px;
  font-weight: normal;
  color: #565656;
  margin-left: 10px;
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
