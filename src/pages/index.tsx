import { Header } from 'components/header';

// export async function getStaticProps() {
// Instead of the file system,
// fetch post data from an external API endpoint
// const res = await fetch('..');
// return res.json();

//   const allPostsData = getSortedPostsData();
//   return {
//     props: {
//       allPostsData,
//     },
//   };
// }

export default function Home({ allPostsData }: any) {
  return (
    <>
      <Header />
      {/* <Layout home>
        <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
          <h2 className={utilStyles.headingLg}>Blog</h2>
          <ul className={utilStyles.list}>
            {allPostsData.map(({ id, date, title }: any) => (
              <li className={utilStyles.listItem} key={id}>
                <Link href={`/posts/${id}`}>{title}</Link>
                <br />
                <small className={utilStyles.lightText}>
                  <Date dateString={date} />
                </small>
              </li>
            ))}
          </ul>
        </section>
      </Layout> */}
    </>
  );
}
