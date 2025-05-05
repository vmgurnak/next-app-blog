import Link from 'next/link';
import { getAllArticles } from './(server)/api';
import { ROUTING } from './routing';
import { AppLink } from './components/app-link';

const ARTICLES_PER_PAGE = 10;

export default async function Home({
  searchParams,
}: {
  searchParams: Record<string, string>;
}) {
  const page = Number.parseInt(searchParams.page ?? 1);
  const allArticles = await getAllArticles();
  const totalPages = Math.ceil(allArticles.length / ARTICLES_PER_PAGE);
  const articles = allArticles.slice(
    (page - 1) * ARTICLES_PER_PAGE,
    page * ARTICLES_PER_PAGE
  );

  const nextPageUrl = {
    search: new URLSearchParams({ page: (page + 1).toString() }).toString(),
  };
  const prevPageUrl = {
    search: new URLSearchParams({ page: (page - 1).toString() }).toString(),
  };

  return (
    <>
      <h1>Blogs, page {page}</h1>
      <ul>
        {articles.map((article) => (
          <li key={article.name}>
            <AppLink href={ROUTING.article(article.name)}>
              {article.header}
            </AppLink>
          </li>
        ))}
      </ul>
      {page > 1 && <AppLink href={prevPageUrl}>Prev</AppLink>}
      {page < totalPages && <AppLink href={nextPageUrl}>Next</AppLink>}
    </>
  );
}
