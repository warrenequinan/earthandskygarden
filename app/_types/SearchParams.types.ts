export type SearchParams = {
  [key: string]: string | string[] | undefined;
};

export type SearchParamsType = Promise<SearchParams>;
