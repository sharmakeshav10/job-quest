import React from "react";
import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import {
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
} from "@clerk/clerk-react";

const Header = () => {
  return (
    <div>
      <div className="flex items-center justify-between p-4 ">
        <Link>
          <h1 className="text-2xl font-semibold font-serif">JobQuest .</h1>
        </Link>
        {/* <Button>Login</Button> */}

        <SignedOut>
          <SignInButton />
        </SignedOut>
        <SignedIn>
          <UserButton />
        </SignedIn>
      </div>
    </div>
  );
};

export default Header;
