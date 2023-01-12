import { useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroller";
import { findAllPosts } from "../services/posts";
import loading from "../assets/images/loading.gif";

export default function Scroll({ listPosts, setListPosts, children }) {
  const [loadMore, setLoadMore] = useState(false);
  const [listNewPosts, setListNewPosts] = useState([]);
  const [timeStamp, setTimeStamp] = useState(0);
  const [offset, setOffset] = useState(10);

  useEffect(() => {
    getNewPosts();
  }, []);

  async function getNewPosts() {
    try {
      const query = `?offset=${offset}`
      const { data } = await findAllPosts(query);

      if (data?.length === 0) return setLoadMore(false);

      setOffset(offset + 10);
      setListNewPosts([...data]);
      setLoadMore(true);

    } catch (error) {
      console.log(error.message);
      setLoadMore(false);
    }
  } 

  async function handleLoadMore() {
    
    try {
      if (Date.now() - timeStamp < 1000 || Date.now() - timeStamp < 1000) return;

      setTimeStamp(Date.now());

      if (!loadMore) return;

      const updatedPosts = listPosts?.concat(listNewPosts);
      setListPosts([...updatedPosts]);
      await getNewPosts();

    } catch (error) {
      console.log(error.message);
    }
  }

  return (
    <InfiniteScroll 
      pageStart={0}
      loadMore={handleLoadMore}
      hasMore={loadMore}
      loader={
        <div className="scroll-loader" key={0}>
          <img src={loading} alt="loading" />
          <p>Loading more posts...</p>
        </div>
      }
    >
      {children}
    </InfiniteScroll>
  );
}