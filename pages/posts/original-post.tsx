import Head from "next/head";
import Layout from "../../components/layout";
import Date from "../../components/date";
import utilStyles from "../../styles/utils.module.css";

export default function Post() {
  return (
    <Layout>
      <Head>
        <title>Canonical Tag Example</title>
      </Head>
      
      <article>
        <h1 className={utilStyles.headingXl}>Canonical Tag Example</h1>
        
        <div className={utilStyles.lightText}>
          <Date dateString={`2022-03-31`} />
        </div>
        
        <div>This post exists on two URLs.</div>
      </article>
    </Layout>
  );
};
