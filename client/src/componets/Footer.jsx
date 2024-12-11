import { Footer, FooterLinkGroup } from "flowbite-react";
import React from "react";
import { Link } from "react-router-dom";
import {
  BsFacebook,
  BsInstagram,
  BsGithub,
  BsTwitter,
  BsWhatsapp,
} from "react-icons/bs";

export default function FooterCom() {
  return (
    <Footer container className="border border-t-8 border-teal-500">
      <div className=" w-full max-w-7xl mx-auto">
        <div className=" grid  w-full justify-between sm:flex  md: grid-cols-1">
          <div className=" mt-5">
            <Link
              to="/"
              className="self-center whitespace-nowrap text-lg sm:text-xl font-semibold dark:text-white"
            >
              <span className="px-2 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white">
                Sahard's
              </span>
              Blog
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-8 mt-4 sm:grid-cols-3 sm:gap-6">
            <div>
              <Footer.Title title="About" />
              <FooterLinkGroup col>
                <Footer.Link
                  href="'http://google.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Contact Us
                </Footer.Link>
                <Footer.Link
                  href="'https://google.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  We are here for you....
                </Footer.Link>
              </FooterLinkGroup>
            </div>
            <div>
              <Footer.Title title="Follow US" />
              <FooterLinkGroup col>
                <Footer.Link
                  href="'http://google.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Facebook
                </Footer.Link>
                <Footer.Link
                  href="'https://google.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub
                </Footer.Link>
              </FooterLinkGroup>
            </div>
            <div>
              <Footer.Title title="Legal" />
              <FooterLinkGroup col>
                <Footer.Link
                  href="'http://google.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Privacy Policy
                </Footer.Link>
                <Footer.Link
                  href="'https://google.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Terms & Condition
                </Footer.Link>
              </FooterLinkGroup>
            </div>
          </div>
        </div>
        <Footer.Divider />
        <div className="flex gap-6 sm:mt-0 mt-4 ">
          <Footer.Icon href="# " icon={BsFacebook} />
          <Footer.Icon href="# " icon={BsWhatsapp} />
          <Footer.Icon href="# " icon={BsTwitter} />
          <Footer.Icon href="# " icon={BsInstagram} />
          <Footer.Icon href="# " icon={BsGithub} />
        </div>
      </div>
    </Footer>
  );
}
