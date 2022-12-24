import { useLocation } from "react-router-dom";

export default function SinglePost() {
  const location = useLocation();

  return (
    <div className="container">
      <div className="single-post"></div>
      <img
        src="https://source.unsplash.com/random/?wildlife"
        alt="random wildlife"
      />
      <h1>{location.state.author}</h1>
      <p>{location.state.text}</p>
    </div>
  );
}
