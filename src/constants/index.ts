import { useMemo } from "react";

export const headerRoutes = () => {
  const routes = useMemo(
    () => [
      {
        name: "Learn",
      },
      {
        name: "Community",
      },
      {
        name: "Services",
      },
    ],
    []
  );

  return routes;
};
