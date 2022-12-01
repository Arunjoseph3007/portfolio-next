import styled from "styled-components";
import { motion } from "framer-motion";

export const Hider = styled.div`
  overflow: hidden;
`;

export const MainSections = styled(motion.div)`
  transition: all 0.3s ease;
  width: 100vw;
  height: 75vh;
  position: relative;
  padding: 0rem 5rem;
  padding-top: 8.5rem;
  overflow-x: hidden;
  color: #dfdfdf;
  @media screen and (max-width: 860px) {
    padding: 0rem 2rem;
    margin-top: 12rem;
  }
`;

export const StyledSvg = styled.svg`
  position: absolute;
  right: 0%;
  top: 20%;
  z-index: 999;
  @media screen and (max-width: 860px) {
    transform: scale(0.6);
    top: 30%;
  }
`;

export const StyledCursor = styled.div`
  height: var(--cursor-height);
  background-color: var(--cursor-bg);
  box-shadow: var(--cursor-box-shadow);
  transform-origin: 0% 0%;
  transition: all 1.5s ease, transform 0.05s ease;
  position: fixed;
  aspect-ratio: 1;
  border-radius: 50%;
  mix-blend-mode: exclusion;
  z-index: 10000;
  pointer-events: none;
`;

export const Line = styled.div`
  height: 4px;
  width: 100%;
  background-color: #dfdfdf;
  margin: 1.9rem 0rem 1.9rem 0rem;
`;

export const Title = styled(motion.h1)`
  overflow: hidden;
  transition: all 0.8s cubic-bezier(0.215, 0.1, 0.355, 1);
  margin-bottom: 1rem;
  display: inline-block;
  font-size: 4.3rem;
  letter-spacing: 0.4rem;
  font-weight: 800;
  text-transform: capitalize;
  background-image: linear-gradient(to right, #23d997, #23d997);
  background-position: bottom left;
  background-repeat: no-repeat;
  background-size: 0% 6px;
  &:hover {
    background-size: 100% 6px;
  }
  span {
    font-size: 1.3rem;
    letter-spacing: 0.2rem;
  }
  b {
    color: #29faad;
  }
`;

export const SecTitle = styled(Title)`
  font-size: 3.5rem;
`;

export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  list-style: none;
  margin-top: 2.5rem;
  li {
    box-sizing: content-box;
    margin-top: 0.5rem;
    margin-right: 0.5rem;
    color: black;
    display: inline-block;
    padding: 0.2rem 0.5rem;
    background-color: #23d997;
  }
`;

export const MarkdownSection = styled(MainSections)`
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 2rem;
  height: auto;
  text-align: justify;
  font-size: 1.3rem;
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    text-align: center;
    margin-block: 1rem;
  }
  .write {
    width: 95%;
    max-width: 1000px;
    display: flex;
    flex-direction: column;
    gap: 2rem;
    & > * {
      line-height: 1.8rem;
      list-style: square;
    }
    color: #23d997;
    line-height: 2rem;
    code {
      padding: 1rem;
      display: block;
      background-color: #111;
    }
  }
`;

export const StyledListItem = styled.div`
  width: 100%;
  max-width: 1050px;
  margin: 3rem;
  border-radius: 5px;
  border: 2px solid grey;
  display: flex;
  justify-content: spaced-between;
  padding: 2rem;
  .link {
    display: block;
    color: #23d997;
    font-size: 1rem;
    letter-spacing: 0.2rem;
    margin-top: 1rem;
    &:hover {
      text-decoration: underline;
    }
  }
  img {
    width: 100%;
    max-width: 300px;
    aspect-ratio: 16/9;
    border-radius: 5px;
    object-fit: contain;
  }
  .info {
    padding: 0 2rem;
    h2 {
      font-size: 2.1rem;
      a {
        text-transform: uppercase;
        letter-spacing: 0.4rem;
      }
    }
    .dotted {
      box-sizing: content-box;
      margin-block: 1rem;
      width: 100%;
      height: 3px;
      border-top: 3px dashed #23d997;
    }
  }
  @media screen and (max-width: 860px) {
    flex-direction: column;
    img {
      margin-bottom: 2rem;
      max-width:1000px;
    }
    .info {
      padding: 0;
    }
  }
`;
