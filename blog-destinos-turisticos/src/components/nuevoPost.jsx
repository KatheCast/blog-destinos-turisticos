import { useEffect, useState } from "react";
import { DeleteIcon } from "./deleteIcon";
import { EditIcon } from "./editIcon";

export const NuevoPost = () => {
  const urlApi = "https://6622071827fcd16fa6c8818c.mockapi.io/api/v1";
  const [name, setName] = useState("");
  const [review, setReview] = useState("");
  const [blogs, setBlogs] = useState([]);
  const [user, setUser] = useState({});
  const [toEditPost, setToEditPost] = useState(null);

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    setUser(user);
    fetch(`${urlApi}/blogs`)
      .then((response) => response.json())
      .then((data) => setBlogs(data.filter((post) => post.creator === user.id)));
  }, []);

  const onChange = (e) => {
    const { name, value } = e.target;
    if (name === "name") {
      setName(value);
    } else if (name === "review") {
      setReview(value);
    }
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    const data = {
      name,
      review,
      creator: user.id,
    };
    const postCreated = await fetch(`${urlApi}/blogs`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    setBlogs([...blogs, await postCreated.json()]);
  };

  const deletePost = (id) => {
    fetch(`${urlApi}/blogs/${id}`, {
      method: "DELETE",
    });
    setBlogs(blogs.filter((post) => post.id !== id));
  };

  const editPost = (id) => {
    const blogs = blogs.find((post) => post.id === id);
    setToEditPost(post);
  };

  const sendToEditPost = async () => {
    const postEdited = await fetch(`${urlApi}/blogs/${toEditPost.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(toEditPost),
    });
    const postEditedJson = await postEdited.json();
    setBlogs(blogs.map((post) => (post.id === postEditedJson.id ? postEditedJson : post)));
    setToEditPost(null);
  };

  return (
    <div className="new-post-container">
      <h2>Nuevo Post</h2>
      <h3>{user.name}</h3>
      <h3>Tienes {blogs.length} posts publicados</h3>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          placeholder="Nombre"
          name="name"
          onChange={onChange}
        ></input>
        <textarea
          placeholder="Review"
          name="review"
          onChange={onChange}
        ></textarea>
        <button type="submit">Publicar</button>
      </form>

      <div className="blogs-container">
        {blogs.map((post) =>
          toEditPost && toEditPost.id === post.id ? (
            <div className="post" key={post.id}>
              <input type="text" value={toEditPost.name} onChange={(e) => setToEditPost({ ...toEditPost, name: e.target.value })} />
              <input type="text" value={toEditPost.review} onChange={(e) => setToEditPost({ ...toEditPost, review: e.target.value })} />
              <button onClick={() => sendToEditPost()}>Guardar</button>
            </div>
          ) : (
            <div className="post" key={post.id}>
              <div className="actions">
                <div className="action" onClick={() => deletePost(post.id)}>
                  <DeleteIcon />
                </div>
                <div className="action" onClick={() => editPost(post.id)}>
                  <EditIcon />
                </div>
              </div>
              <h4>{post.name}</h4>
              <p>{post.review}</p>
            </div>
          )
        )}
      </div>
    </div>
  );
};