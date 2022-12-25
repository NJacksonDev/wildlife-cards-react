import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";

export default function Home() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch(`${process.env.REACT_APP_ENDPOINT}/posts`)
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
              <br />
              <br />
              <h4>{item.author}</h4>
              <br />
              <p>{item.text}</p>
              <br />
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
        <div className="homepage-text">
          <h1>Wildlife Cards</h1>
          <br />
          <h2>
            Try clicking on a picture or refreshing the page to see what
            happens!
          </h2>
        </div>
        <AllPosts />
      </div>
      <Footer />
    </>
  );
}
