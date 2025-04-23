import React from "react";
import Container from "./Container";
import Logo from "./Logo";
import HeaderMenu from "./HeaderMenu";
import SearchBar from "./SearchBar";
import Carticon from "./Carticon";
import FavaroiteButton from "./FavaroiteButton";
import SignIn from "./SignIn";
import MobileMenu from "./MobileMenu";
import { currentUser } from "@clerk/nextjs/server";
import { ClerkLoaded, SignedIn, UserButton } from "@clerk/nextjs";

const Header = async () => {
  const user = await currentUser();
  return (
    <header className="bg-white/70 py-5 sticky top-0 z-50 backdrop-blur-md">
      <Container className="flex items-center justify-between text-lightColor">
        <div className="w-auto flex items-center justify-start md:w-1/5 md:gap-0 gap-2.5">
          <MobileMenu />
          <Logo />
        </div>

        <div className="flex-1 flex justify-center">
          <HeaderMenu />
        </div>

        <div className="w-auto flex items-center justify-end gap-5 md:w-1/5">
          <SearchBar />
          <Carticon />
          <FavaroiteButton />
          <ClerkLoaded>
            <SignedIn>
              <UserButton />
            </SignedIn>
            {!user && <SignIn />}
          </ClerkLoaded>
        </div>
      </Container>
    </header>
  );
};

export default Header;
