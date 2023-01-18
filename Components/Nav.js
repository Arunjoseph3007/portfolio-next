import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import styled from "styled-components";
import { useRouter } from "next/router";

const btnStyles = {
  backgroundColor: "transparent",
  border: "none",
  padding: "0rem 2rem",
};

const Nav = () => {
  const router = useRouter();
  const Url = router.pathname;
  const navTab = useRef();

  const handler = () => setIsOpen(false);

  useEffect(handler, [Url]);

  useEffect(() => {
    const listener = (event) => {
      if (!navTab.current || navTab.current.contains(event.target)) {
        return;
      }
      handler(event);
    };
    document.addEventListener("mousedown", listener);
    document.addEventListener("touchstart", listener);
    return () => {
      document.removeEventListener("mousedown", listener);
      document.removeEventListener("touchstart", listener);
    };
  }, [navTab]);

  const [isOpen, setIsOpen] = useState(false);
  return (
    <Navbar>
      <Link href="/">
        <h1 className="logo">
          <span>Arun </span>Joseph
        </h1>
      </Link>
      <button style={btnStyles} onClick={() => setIsOpen(!isOpen)}>
        <svg
          style={{
            transform: `rotate(${isOpen ? "180deg" : "0deg"})`,
            transition: "all 0.3s ease",
          }}
          xmlns="http://www.w3.org/2000/svg"
          height="25"
          width="25"
          viewBox="0 0 20 20"
          fill="white"
        >
          <path
            fillRule="evenodd"
            d="M10.293 15.707a1 1 0 010-1.414L14.586 10l-4.293-4.293a1 1 0 111.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z"
            clipRule="evenodd"
          />
          <path
            fillRule="evenodd"
            d="M4.293 15.707a1 1 0 010-1.414L8.586 10 4.293 5.707a1 1 0 011.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z"
            clipRule="evenodd"
          />
        </svg>
      </button>
      <ul className="nav-container">
        <li className="nav-item">
          <Link href="/" className="nav-link">
            Home
          </Link>
          <div className={`line ${Url === "/" ? "active" : ""}`}></div>
        </li>
        <li className="nav-item">
          <Link href="/blog">
            <a className="nav-link">Blog</a>
          </Link>
          <div className={`line ${Url === "/blog" ? "active" : ""}`}></div>
        </li>
        <li className="nav-item">
          <Link href="/projects">
            <a className="nav-link">Projects</a>
          </Link>
          <div className={`line ${Url === "/projects" ? "active" : ""}`}></div>
        </li>
        <li className="nav-item">
          <Link href="/contact">
            <a className="nav-link">Contact</a>
          </Link>
          <div className={`line ${Url === "/contact" ? "active" : ""}`}></div>
        </li>
      </ul>
      <MobileNavBar ref={navTab} isOpen={isOpen}>
        <li className="nav-item">
          <Link href="/">
            <a className="nav-link">Home</a>
          </Link>
        </li>
        <li className="nav-item">
          <Link href="/blog">
            <a className="nav-link">Blog</a>
          </Link>
        </li>
        <li className="nav-item">
          <Link href="/projects">
            <a className="nav-link">Projects</a>
          </Link>
        </li>
        <li className="nav-item">
          <Link href="/contact">
            <a className="nav-link">Contacts</a>
          </Link>
        </li>
      </MobileNavBar>
    </Navbar>
  );
};

const MobileNavBar = styled.div`
  display: ${(props) => (props.isOpen ? "block" : "none")};
  background-color: black;
  z-index: 99999;
  position: fixed;
  top: 12vh;
  left: 0;
  right: 0;
  list-style: none;
  border-top: 2px solid #bdbdbd;
  &::before {
    content: "";
    position: absolute;
    top: 100%;
    background: linear-gradient(to bottom, black, #00000050);
    width: 100vw;
    height: 100vh;
    pointer-events: none;
  }
  li {
    display: block;
    font-size: 2rem;
    border-bottom: 2px solid #bdbdbd;
    a {
      padding: 1rem;
      display: block;
    }
  }
`;

const Navbar = styled.div`
  width: 100%;
  background-color: #000000;
  color: #fff;
  display: flex;
  align-items: center;
  height: 15vh;
  padding: 0rem 7rem;
  justify-content: space-between;
  position: relative;
  h1 {
    font-weight: bolder;
    text-transform: uppercase;
    letter-spacing: 0.3rem;
    span {
      font-weight: 200;
    }
  }
  .nav-container {
    display: flex;
    list-style: decimal-leading-zero;
    li {
      padding: 1.1rem;
      margin-left: 4rem;
      position: relative;
      .line {
        transition: all 0.4s ease;
        height: 4px;
        background: #fff;
        position: absolute;
        bottom: 7px;
        left: -30px;
        right: 150px;
        &.active {
          right: 10px;
        }
      }
      a {
        font-size: large;
        color: #ffffff;
        text-decoration: none;
      }
    }
  }
  button {
    display: none;
  }
  @media screen and (max-width: 860px) {
    padding: 0rem 3rem;
    .nav-container {
      display: none;
    }
    button {
      display: inline;
    }
  }
`;

export default Nav;
