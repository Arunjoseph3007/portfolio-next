import React from "react";
import { List, StyledListItem } from "../lookAndFeel/ReusableStyles";
import Link from "next/link";

const BlogItem = ({ data }) => {
  return (
    <StyledListItem>
      <img src={data.image} alt="blog cover" />
      <div className="info">
        <h2>
          <Link href={`/blog/${data.filename}`}>
            <a>{data.title}</a>
          </Link>
        </h2>
        <div className="dotted"></div>
        <p>{data.description}</p>
        <List>
          {data.tags.map((tag, i) => (
            <li key={i}>{tag}</li>
          ))}
        </List>
      </div>
    </StyledListItem>
  );
};

export default BlogItem;
