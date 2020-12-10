import { useState, useEffect } from "react";

const APICall = () => {
  const [userData, setUserData] = useState("");

  async function fetchApi() {
    let response = await fetch("https://randomuser.me/api/");
    let data = await response.json();
    return JSON.stringify(data, null, 2);
  }

  useEffect(() => {
    fetchApi().then((userData) => {
      setUserData(userData);
    });
  }, []);

  return (
    <div>
      <h2>API Call</h2>
      <pre>{userData}</pre>
    </div>
  );
};

export default APICall;
