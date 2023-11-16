import Link from "next/link";
import React from "react";

const UsersPage = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users", {
    cache: "no-store",
  });
  const users = await res.json();
  return (
    <>
      <div>UsersPage</div>
      <h1 className="text-orange-500">{new Date().toLocaleTimeString()}</h1>
      <ul>
        {users.map((user) => (
          <li key={user.id}> {user.name} </li>
        ))}
      </ul>
      <Link href={"/users/new"}>create new user</Link>
    </>
  );
};

export default UsersPage;
