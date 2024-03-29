import React from "react";
import styled from "styled-components";
import BlogItem from "./ListItem";
import { MainSections, SecTitle } from "../lookAndFeel/ReusableStyles";

const BlogList = ({ AllPosts }) => {
  return (
    <StyledBlogList>
      <SecTitle style={{ marginBottom: "6rem" }}>
        You may like this<b>.</b>
      </SecTitle>
      {AllPosts.map((post) => (
        <BlogItem key={post.id} data={post} />
      ))}
    </StyledBlogList>
  );
};
const StyledBlogList = styled(MainSections)`
  height: 200vh;
  padding-top: 0rem;
  margin-top: 6rem;
  padding-bottom: 6rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: auto;
`;

export default BlogList;
