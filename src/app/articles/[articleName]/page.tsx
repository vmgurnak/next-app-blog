import { getArticleByName } from '@/app/(server)/api';

export async function generateMetadata({ params }: Params) {
  const { articleName } = params;
  return {
    title: `App Blog | ${articleName}`,
    description: 'App Blog Article Page',
  };
}

const ArticlePage = async ({ params }: Params) => {
  const { articleName } = params;
  const article = await getArticleByName(articleName);

  return (
    <>
      <h1>{article.header}</h1>

      {article.text.map((line, i) => (
        <p key={i}>{line}</p>
      ))}
    </>
  );
};

export default ArticlePage;
