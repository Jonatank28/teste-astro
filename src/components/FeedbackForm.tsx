import { useState, useEffect } from "react";
import axios from "axios";

const FeedbackForm = () => {
  const [data, setData] = useState([]);
  const [user, setUser] = useState([]);

  const fetchDataPosts = async () => {
    const response = await axios.get("/api/feedback");
    console.log("🚀 ~ fetchDataPosts ~ response:", response);
    setData(response.data.posts);
  };
  const fetchDataUsers = async () => {
    const response = await axios.get("/api/teste");
    console.log("🚀 ~ fetchDataUsers ~ response:", response);
    setUser(response.data.users);
  };

  useEffect(() => {
    fetchDataPosts();
    fetchDataUsers();
  }, []);

  const atualizar = async () => {
    const response = await axios.get("/api/feedback");
    setData(response.data.posts);
  };

  return (
    <div className="bg-yellow-200">
      <div className="bg-blue-500">
        <h1 className="text-black text-2xl">Posts</h1>
        {data &&
          data.map((item: any) => (
            <p className="text-black" key={item.id}>
              {item.title}
            </p>
          ))}
      </div>
      <button className="bg-blue-500 text-black" onClick={atualizar}>
        Atualizar
      </button>
      <div className="bg-blue-500 mt-8">
        <h1 className="text-black text-2xl">Users</h1>
        {data &&
          user.map((item: any) => (
            <p className="text-black" key={item.id}>
              {item.name}
            </p>
          ))}
      </div>
    </div>
  );
};

export default FeedbackForm;
