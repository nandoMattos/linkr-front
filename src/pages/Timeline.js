import { useEffect, useState } from "react";
import { useParams } from "react-router";
import styled from "styled-components";
import { CreatePost } from "../components/CreatePost";
import Main from "../components/Main";
import Post from "../components/Post";

import { findPostsById, findAllPosts } from "../services/posts";

export default function Timeline({isUserPage}) {

  const [listPosts, setListPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const { id } = useParams();
  const [username, setUsername] = useState();

  useEffect(() => {
    setLoading(true); 
    getPosts();

    //eslint-disable-next-line
  }, [isUserPage]);

  async function getPosts() {
    console.log('peguei')
    try {
			let res;
			if(isUserPage === true) {
				res = await findPostsById(id);
				setUsername(res.data[0].username);
			} else {
				res = await findAllPosts();
			}
			setListPosts(res.data);
			setLoading(false);
    }catch(err) {
      console.log(err);
      setError(true);
      setLoading(false)
    }
  }

  return (
    <Main title={isUserPage ? `${username}'s posts` : 'timeline'} loading={loading}>
      {(loading === false && listPosts.length === 0 && error === false) && <TextInfo>There are no posts yet ...</TextInfo>}
      {error && <TextInfo>An error occured while trying to fetch the posts, please refresh the page ...</TextInfo>}
      {!isUserPage && <CreatePost />}
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
