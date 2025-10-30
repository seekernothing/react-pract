import React from "react";
import users from "./users.json";
import { useState, useEffect } from "react";

const UserList = () => {
  const [input, setInput] = useState("");
  const [userList,setUserList] = useState([])


  useEffect(()=>{
    const isActive = users.filter(u=>u.isActive===true)
    setUserList(isActive)
   
    
  },[])


  const filteredUsers = userList.filter(u=>u.name.toLowerCase().includes(input.toLowerCase()))
  

  return (
    <div className="main">
      {/* div for input  */}


      <div className="input">
        <input
          type="input"
          placeholder="Enter Your Name"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
      </div>

      {/* div to display users */}

      <ul className="ul">

        {filteredUsers.map(u=>(
            <li key={u.id}  >{u.name}</li>
        ))}

      </ul>

    </div>
  );
};

export default UserList;
