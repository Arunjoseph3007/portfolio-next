import React from "react";
import BlogHead from "../../Components/blog/BlogHead";
import BlogList from "../../Components/blog/BlogList";
import useScrollToTop from "../../Utils/useScrollToTop";
import { getSortedPostsData } from "../../Utils/GetPosts";

const Blog = ({ allPostsData }) => {
  useScrollToTop();
  return (
    <>
      <BlogHead />
      <BlogList AllPosts={allPostsData} />
    </>
  );
};

export default Blog;

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}
