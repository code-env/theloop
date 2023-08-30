"use client";

import { currentUser } from "@clerk/nextjs";
import React from "react";

const Tasks = async () => {
  const user = await currentUser();

  console.log(user);

  return <div>Tasks</div>;
};

export default Tasks;
