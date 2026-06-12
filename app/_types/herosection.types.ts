export type HeroTitleType = {
  before?: string;
  highlight: string;
  after?: string;
};

type BreadCrumbType = {
  name: string;
  link?: string;
};

export type HeroBreadcrumbType = BreadCrumbType[];
