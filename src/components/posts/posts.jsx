import { useLoaderData } from "react-router-dom";
import Post from "../post/post";

const Posts = () => {
  const posts = useLoaderData();
  return (
    <div>
      <h2>Posts:{posts.length}</h2>
      <div className="users">
        {posts.map((post) => {
         return <Post key={post.id} post={post} />;
        })}
      </div>
    </div>
  );
};

export default Posts;
