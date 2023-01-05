import { useState } from "react";
import styled from "styled-components";
import Main from "../components/Main";
import Post from "../components/Post";

export default function Timeline() {
  const [likedPosts, setLikedPosts] = useState([]);

  return (
    <Main title="timeline">
      <Post likedPosts={likedPosts} setLikedPosts={setLikedPosts} />
      <Post likedPosts={likedPosts} setLikedPosts={setLikedPosts} />
      <Post likedPosts={likedPosts} setLikedPosts={setLikedPosts} />
    </Main>
  );
}
