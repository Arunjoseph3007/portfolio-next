import styled from "styled-components";
import { MainSections, SecTitle } from "../lookAndFeel/ReusableStyles";
import { AllProjects } from "../../public/Getdata";
import ProjectPanel from "./ProjectPanel";

const ProjectList = () => {
  return (
    <StyledBlogList>
      <SecTitle style={{ marginBottom: "6rem" }}>
        Take a Look<b>.</b>
      </SecTitle>
      <div style={{ display: "block" }}>
        {AllProjects.map((project, i) => (
          <ProjectPanel project={project} index={i} key={i} />
        ))}
      </div>
    </StyledBlogList>
  );
};

const StyledBlogList = styled(MainSections)`
  padding-top: 0rem;
  margin-top: 6rem;
  padding-bottom: 6rem;
  display: block;
  height: auto;
  overflow: visible;
`;

export default ProjectList;
