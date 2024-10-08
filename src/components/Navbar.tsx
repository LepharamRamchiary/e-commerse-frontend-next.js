import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <div className="hidden lg:block">
      <div className="container">
        <div className="flex w-fit gap-10 mx-auto font-medium py-4 text-blackish">
          <Link href="/" className="navbar__link relative uppercase">HOMe</Link>
          <Link href="/mens" className="navbar__link relative uppercase">men's</Link>
          <Link href="/womens" className="navbar__link relative uppercase">women's</Link>
          <Link href="/jewelry" className="navbar__link relative uppercase">jewelry</Link>
          <Link href="#" className="navbar__link relative uppercase">perfume</Link>
          <Link href="#" className="navbar__link relative uppercase">blog</Link>
          <Link href="#" className="navbar__link relative uppercase">hot offers</Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
