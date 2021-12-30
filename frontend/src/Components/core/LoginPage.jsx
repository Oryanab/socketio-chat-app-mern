import React from "react";

export default function LoginPage() {
  return (
    <div class="join-container">
      <header class="join-header">
        <h1>
          <i class="fas fa-smile"></i> ChatCord
        </h1>
      </header>
      <main class="join-main">
        <form action="chat.html">
          <div class="form-control">
            <label for="username">Username</label>
            <input
              type="text"
              name="username"
              id="username"
              placeholder="Enter username..."
              required
            />
          </div>
          <button type="submit" class="btn">
            Join Chat
          </button>
        </form>
      </main>
    </div>
  );
}
