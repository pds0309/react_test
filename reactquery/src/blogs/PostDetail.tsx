import { useMutation, useQuery } from "react-query";

import { Comment } from "../Models/type";
import { Post } from "../Models/type";

const deletePost = async (postId: string) => {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/postId/${postId}`,
    { method: "DELETE" }
  );
  return response.json();
};

const fetchComments = async (postId: string) => {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/comments?postId=${postId}`
  );
  return response.json();
};

const updatePost = async (postId: string, title: string) => {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/postId/${postId}`,
    {
      method: "PATCH",
      body: JSON.stringify({ title: title }),
    }
  );
  return response.json();
};

const PostDetail = ({ post }: { post: Post }) => {
  const { data, isLoading, isError, error } = useQuery<Comment[], any>(
    ["comments", post.id],
    () => fetchComments(post.id),
    { staleTime: 10000 }
  );

  const deleteMutation = useMutation((postId: string) => deletePost(postId));

  if (isLoading) {
    return <div>...loading</div>;
  }
  if (isError) {
    return <div>{error.toString()}</div>;
  }

  return (
    <>
      <h3 style={{ color: "blue" }}>{post.title}</h3>
      <button onClick={() => deleteMutation.mutate(post.id)}>Delete</button>
      {deleteMutation.isError && <p style={{ color: "red" }}>ERROR!!</p>}
      {deleteMutation.isLoading && (
        <p style={{ color: "yellow" }}>...loading</p>
      )}
      {deleteMutation.isSuccess && (
        <p style={{ color: "green" }}>DELETE SUCCESS!!!</p>
      )}
      <button>Update title</button>
      <p>{post.body}</p>
      <h4>Comments</h4>
      {data?.map((comment) => (
        <div id={comment.id}>
          <p>{comment.email}</p>
          <p>{comment.name}</p>
          <br />
          <div>
            <span>{comment.body}</span>
          </div>
        </div>
      ))}
    </>
  );
};

export default PostDetail;
