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
				setUsername(res.data.username);

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
        setListPosts(res.data.posts || res.data);
        setLoading(false);
      }

    }catch(err) {
      console.log(err);
      setError(true);
      setLoading(false)
    }
  }

  const noPostText = loading === false && !isUserPage && listPosts?.length === 0 && listFollowing.length > 0 && error === false;
  const noFollowText = loading === false && !isUserPage && listFollowing.length === 0 && error === false;
  const noUserPostText = loading === false && isUserPage && listPosts?.length === 0 && error === false;


  return (
    <Main title={isUserPage ? `${username}'s posts` : 'timeline'} 
      loading={loading} 
      isUserPage={isUserPage} 
      hasFollowedUser={followUser}
      idUser={id}
    >
      {!isUserPage && <CreatePost />}
      {noUserPostText && <TextInfo>No posts found from this user</TextInfo>}
      {noPostText && <TextInfo>No posts found from your friends</TextInfo>}
      {noFollowText && <TextInfo>You don't follow anyone yet. Search for new friends!</TextInfo>}
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
