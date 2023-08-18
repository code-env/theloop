
import React from "react";

interface Item {
  id: string,
  username: string,
  email: string,
  phone: string,
  createdAt: string,
  updatedAt: string  
}

async function getWaitlist() {
  const responses = await fetch("https://theloop.space/api/waitlist");
  const registrations = await responses.json();
  console.log(registrations);
  return registrations;
}

const Person: React.FC<Partial<Item>> = ({ username, email, createdAt, phone }) => {
  return (
    <div className="person flex flex-row justify-evenly">
      <h2><a href={`mailto:${email}`}> {username} </a> </h2>
      <h2><a href={`tel:${phone}`}> {phone} </a> </h2>
      {new Date(createdAt as any).toLocaleString()}
    </div>
  )
}

const AdminPage = async () => {
  const data = await getWaitlist();
  return (
    <div>
      <h1 className="atitle"> {data.length} Registrations </h1>
      <div className="data">
      {data.map((reg: Item)=> (
        <Person key={reg.email} {...reg} />
      ))}
    </div>
    </div>
  )
}

export default AdminPage;