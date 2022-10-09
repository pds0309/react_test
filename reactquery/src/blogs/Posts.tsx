import { useEffect, useState } from "react";
import { useQuery, useQueryClient } from "react-query";

import { Post } from "../Models/type";
import PostDetail from "./PostDetail";

const fetchPosts = async (pageNum: number) => {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts?_limit=10&_page=${pageNum}`
  );
  return response.json();
};

const Posts = (): JSX.Element => {
  const queryClient = useQueryClient();
  const [currentPage, setCurrentPage] = useState<number>(0);
  const { data, isLoading, isError } = useQuery<Post[]>(
    ["posts", currentPage],
    () => fetchPosts(currentPage),
    { keepPreviousData: true } // 쿼리 키가 변경되어서 새로운 데이터를 요청하는 동안에도 마지막 data값을 유지한다.
  );
  const [selectedPage, setSelectedPage] = useState<Post>();

  useEffect(() => {
    if (currentPage < 10) {
      const nextPage = currentPage + 1;
      queryClient.prefetchQuery(["posts", nextPage], () =>
        fetchPosts(nextPage)
      );
    }
  }, [currentPage, queryClient]);

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
        <div className="page">
          <button
            disabled={currentPage <= 1}
            onClick={() => setCurrentPage(currentPage - 1)}
          >
            prev
          </button>
          <button
            disabled={currentPage >= 10}
            onClick={() => setCurrentPage(currentPage + 1)}
          >
            next
          </button>
        </div>
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
