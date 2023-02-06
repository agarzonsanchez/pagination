import React, { useEffect, useState } from "react";
import { Pagination } from "./Pagination";
import axios from "axios";
import { Pages } from "./Pages";

export const Post = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage, setPostPerPage] = useState(10);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const res = await axios.get("https://jsonplaceholder.typicode.com/posts");
      setPosts(res.data);
      setLoading(false);
    };

    fetchData();
  }, []);

  //Get current posts

  const indexOfLastPost = currentPage * postPerPage;
  const indexOfFirstPost = indexOfLastPost - postPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  //CHange Page

  const paginate = (number) => {
    setCurrentPage(number);
  };
  return (
    <>
      <div className="container mt-5">
        <h2 className="text-primary mb-3">My pagination</h2>
      </div>

      <Pagination posts={currentPosts} loading={loading} />
      <Pages
        postPerPage={postPerPage}
        totalPost={posts.length}
        paginate={paginate}
      />
    </>
  );
};
