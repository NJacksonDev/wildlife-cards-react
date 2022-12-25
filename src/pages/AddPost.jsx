import { useState } from "react";

export default function AddPost() {
  const [form, setForm] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch(`${process.env.REACT_APP_ENDPOINT}/posts`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
    });
  };

  const handleForm = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  console.log(form);

  return (
    <div className="container">
      <div className="post-text">
        <h1>Add New Card</h1>
        <br />
        <form action="action">
          <label htmlFor="">Author: </label>
          <input
            style={{ height: "25px", width: "200px" }}
            name="author"
            type="text"
            onChange={handleForm}
          />
          <br />
          <br />
          <label htmlFor="">Text: </label>
          <input
            style={{ height: "25px", width: "200px" }}
            name="text"
            type="text"
            onChange={handleForm}
          />
          <br />
          <br />
          <label htmlFor="">Date: </label>
          <input
            style={{ height: "25px", width: "200px" }}
            name="date"
            type="date"
            onChange={handleForm}
          />
          <br />
          <br />
          <br />
          <button
            className="post-button"
            style={{ height: "50px", width: "150px" }}
            type="submit"
            onClick={handleSubmit}
          >
            Add new post
          </button>
        </form>
      </div>
    </div>
  );
}
