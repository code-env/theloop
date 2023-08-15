import { useMemo } from "react";

export const useHeaderRoutes = () => {
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
