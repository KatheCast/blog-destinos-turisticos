import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export const ListaDePosts = () => {
  const urlApi = "https://6622071827fcd16fa6c8818c.mockapi.io/api/v1";
  const [blogs, setBlogs] = useState([]);
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();

  const getUsers = async () => {
    const response = await fetch(`${urlApi}/users`);
    const data = await response.json();
    setUsers(data);
  };

  const getBlogs = async () => {
    const response = await fetch(`${urlApi}/blogs`);
    const data = await response.json();
    data.forEach((post) => {
      const user = users.find((user) => user.id === post.creator);
      post.user = user;
    });
    setBlogs(data);
  };

  useEffect(() => {
    getUsers();
  }, []);

  useEffect(() => {
    getBlogs();
  }, [users]);

  const goToNewPost = () => {
    navigate("/nuevoPost");
  };

  return (
    <div className="timeline-container">
      <h2>Timeline</h2>
      <button onClick={() => goToNewPost()}>Nuevo post</button>
      {blogs.map((post) => (
        <div key={post.id} className="post">
          {post.user && (
            <a href={`/users/${post.user.id}`}>
              <img src={`${post.user?.avatar}/${post.user?.id}`} alt="avatar" />
            </a>
          )}
          <h3>{post.name}</h3>
          <p>{post.review}</p>
          <small>publicado por: {post.user?.name}</small>
        </div>
      ))}
    </div>
  );
};