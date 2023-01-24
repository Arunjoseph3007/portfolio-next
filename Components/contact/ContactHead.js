import React from "react";
import { titleAnim, fadeIn } from "../lookAndFeel/Animations";
import {
  MainSections,
  Hider,
  HandWrittenText,
  BigText,
  SvgContainer,
} from "../lookAndFeel/ReusableStyles";
import ContactSvg from "../../public/contact.svg";
import Image from "next/image";

const ContactHead = () => {
  return (
    <MainSections variants={fadeIn} initial="hidden" animate="show" exit="exit">
      <Hider style={{ flex: 1 }}>
        <HandWrittenText>contact /</HandWrittenText>
        <BigText variants={titleAnim}>
          Want to
          <br />
          know me.
        </BigText>
        <HandWrittenText>Get in touch.</HandWrittenText>
      </Hider>
      <SvgContainer>
        <Image src={ContactSvg} alt="person-with-board" />
      </SvgContainer>
    </MainSections>
  );
};

export default ContactHead;
