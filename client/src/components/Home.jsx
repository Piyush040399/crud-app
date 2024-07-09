import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Home = () => {
  const [data, setData] = useState([]);
  const [message, setMessage] = useState("");

  const getData = async () => {
    try {
      const response = await axios.get("http://localhost:5000/users");
      setData(response.data.users);
    } catch (error) {
      console.log("error :", error);
    }
  };

  const handleDelete = async (id) => {
    try {
      const res = await axios.delete(`http://localhost:5000/user/${id}`);
      setMessage(res.data.message);
      setTimeout(() => {
        setMessage("");
      }, 2000);
      getData();
    } catch (error) {
      console.log("error :", error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return !data.length > 0 ? (
    <p className="text-bold text-4xl text-center mt-10">...Loading</p>
  ) : (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center p-4">
      <div className="bg-white p-6 rounded shadow-md w-full max-w-4xl overflow-x-auto">
        {message && (
          <div className="bg-red-400 text-white p-2 rounded mb-4">
            {message}
          </div>
        )}
        <Link to={"/create"}>
          <button className="bg-green-500 text-white p-2 rounded mb-4">
            Create Post
          </button>
        </Link>
        <table className="min-w-full bg-white">
          <thead>
            <tr>
              <th className="py-2">No.</th>
              <th className="py-2">Username</th>
              <th className="py-2">Email</th>
              <th className="py-2">Age</th>
              <th className="py-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {data.map((post, index) => (
              <tr key={post._id} className="text-center">
                <td className="border px-4 py-2">{index + 1}</td>
                <td className="border px-4 py-2">{post.username}</td>
                <td className="border px-4 py-2">{post.email}</td>
                <td className="border px-4 py-2">{post.age}</td>
                <td className="border px-4 py-2">
                  <Link to={`/update/${post._id}`}>
                    <button className="bg-blue-500 text-white p-1 rounded mr-2 mb-2">
                      Edit
                    </button>
                  </Link>
                  <button
                    className="bg-red-500 text-white p-1 rounded"
                    onClick={() => handleDelete(post._id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Home;
