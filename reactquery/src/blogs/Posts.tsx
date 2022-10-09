import { Post } from "../Models/type";
import PostDetail from "./PostDetail";
import { useQuery } from "react-query";
import { useState } from "react";

const fetchPosts = async () => {
  const response = await fetch(
    "https://jsonplaceholder.typicode.com/posts?_limit=10&_page=0"
  );
  return response.json();
};

const Posts = (): JSX.Element => {
  const { data, isLoading, isError } = useQuery<Post[]>("posts", fetchPosts);
  const [selectedPage, setSelectedPage] = useState<Post>();

  const handlePostClick = (post: Post) => {
    setSelectedPage(post);
  };

  if (isLoading) {
    return <div>...loading</div>;
  }
  if (isError) {
    return <div>이런이런</div>;
  }
  return (
    <>
      <div>
        <h2>목록</h2>
        <ul>
          {data?.map((post: Post) => (
            <li
              key={post.id}
              className="post-title"
              onClick={() => handlePostClick(post)}
            >
              {post.title}
            </li>
          ))}
        </ul>
        <br />
      </div>
      <div>
        <h2>상세</h2>
        {!selectedPage && <div>&nbsp;</div>}
        {selectedPage && <PostDetail post={selectedPage} />}
      </div>
    </>
  );
};

export default Posts;
