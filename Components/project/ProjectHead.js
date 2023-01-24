import React from "react";
import { titleAnim, fadeIn } from "../lookAndFeel/Animations";
import {
  MainSections,
  Hider,
  HandWrittenText,
  BigText,
  SvgContainer,
} from "../lookAndFeel/ReusableStyles";
import ProjectSvg from "../../public/projects.svg";
import Image from "next/image";

const ProjectHead = () => {
  return (
    <MainSections variants={fadeIn} initial="hidden" animate="show" exit="exit">
      <Hider style={{ flex: 1 }}>
        <HandWrittenText>projects /</HandWrittenText>
        <BigText variants={titleAnim}>
          I Also <br />
          🤍 Building.
        </BigText>
        <HandWrittenText>Hope you like it.</HandWrittenText>
      </Hider>
      <SvgContainer>
        <Image src={ProjectSvg} alt="project-illustration" />
      </SvgContainer>
    </MainSections>
  );
};

export default ProjectHead;
