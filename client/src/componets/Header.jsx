import {
  Avatar,
  Button,
  Dropdown,
  DropdownDivider,
  DropdownItem,
  TextInput,
} from "flowbite-react";
// import { useDispatch } from "react-redux";
import { changeTheme } from "../redux/theme/themeSlice";

import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { AiOutlineSearch } from "react-icons/ai";
import { FaMoon, FaSun } from "react-icons/fa";
import { Navbar } from "flowbite-react";
import { useSelector, useDispatch } from "react-redux";
export default function Header() {
  const path = useLocation().pathname;
  const { currentUser } = useSelector((state) => state.user);
  const { theme } = useSelector((state) => state);
  console.log("current user", currentUser);
  console.log("helo");
  const [isImageLoaded, setIsImageLoaded] = useState(false);
  const dispatch = useDispatch();
  useEffect(() => {
    if (currentUser && currentUser.profileimage) {
      const img = new Image();
      img.src = currentUser.profileimage;
      img.onload = () => setIsImageLoaded(true);
    }
  }, [currentUser]);

  return (
    <Navbar className="border-b-2">
      <Link
        to="/"
        className="self-center whitespace-nowrap text-sm sm:text-xl font-semibold dark:text-white"
      >
        <span className="px-2 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white">
          Sahard's
        </span>
        Blog
      </Link>
      <form>
        <TextInput
          type="text"
          placeholder="search...."
          rightIcon={AiOutlineSearch}
          className="hidden lg:inline"
        />
      </form>
      <Button className="w-12 h-10 lg:hidden" color="gray" pill>
        <AiOutlineSearch />
      </Button>
      <div className="flex gap-2 md:order-2 ">
        <Button
          className="
        w-12 h-10 hidden sm:inline"
          color="gray"
          pill
          onClick={() => dispatch(changeTheme())}
        >
          {theme.theme === "dark" ? <FaMoon /> : <FaSun />}
        </Button>

        {currentUser ? (
          <Dropdown
            arrowIcon={false}
            inline
            label={
              isImageLoaded ? (
                <Avatar alt="avatar" img={currentUser.profileimage} rounded />
              ) : (
                <Avatar alt="avatar" rounded /> // Placeholder Avatar
              )
            }
          >
            <Dropdown.Header>
              <span className="block text-sm">@{currentUser.username}</span>
              <span className="block text-sm font-medium truncate">
                {currentUser.email}
              </span>
            </Dropdown.Header>
            <Link to={"/dashboard?tab=profile"}>
              <DropdownItem>Profile</DropdownItem>
            </Link>
            <Dropdown.Divider></Dropdown.Divider>
            <Link>
              <DropdownItem>Sign Out</DropdownItem>
            </Link>
          </Dropdown>
        ) : (
          <>
            <Link to="/sign-in">
              <Button gradientDuoTone="purpleToBlue" outline>
                {" "}
                Sign In
              </Button>
            </Link>
          </>
        )}
        <Navbar.Toggle></Navbar.Toggle>
      </div>
      <Navbar.Collapse>
        <Navbar.Link active={path === "/"} as={"div"}>
          <Link to="/">Home</Link>
        </Navbar.Link>
        <Navbar.Link active={path === "/about"} as={"div"}>
          <Link to="/about">About</Link>
        </Navbar.Link>
        <Navbar.Link active={path === "/project"} as={"div"}>
          <Link to="/project">Projects</Link>
        </Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
}
