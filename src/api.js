const BASE_URL = 'https://picsum.photos/v2/list';

export const fetchArticles = async (page) => {
  const response = await fetch(`${BASE_URL}?page=${page}`);
  const data = await response.json();
  return data;
};
