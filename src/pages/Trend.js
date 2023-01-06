import { useEffect, useState } from "react";
import { useParams } from "react-router";
import styled from "styled-components";
import Main from "../components/Main";
import Post from "../components/Post";
import { getPostsWithHashtag } from "../services/hashtagService";

export default function Trend() {
  const [loading, setLoading] = useState(false);
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState(false);

  const {name} = useParams();

  useEffect(()=>{
    setLoading(true)
    getPosts();
    //eslint-disable-next-line
  },[name])

  async function getPosts() {
    try{
      const res = await getPostsWithHashtag(name);
      setPosts(res.data)
      setLoading(false)
    }catch(err) {
      console.log(err)
      setError(true)
      setLoading(false);
    }
  }

  return(
    <Main title={`#${name}`} loading={loading}>
      {(loading === false && posts.length === 0 && error === false) && <TextInfo>There are no posts yet ...</TextInfo>}
      {error && <TextInfo>An error occured while trying to fetch the posts, please refresh the page ...</TextInfo>}
      
      {
        posts.map((post) => <Post post={post} loading={loading}/>)
      }
    </Main>
  )
};


const TextInfo = styled.h1`
  font-family: Oswald;
  font-size: 25px;
  font-weight: 700;
  text-align: center;
  color: #ffffff;
`;

