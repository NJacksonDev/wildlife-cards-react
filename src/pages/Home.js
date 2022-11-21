import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Home() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch(process.env.REACT_APP_ENDPOINT)
      .then((res) => res.json())
      .then((data) => setPosts(data).catch((err) => console.error(err)));
  }, []);

  //   console.log(posts)

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
                src={`https://source.unsplash.com/random?sig=${index}`}
                alt="random"
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
    <div className="container">
      <h1>Home Component</h1>
      <AllPosts />
    </div>
  );
}
