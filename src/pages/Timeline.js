import { useEffect, useState } from "react";
import { useParams } from "react-router";
import styled from "styled-components";
import { CreatePost } from "../components/CreatePost";
import Main from "../components/Main";
import Post from "../components/Post";

import { findPostsById, findAllPosts } from "../services/posts";
import { getAllFollowingUsers, verifyFollow } from "../services/user";

export default function Timeline({isUserPage}) {
  const [listPosts, setListPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const { id } = useParams();
  const [username, setUsername] = useState();
  const [followUser, setFollowUser] = useState();
  const [listFollowing, setListFollowing] = useState([]);

  const idLoggedUser = JSON.parse(localStorage.getItem("id"));

  useEffect(() => {
    setLoading(true); 
    getPosts();

    //eslint-disable-next-line
  }, [isUserPage]);

  async function getPosts() {
    try {
			let res;
			if(isUserPage === true) {
				res = await findPostsById(id);
				setUsername(res.data[0].username);

        const resFollow = await verifyFollow(idLoggedUser, id);
        setFollowUser(resFollow.data.follow)
			} else {
				res = await findAllPosts();
        const resAllFollowing = await getAllFollowingUsers(idLoggedUser);
        setListFollowing(resAllFollowing.data);
			}
      
      if(res.data === 'Unauthorized') {
        setError(true);
        setLoading(false)
      } else {
        setListPosts(res.data);
        setLoading(false);
      }

    }catch(err) {
      console.log(err);
      setError(true);
      setLoading(false)
    }
  }


  return (
    <Main title={isUserPage ? `${username}'s posts` : 'timeline'} 
      loading={loading} 
      isUserPage={isUserPage} 
      hasFollowedUser={followUser}
      idUser={id}
    >
      {!isUserPage && <CreatePost />}

      {(loading === false && listPosts?.length === 0 && listFollowing.length > 0 && error === false) && <TextInfo>No posts found from your friends</TextInfo>}
      {(loading === false && !isUserPage && listFollowing.length === 0 && error === false) && <TextInfo>You don't follow anyone yet. Search for new friends!</TextInfo>}
      {error && <TextInfo>An error occured while trying to fetch the posts, please refresh the page ...</TextInfo>}
      {
        listPosts?.map((post) => <Post post={post} />)
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
