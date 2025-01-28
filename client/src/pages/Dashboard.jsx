import { onLog } from "firebase/app";
import React from "react";
import { useLocation } from "react-router-dom";
import DashSIdeBar from "../componets/DashSIdeBar";
import DashProfile from "../componets/DashProfile";

export default function Dashboard() {
  const location = useLocation();
  const [tab, setTab] = React.useState("");
  React.useEffect(() => {
    const urlParams = new URLSearchParams(location.search);
    const tabUrl = urlParams.get("tab");

    if (tabUrl) {
      setTab(tabUrl);
    }
  }, [location.search]);
  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      {/* Side Bar */}
      <div className="md:w-56">
        <DashSIdeBar />
      </div>
      {/* profile Route ......  */}
      <div className=" ">{tab === "profile" && <DashProfile />}</div>
    </div>
  );
}
