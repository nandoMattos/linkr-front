import api from "./config";

export function findAllPosts() {
  const response = api.get(`/posts`).catch((err) => err.response);

  return response;
}

export function findPostsById(id) {
  const response = api.get(`/posts/user/${id}`).catch((err) => err.response);

  return response;
}

export function insertLike(id) {
  const response = api.post(`/posts/${id}/like`,'').catch((err) => console.log(err))

  return response;
}

export function deleteLike(id) {
  const response = api.delete(`/posts/${id}/deslike`).catch((err) => console.log(err))

  return response;
}

export async function addPost(body) {

  try {
  const response = await api.post(`/posts`, body)
  return response;
  } catch (error) {
    console.log(error);
  }
}

export async function removePost(postId) {

  
  try {
    const response = await api.delete(`/posts/${postId}`)
    return response;
    
  } catch (error) {
    console.log(error)
  }

}

export async function editPost(postId, body) {

  try {
    const response = await api.put(`${BASE_URL}/posts/${postId}`, body, {headers})
    return response;
  } catch (error) {
    return error
  }
}