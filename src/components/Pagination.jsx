import React from "react";
export const Pagination = ({ posts, loading }) => {
  console.log(posts);
  if (loading) {
    return <h2>Loading...</h2>;
  }
  return (
    <div className="container d-flex justify-content-center">
      <ul className="list-group mb-4 col-8">
        {posts.map((post) => (
          <li key={post.id} className="list-group-item">
            <h3>{post.title}</h3>
            <p>{post.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};
