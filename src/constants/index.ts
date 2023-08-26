import { BrainCog, Goal, Home, Inbox, Users2 } from "lucide-react";
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

export const useSidebarRoutes = () => {
  const routes = useMemo(
    () => [
      {
        name: "Home",
        path: "/dashboard",
        icon: Home,
      },
      {
        name: "Learning",
        path: "/dashboard/learning",
        icon: BrainCog,
      },
      {
        name: "Goals",
        path: `/dashboard/goals`,
        icon: Goal,
      },
      {
        name: "Community",
        path: "/dashboard/community",
        icon: Users2,
      },
      {
        name: "Inbox",
        path: "/dashboard/inbox",
        icon: Inbox,
      },
    ],
    []
  );

  return routes;
};
