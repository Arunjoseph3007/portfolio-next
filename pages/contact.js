import React from "react";
import styled from "styled-components";
import { titleAnim, fadeIn } from "../Components/lookAndFeel/Animations";
import {
  StyledSvg,
  MainSections,
  Title,
  Hider,
} from "../Components/lookAndFeel/ReusableStyles";
import useScrollToTop from "../Utils/useScrollToTop";

const Contact = () => {
  useScrollToTop();
  return (
    <>
      <MainSections
        variants={fadeIn}
        initial="hidden"
        animate="show"
        exit="exit"
      >
        <Hider>
          <Title
            variants={titleAnim}
            initial="hidden"
            animate="show"
            exit="exit"
          >
            <span>
              Hey there<b>,</b>
            </span>
            <br />
            Let s Connect<b>.</b>
          </Title>
        </Hider>
        <h2>
          Alone we can do so litte
          <br /> Together we can do so much.
        </h2>
        <QuotationSvg
          width="375"
          height="242"
          viewBox="0 0 375 242"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M113.6 25.3999C102.4 36.0666 92 48.8666 82.4 63.8C73.3333 78.7333 67.4667 93.6666 64.8 108.6C85.6 108.6 102.933 114.2 116.8 125.4C130.667 136.6 137.6 152.333 137.6 172.6C137.6 192.333 131.2 208.867 118.4 222.2C105.6 235 89.0667 241.4 68.8 241.4C49.0667 241.4 32.8 234.733 20 221.4C7.20001 207.533 0.800007 190.733 0.800007 171C0.800007 137.933 9.06667 106.2 25.6 75.8C42.6667 44.8667 64.2667 20.8667 90.4 3.79999L113.6 25.3999ZM262.181 216.6C273.381 205.933 283.781 193.133 293.381 178.2C302.981 163.267 308.848 148.333 310.981 133.4C290.181 133.4 272.848 127.8 258.981 116.6C245.115 104.867 238.181 89.1333 238.181 69.4C238.181 49.1333 244.581 32.6 257.381 19.8C270.181 6.99998 286.715 0.599981 306.981 0.599981C327.248 0.599981 343.515 7.26664 355.781 20.6C368.581 33.9333 374.981 50.7333 374.981 71C374.981 103.533 366.715 135.267 350.181 166.2C333.648 197.133 312.048 221.133 285.381 238.2L262.181 216.6Z"
            fill="#23D997"
          />
        </QuotationSvg>
      </MainSections>
      <MainSections>
        <ul style={{ listStyle: "none" }}>
          <li>
            <ContactRow>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path
                  d="M0 3v18h24v-18h-24zm22 16l-6.526-6.618-3.445 3.483-3.418-3.525-6.611 6.66 5.051-8-5.051-6 10.029 7.446 9.971-7.446-4.998 6.01 4.998 7.99z"
                  fill="white"
                  stroke="white"
                />
              </svg>
              <p>
                Email - <i>arunjoseph3007@gmail.com</i>
              </p>
            </ContactRow>
          </li>
          <li>
            <ContactRow>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path
                  d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"
                  fill="white"
                  stroke="white"
                />
              </svg>
              <a href="https://github.com/Arunjoseph3007">Github</a>
            </ContactRow>
          </li>
          <li>
            <ContactRow>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path
                  d="M0 0v24h24v-24h-24zm8 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.397-2.586 7-2.777 7 2.476v6.759z"
                  fill="white"
                  stroke="white"
                />
              </svg>
              <a href="https://www.linkedin.com/in/arun-joseph-4084b1218/">
                LinkedIn
              </a>
            </ContactRow>
          </li>
        </ul>
      </MainSections>
    </>
  );
};

const QuotationSvg = styled(StyledSvg)`
  right: 3%;
`;

const ContactRow = styled.h3`
  display: flex;
  gap: 50px;
  align-items: center;
  font-size: 3rem;
  margin-block: 3.4rem;
  svg {
    transform: scale(2);
  }
  i {
    font-weight: light;
  }
`;

export default Contact;
