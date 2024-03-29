import React from "react";
import styled from "styled-components";
import Link from "next/link";

const FooterSection = () => (
  <StyledFooter>
    <div className="footer-content">
      <div className="pages">
        <h4>PAGES</h4>
        <ul>
          <li>
            <Link href="/">
              <a>Home</a>
            </Link>
          </li>
          <li>
            <Link href="/blog">
              <a>Blog</a>
            </Link>
          </li>
          <li>
            <Link href="/projects">
              <a>Projects</a>
            </Link>
          </li>
          <li>
            <Link href="/contact">
              <a>Contact</a>
            </Link>
          </li>
        </ul>
      </div>
      <div className="links">
        <h4>LINKS</h4>
        <ul>
          <li>
            <a
              rel="noreferrer"
              target="_blank"
              href="https://github.com/Arunjoseph3007"
            >
              Github
            </a>
          </li>
          <li>
            <a
              rel="noreferrer"
              target="_blank"
              href="https://www.linkedin.com/in/arun-joseph-4084b1218/"
            >
              LinkedIn
            </a>
          </li>
          <li>
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
      </div>
      <div className="nothing">
        <h4>Made with React and NextJS, hosted on Vercel</h4>
      </div>
    </div>
  </StyledFooter>
);

const StyledFooter = styled.footer`
  z-index: 100;
  padding-top: 5rem;
  backdrop-filter: blur(3px);
  padding-inline: 4rem;
  color: #ffffff;
  background: #44444415;
  min-height: 50vh;
  width: 100%;
  h4 {
    letter-spacing: 0.1rem;
  }
  .footer-content {
    .pages,
    .links {
      width: 22%;
      height: 60%;
    }
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: space-around;
  }
  ul {
    li {
      padding: 0.5rem 0rem;
      list-style: square;
    }
  }
  @media screen and (max-width: 860px) {
    .footer-content {
      width: 100%;
      padding: 3rem 6rem;
      flex-direction: column;
    }
    .pages,
    .links {
      text-align: center;
      font-size: 3rem;
      padding-top: 3rem;
      h4 {
        margin-bottom: 2.5rem;
      }
      ul {
        list-style: none !important;
      }
      li a {
        font-size: 2rem;
      }
      border: none;
    }
    .nothing {
      margin-top: 2rem;
      font-size: 1.4rem;
      text-align: center;
    }
  }
`;

export default FooterSection;
