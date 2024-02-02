import { useState, useEffect } from "react";
import axios from "axios";
export const prerender = false;

const FeedbackForm = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get("/api/feedback");
      setData(response.data.posts);
    };
    fetchData();
  }, []);

  const atualizar = async () => {
    const response = await axios.get("/api/feedback");
    console.log("🚀 :", response.data.posts);
    setData(response.data.posts);
  };

  return (
    <div className="bg-yellow-200">
      <div className="bg-blue-500">
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
    </div>
  );
};

export default FeedbackForm;
