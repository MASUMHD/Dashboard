import SideBar from "./SideBar";
import Dashboard from "./Dashboard";
import { useState } from "react";

const Main = () => {
  const [SideBarToggle, setSideBarToggle] = useState(false);

  return (
    <div>

      <div className="flex">
        <SideBar SideBarToggle={SideBarToggle} />
        <Dashboard SideBarToggle={SideBarToggle} setSideBarToggle={setSideBarToggle} />
      </div>
    </div>
  );
};

export default Main;
