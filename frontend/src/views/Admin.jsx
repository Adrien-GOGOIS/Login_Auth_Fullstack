import { useEffect, useState } from "react";

const axios = require("axios");

function Admin() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8000/").then((res) => {
      const data = res.data;
      setUsers(data);
    });
  }, []);

  return (
    <div>
      <h1>Admin</h1>
      <div>
        {users.map((usr, i) => {
          return (
            <div key={i}>
              <h3>{usr.surname}</h3>
              <p>{usr.firstName}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Admin;
