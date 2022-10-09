import { Post } from "../Models/type";
import { useQuery } from "react-query";

const fetchPosts = async () => {
  const response = await fetch(
    "https://jsonplaceholder.typicode.com/posts?_limit=10&_page=0"
  );
  return response.json();
};

const Posts = (): JSX.Element => {
  const { data, isLoading, isError } = useQuery<Post[]>("posts", fetchPosts);

  if (isLoading) {
    return <div>...loading</div>;
  }
  if (isError) {
    return <div>이런이런</div>;
  }
  return (
    <div>
      <ul>
        {data?.map((post: Post) => (
          <li key={post.id} className="post-title">
            {post.title}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Posts;
