import React from "react";
import { titleAnim, fadeIn } from "../lookAndFeel/Animations";
import {
  MainSections,
  Hider,
  HandWrittenText,
  BigText,
  SvgContainer,
} from "../lookAndFeel/ReusableStyles";
import PersonSvg from "../../public/person.svg";
import Image from "next/image";

const AboutHead = () => {
  return (
    <MainSections variants={fadeIn} initial="hidden" animate="show" exit="exit">
      <Hider style={{ flex: 1 }}>
        <HandWrittenText>home /</HandWrittenText>
        <BigText variants={titleAnim}>
          I am Arun <br />I 🤍 Learning.
        </BigText>
        <HandWrittenText>Hey, Glad to meet you.</HandWrittenText>
      </Hider>
      <SvgContainer>
        <Image src={PersonSvg} alt="codes-illustration" />
      </SvgContainer>
    </MainSections>
  );
};

export default AboutHead;
