import React from "react";

export default function Users() {
  const users = ["oryan", "oryan", "oryan", "oryan", "oryan"];

  return (
    <div>
      <h3>
        <i class="fas fa-users"></i> Users
      </h3>
      <ul id="users">
        <>
          {users.map((user) => (
            <li>{user}</li>
          ))}
        </>
      </ul>
    </div>
  );
}
