import Head from "next/head";
import { GetServerSideProps } from "next";
import Layout from "../../components/layout";
import Date from "../../components/date";
import { getPostData } from "../../lib/posts";
import utilStyles from "../../styles/utils.module.css";

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  console.log(query);
  const postData = await getPostData(query.id as string);
  return {
    props: {
      postData,
    },
  };
};

export default function Post({ postData }) {
  return (
    <Layout>
      <Head>
        <title>{postData.title}</title>
      </Head>
      
      <article>
        <h1 className={utilStyles.headingXl}>{postData.title}</h1>
        
        <div className={utilStyles.lightText}>
          <Date dateString={postData.date} />
        </div>
        
        <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
      </article>
    </Layout>
  );
};
