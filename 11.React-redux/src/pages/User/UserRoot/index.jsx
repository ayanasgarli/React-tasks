import UserNavbar from "../../../components/UserNavbar";
import { Outlet } from "react-router-dom";

const UserRoot = () => {
  return (
    <>
      <UserNavbar />
      <Outlet />
    </>
  );
};

export default UserRoot;
