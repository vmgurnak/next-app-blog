import { ERRORS } from '../errors';
import articles from './db.json';

import { delayed } from './delay';

// export function getAllArticles() {
//   return delayed(articles, { timeout: 1500, shouldFail: false });
//   // return delayed(new Error(ERRORS.NOT_FOUND), {
//   //   timeout: 1500,
//   //   shouldFail: true,
//   // });
// }

export function getAllArticles() {
  return delayed(articles, { timeout: 0 });
}

export function getArticleByName(articleName: string) {
  const article = articles.find(
    (x) =>
      x.name.toLocaleLowerCase().trim() ===
      articleName.toLocaleLowerCase().trim()
  );

  if (!article) {
    throw new Error(ERRORS.NOT_FOUND);
  }

  return delayed(article, { timeout: 2000 });
}
