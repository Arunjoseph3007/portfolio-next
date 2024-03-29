import React from "react";
import { titleAnim, fadeIn } from "../lookAndFeel/Animations";
import {
  MainSections,
  Hider,
  HandWrittenText,
  BigText,
  SvgContainer,
} from "../lookAndFeel/ReusableStyles";
import WritingSvg from "../../public/writing.svg";
import Image from "next/image";

const BlogHead = () => {
  return (
    <MainSections variants={fadeIn} initial="hidden" animate="show" exit="exit">
      <Hider style={{ flex: 1 }}>
        <HandWrittenText>blog /</HandWrittenText>
        <BigText variants={titleAnim}>
          Knowledge <br />
          is power.
        </BigText>
        <HandWrittenText>Have a read.</HandWrittenText>
      </Hider>
      <SvgContainer>
        <Image src={WritingSvg} alt="person-with-board" />
      </SvgContainer>
    </MainSections>
  );
};

export default BlogHead;
