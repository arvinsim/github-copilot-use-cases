import { GetServerSideProps } from "next";
import { useEffect, useState } from "react";

interface User {
  id: number;
  name: string;
}

async function getData() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const users = await res.json();
  return {
    props: { users },
  };
}

// TODO: Is there a away to optimize the performance of showing the list?
// 1. Ask Github Copilot 'What are techniques I can use to improve the rendering of a list of React components?'
// 2 Prompt 'Optimize this block of code to use {technique} to improve performance
const PerformanceOptimizationPage = ({ users }: { users: User[] }) => {
  return (
    <div>
      {users.map((user) => (
        <p key={user.id}>{user.name}</p>
      ))}
    </div>
  );
};

export default PerformanceOptimizationPage;
