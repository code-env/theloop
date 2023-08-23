import { currentUser } from "@clerk/nextjs";
import { User2 } from "lucide-react";
import Image from "next/image";

const Avatar = async () => {
  const user = await currentUser();
  return user ? (
    <Image
      alt=""
      src={user?.imageUrl}
      width={40}
      height={49}
      className="rounded-full object-cover"
    />
  ) : (
    <User2 size={30} />
  );
};

export default Avatar;
