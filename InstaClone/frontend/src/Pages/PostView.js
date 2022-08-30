import "./PostView.scss";
import Navbar from "../Components/Navbar/Navbar";
import { useEffect, useState } from "react";
import axios from "axios";
import Post from "./Post";
import Paginate from "../Components/Paginate/Paginate";

const PostView = () => {
  const [posts, setPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(2);
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  const Paginatefunct = (number) => {
    setCurrentPage(number);
  };

  useEffect(() => {
    const getdata = async () => {
      const res = await axios.get(
        "https://instaclone-akshith-server.herokuapp.com/post"
      );
      setPosts(res.data.reverse());
    };
    getdata();
  }, []);

  return (
    <div>
      <Navbar />
      <div className="parent">
        {currentPosts.map((post) => {
          return <Post key={post._id} data={post} />;
        })}
      </div>
      <Paginate
        currentPage={currentPage}
        totalPosts={posts.length}
        postsPerPage={postsPerPage}
        Paginatefunct={Paginatefunct}
      />
    </div>
  );
};

export default PostView;
