import {
  MainSections,
  Title,
  List,
  SecTitle,
  MarkdownSection,
} from "../../Components/lookAndFeel/ReusableStyles";
import { getAllPostIds, getPostData } from "../../Utils/GetPosts";

function BlogPage({postData: post }) {
  return (
    <>
      <MainSections
        style={{
          background: `url(${post.image})`,
          textShadow: "0 0 30px 10px black",
        }}
      >
        <Title>
          <span>Blog {post.id + 1}</span>
          <br />
          {post.title}
          <b>.</b>
        </Title>
        <p>{post.description}</p>
        <List>
          {post.tags.map((tag, i) => (
            <li key={i}>{tag}</li>
          ))}
        </List>
      </MainSections>
      <MarkdownSection>
        <SecTitle>
          {post.title}
          <b>.</b>
        </SecTitle>
        <div className="write" dangerouslySetInnerHTML={{ __html: post.contentHtml }} />
      </MarkdownSection>
    </>
  );
}

export default BlogPage;

export async function getStaticPaths() {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const postData = await getPostData(params.id);
  return {
    props: {
      postData,
    },
  };
}
