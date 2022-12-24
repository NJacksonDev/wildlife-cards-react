import { useLocation } from "react-router-dom";

export default function SinglePost() {
  const location = useLocation();

  return (
    <div className="container">
      <img
        className="single-post"
        src="https://source.unsplash.com/random/?wildlife"
        alt="random wildlife"
      />
      <div className="single-post-text">
        <h1>{location.state.author}</h1>
        <p>{location.state.text}</p>
      </div>
    </div>
  );
}
