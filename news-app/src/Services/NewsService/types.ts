export type NewsArticleType = {
  source: {
    id: string | null;
    name: string;
  };
  author: string;
  title: string;
  description: string;
  url: string;
  urlToImage: string | null;
  publishedAt: string;
  content: string;
};

export type NewsApiResponse = {
  status: string;
  totalResults: number;
  articles: NewsArticleType[];
};
