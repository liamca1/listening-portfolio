import ArchiveItemDetail from "../../components/archive/ArchiveItemDetail";
import { fetcher } from "../../lib/api";
import markdownToHtml from "../../lib/markdownToHtml";

function Post({ post, description }) {
  return <ArchiveItemDetail post={post} description={description} />;
}

export async function getServerSideProps({ params }) {
  const { slug } = params;
  const postResponse = await fetcher(
    `${process.env.NEXT_PUBLIC_STRAPI_URL}/posts/${slug}`
  );
  console.log(postResponse);
  const description = await markdownToHtml(
    postResponse.data.attributes.description
  );

  return {
    props: {
      post: postResponse.data,
      description,
    },
  };
}

export default Post;

//     `${process.env.NEXT_PUBLIC_STRAPI_URL}/slugify/slugs/posts/${slug}`
