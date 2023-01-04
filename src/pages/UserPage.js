import { useEffect, useState } from "react";
import styled from "styled-components";
import Main from "../components/Main";
import Post from "../components/Post";
import { findAllPosts } from "../services/posts";

export default function UserPage() {
  const [listPosts, setListPosts] = useState([]);
  const [username, setUsername] = useState();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    setLoading(true);
    getPosts();
  }, []);

  async function getPosts() {
    try {
      const res = await findAllPosts();
      setListPosts(res.data);
      setLoading(false);
      setUsername(res.data[0].username);
    }catch(err) {
      console.log(err);
      setError(true);
      setLoading(false)
    }
  }

  return (
    <Main title={`${username}'s posts`} loading={loading}>
      {(loading === false && listPosts.length === 0 && error === false) && <TextInfo>There are no posts yet ...</TextInfo>}
      {error && <TextInfo>An error occured while trying to fetch the posts, please refresh the page ...</TextInfo>}
      
      {
        listPosts.map((post) => <Post post={post} />)
      }
    </Main>
  );
}


const TextInfo = styled.h1`
  font-family: Oswald;
  font-size: 25px;
  font-weight: 700;
  text-align: center;
  color: #ffffff;
`;
