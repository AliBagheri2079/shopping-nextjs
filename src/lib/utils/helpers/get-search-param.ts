export const getSearchParam = (url: string | URL, name: string) => {
  const { searchParams } = new URL(url);
  return searchParams.get(name);
};
