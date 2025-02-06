export type ProductInfo = {
  id: number;
  sku: string;
  collection: string | null;
  category: string;
  name: string;
  aliases: string;
  subtitle: string;
  details: string;
  features: {
    dimensions?: string;
    weight?: string;
    material: string;
    color: string;
    water?: string | null;
    overFlow?: string;
    drainageMode?: string;
  };
  configuration?: {
    outlook?: string[];
    watertank?: string[];
    cleaning?: string[];
    seatlid?: string[];
  };
  imgSrc: string;
  imgAlt: string;
  coverSrc: string;
  sketchImg: string[];
  specification: string;
  manual: string;
  install: string;
  linkTo: string;
  unavailable: boolean;
};

export type RefInfo = {
  id: number;
  imgsrc: string[];
  title: string;
  description: string[];
  pagelink: string;
  category: string;
  location: string;
  products: string[];
};

export type BlogInfo = {
  imgsrc: string;
  releaseDate: string;
  title: string;
  location: string;
  content: string[];
  pagelink: string;
};
