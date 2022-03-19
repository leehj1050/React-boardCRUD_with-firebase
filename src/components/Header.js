import React from "react";
import { Link } from "react-router-dom";
import HeaderContainer from "../styles/headerCss";

export default function Header() {
  return (
    <>
      <HeaderContainer>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/">Post</Link>
          </li>
          <li>
            <Link to="/write">Write</Link>
          </li>
        </ul>
      </HeaderContainer>
    </>
  );
}
