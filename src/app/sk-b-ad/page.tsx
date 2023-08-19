"use client";

import React, { useEffect, useState } from "react";
import { WaitList } from "@prisma/client";
import { toast } from "sonner";

const Person: React.FC<Partial<WaitList>> = ({
  username,
  email,
  createdAt,
  phone,
}) => {
  return (
    <div className="person flex flex-row justify-evenly">
      <h2>
        <a href={`mailto:${email}`}> {username} </a>{" "}
      </h2>
      <h2>
        <a href={`tel:${phone}`}> {phone} </a>{" "}
      </h2>
      {new Date(createdAt as any).toLocaleString()}
    </div>
  );
};

const AdminPage = () => {
  const [data, setData] = useState<WaitList[]>([]);

  useEffect(() => {
    const getWaitlist = async () => {
      try {
        const responses = await fetch("/api/waitlist");
        const registrations = await responses.json();
        console.log(registrations);

        setData(registrations);
      } catch (error) {
        toast.error("something happened fetching registration");
      }
    };

    getWaitlist();
  }, []);

  console.log(data);

  return (
    <div>
      <h1 className="atitle"> {data.length} Registrations </h1>
      <div className="data">
        {data.map((reg: WaitList, index) => (
          <Person key={reg.email} {...reg} />
        ))}
      </div>
    </div>
  );
};

export default AdminPage;
