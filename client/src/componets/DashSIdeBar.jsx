import { Sidebar } from "flowbite-react";
import React from "react";
import { Link, useLocation } from "react-router-dom";
import { HiArrowSmRight, HiUser } from "react-icons/hi";
const DashSIdeBar = () => {
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
    <Sidebar className="w-full md:w-56 " >
      <Sidebar.Items>
        <Sidebar.ItemGroup>
          <Link to="/dashboard?tab=profile">
            <Sidebar.Item
              icon={HiUser}
              active={tab === "profile"}
              label={"User"}
              labelColor="dark"
            >
              Profile
            </Sidebar.Item>
          </Link>
          <Sidebar.Item icon={HiArrowSmRight} ClassName="cursor-pointer">
            Sign Out
          </Sidebar.Item>
        </Sidebar.ItemGroup>
      </Sidebar.Items>
    </Sidebar>
  );
};

export default DashSIdeBar;
