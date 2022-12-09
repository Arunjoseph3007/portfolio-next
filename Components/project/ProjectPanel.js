import React from "react";
import { motion } from "framer-motion";
import { useInViewAnimation } from "../../Utils/useInViewAnimations";
import styled from "styled-components";
import Image from "next/image";

const ProjectPanel = ({ project, index }) => {
  const [headRef, headControl] = useInViewAnimation({ threshold: 0.75 });

  return (
    <StyledProject>
      <motion.div
        className="tab l-tab"
        variants={projectHeadAnim}
        initial="hidden"
        animate={headControl}
        ref={headRef}
      >
        <h1>
          <span>{`0${index + 1}`}</span>
          <br />
          {project.title.split(" ").shift().toUpperCase()}
          <br />
          {project.title.split(" ").slice(1).join(" ").toUpperCase()}
        </h1>
      </motion.div>
      <div className="tab r-tab">
        <div className="head">
          <Image src={project.image} alt="project" />
          <h1>{project.title}</h1>
        </div>
        <p>{project.description}</p>
        <h2>Tech Stack</h2>
        <ul>
          {project?.stack?.map((tag, i) => (
            <li key={i}>{tag}</li>
          ))}
        </ul>
        <a href={project.link} className="link">
          Visit the site here &rarr;
        </a>
        <div className="grid">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div key={i}>
              <Image src={project.image} alt="project" />
            </div>
          ))}
        </div>
      </div>
    </StyledProject>
  );
};

const StyledProject = styled.div`
  display: grid;
  grid: auto / 1fr 1.3fr;
  height: 250vh;
  .l-tab {
    grid-column: 1 / 2;
    align-self: start;
    top: 0px;
    position: sticky;
    background: black;
    z-index: 101;
    h1 {
      font-size: 7rem;
      color: gray;
      padding-top: 2.5rem;
      padding-left: 2rem;
      position: relative;
      span {
        font-size: 14rem;
        color: #23d99730;
        position: absolute;
        top: 0;
        left: 0;
      }
    }
  }
  .r-tab {
    height: 200vh;
    .grid {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
      gap: 0.5rem;

      div {
        position: relative;
        width: 100%;
        border-radius: 5px;
        &::before {
          content: "";
          position: absolute;
          inset: 0;
          background: linear-gradient(to bottom, #00000060, #000000);
          z-index: 99;
        }
        &:hover {
          img {
            transform: scale(1.1);
          }
        }
        img {
          width: 100%;
          transition: all 0.3s ease-out;
        }
      }
      div:nth-child(4) {
        grid-area: 2 / 2 / span 2 / span 2;
        border-radius: 10px;
      }
    }
    .head {
      position: relative;
      &::before {
        content: "";
        position: absolute;
        inset: 0;
        background: linear-gradient(to bottom, transparent, black 80%);
        z-index: 99;
      }
      img {
        height: 300px;
      }
      h1 {
        z-index: 100;
        position: absolute;
        bottom: 10px;
      }
    }
    h2 {
      text-transform: uppercase;
    }
    p {
      margin-block: 1rem;
      letter-spacing: 0.1rem;
      line-height: 1.5rem;
      &:first-letter {
        font-size: 2rem;
        font-weight: bold;
        color: #23d997;
      }
    }
    .link {
      margin-block: 1rem;
      color: #23d997a0;
      letter-spacing: 0.3rem;
      display: block;
    }
    ul {
      list-style: square;
      margin-left: 1.5rem;
      li {
        margin-block: 0.5rem;
      }
    }
  }
  @media screen and (max-width: 860px) {
    grid: auto/1fr;
    gap: 10rem;
    .l-tab {
      &::before {
        content: "";
        position: absolute;
        bottom: -50%;
        left: -5%;
        background: linear-gradient(to bottom, black, transparent);
        width: 100vw;
        height: 50%;
        pointer-events: none;
      }
    }
  }
`;

const projectHeadAnim = {
  hidden: {
    opacity: 0,
  },
  show: {
    opacity: 1,
    transition: {
      duration: 0.3,
    },
  },
};

export default ProjectPanel;
