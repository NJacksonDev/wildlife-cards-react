import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";

export default function Home() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch(process.env.REACT_APP_ENDPOINT)
      .then((res) => res.json())
      .then((data) => setPosts(data).catch((err) => console.error(err)));
  }, []);

  const AllPosts = () => {
    return (
      <div className="posts">
        {posts.map((item, index) => {
          return (
            <Link
              state={item}
              to={"/single-post"}
              className="post-item"
              key={item.id}
            >
              <img
                src={`https://source.unsplash.com/random/?wildlife=${index}`}
                alt="random wildlife"
              />
              <h4>{item.author}</h4>
              <p>{item.text}</p>
              <p>{item.date}</p>
            </Link>
          );
        })}
      </div>
    );
  };

  return (
    <>
      <div className="container">
        <h1>Wildlife Blog</h1>
        <br />
        <h2>
          Refresh the page to see a randomized selection of wildlife pictures!
        </h2>
        <AllPosts />
      </div>
      <Footer />
    </>
  );
}
