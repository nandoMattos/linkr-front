import styled from "styled-components";
import {Tooltip} from "react-tooltip"
import { deleteLike, insertLike } from "../services/posts";
import { useState } from "react";

export default function LikeButton({likedByPost, postId}) {
  const [likedBy, setLikedBy] = useState(likedByPost);  
  const usernameLogged = getLikesInfo()
  const [userLiked, setUserLiked] = useState(likedBy.includes(usernameLogged))

  function getLikesInfo() {
    if(likedBy[0] === null) setLikedBy([])
    return JSON.parse(localStorage.getItem("username"))
  }

  function deslikePost(id) {
    setUserLiked(false);
    for (let i in likedBy) {
      if (likedBy[i] === usernameLogged) {
        likedBy.splice(i,i+1)
        setLikedBy(likedBy);
      }
    }
    deleteLike(id)
  }

  function likePost(id) {
    setUserLiked(true);
    likedBy.unshift(usernameLogged)
    setLikedBy(likedBy)
    insertLike(id)
  }

  function getNames() {
    if(likedBy.length < 3) {
      if(userLiked) {
        return `You${likedBy.length > 1 ? ", " : ""}${likedBy.find((n) => n !== usernameLogged) ? likedBy.find((n) => n !== usernameLogged) : "" }`
      }
      return likedBy.join(", ")
    }

    if(userLiked) {
      return `You, ${likedBy.find((n) => n !== usernameLogged)} and ${likedBy.length - 2} others`
    }
    
    return `${findTwoDifferents(likedBy, usernameLogged)} and ${likedBy.length - 2} others`
  }

  function findTwoDifferents(arr, username) {
    let twoNames = [];
    for(let name of arr) {
      if((username !== name)) {
        twoNames.push(name)
      }
      if (twoNames.length === 2) return twoNames.join(", ")
    }
  }

  return (
    <>
      <HeartColor id={`likedBy-${postId}`} color={userLiked ? "red" : "none"}>
        <ion-icon
        onClick={()=> userLiked ? deslikePost(postId) : likePost(postId) } 
        name={userLiked ? "heart" : "heart-outline"}/>
      </HeartColor>

      <Tooltip anchorId={`likedBy-${postId}`} content={getNames()} place="bottom"/>
      <p>{likedBy.length} likes</p>
    </>
  )
};

const HeartColor = styled.span`
  color: ${ ({color})=> color };
`;
