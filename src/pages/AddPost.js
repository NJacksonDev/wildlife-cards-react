import { useState } from "react";

export default function AddPost() {
  const [form, setForm] = useState({});

  const handleForm = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch(process.env.REACT_APP_ENDPOINT, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
    });
  };

  return (
    <div className="container">
      <h1>Add Post</h1>
      <form action="action">
        <label htmlFor="">Author</label>
        <input name="text" type="text" onChange={handleForm} />
        <label htmlFor="">Text</label>
        <input name="text" type="text" onChange={handleForm} />
        <label htmlFor="">Date</label>
        <input name="date" type="date" onChange={handleForm} />
        <br />
        <br />
        <button type="submit" onClick={handleSubmit}>
          Add new post
        </button>
      </form>
    </div>
  );
}
