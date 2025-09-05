import React, { useState, useEffect } from "react";

const App = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => {
        setUsers(data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  }, []);
  return (
    <div>
      <div className="min-h-screen bg-gradient-to-r from-slate-900 via-gray-600 to-slate-700 text-white p-4">
        <h1 className="text-5xl font-bold text-center text-amber-400">
          User Lists
        </h1>
        {loading ? (
          <p>Loading Users .......</p>
        ) : (
          <ul className="border-2  border-white p-4 m-4 grid grid-cols-4 md:grid-cols-2 lg:grid-cols-4 gap-4 bg-linear-to-br from-slate-900 to-slate-700 via-gray-600 rounded-lg p-8 ">
            {users.map((user) => (
              <li
                className=" text-sm m-2 text-center rounded-lg bg-white text-black backdrop-blur-lg shadow-lg p-4"
                key={user.id}
              >
                <h1 className="font-bold font-mono decoration-1 underline underline-offset-3 text-amber-600 mb-3">
                  Personal Info of Each User
                </h1>
                <h2>
                  <span className="font-bold">Name:</span>
                  {user.name}
                </h2>
                <p>
                  <span className="font-bold">Email:</span>
                  {user.email}
                </p>
                <p>
                  <span className="font-bold">Phone:</span>
                  {user.phone}
                </p>
                <p>
                  <span className="font-bold">City:</span>
                  {user.address.city}
                </p>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default App;
