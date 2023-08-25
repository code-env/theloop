import { cn } from "@/lib/utils";
import { FC, HtmlHTMLAttributes } from "react";

interface dheadProps extends HtmlHTMLAttributes<HTMLHeadingElement> {
  username: string;
}

const DHead: FC<dheadProps> = ({ username, className, ...others }) => {
  return (
    <h1 className={cn("font-semibold text-4xl mt-7", className)} {...others}>
      Welcome <span className="text-primary">{username}</span>
    </h1>
  );
};

export default DHead;
