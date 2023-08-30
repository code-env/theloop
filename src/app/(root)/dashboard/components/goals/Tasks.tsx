"use client";

import { currentUser } from "@clerk/nextjs";
import React from "react";

const Tasks = () => {
  const user = currentUser();

  console.log(user);

  return <div>Tasks</div>;
};

export default Tasks;
