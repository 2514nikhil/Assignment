import React from "react";
import { useState } from "react";
import "./Form.css";

function Form() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [data, setData] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !email || !message) {
      alert("Pleace fill all the container");
    } else {
      setData([...data, { name, email, message }]);

      setName("");
      setEmail("");
      setMessage("");
    }
  };

  const removeData = (index) => {
    const updateData = [...data];
    const removed = updateData.splice(index, 1);
    setData(updateData);
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="master">
          <div id="head">
            <h1>Message Recorder</h1>
          </div>
          <div>
            <div>
              <label htmlFor="name">Name:</label>
              <input
                type="text"
                placeholder="Enter your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
            <div>
              <label htmlFor="email">Email:</label>
              <input
                required
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="message">Message:</label>
              <input
                type="text"
                placeholder="Enter the message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
            </div>
          </div>
          <div>
            <button type="submit">Submit</button>
          </div>
        </div>
      </form>
      <ul>
        {data.map((showData, index) => (
          <li key={index}>
            <h2>{showData.name}</h2>
            <h2>{showData.email}</h2>
            <h2>{showData.message}</h2>
            <button onClick={() => removeData(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </>
  );
}

export default Form;
