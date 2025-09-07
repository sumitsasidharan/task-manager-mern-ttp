import { Outlet } from "react-router-dom";

type Role = "admin" | "user" | "guest";

type PrivateRoutesProps = {
  allowedRoles: Role[];
};


const PrivateRoutes = ({ allowedRoles }: PrivateRoutesProps) => {
  console.log({allowedRoles})

  return <Outlet />
};

export default PrivateRoutes;
