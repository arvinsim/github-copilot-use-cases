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

// TODO: Performance Optimization: Is there a way to optimize the performance of showing the list?
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
