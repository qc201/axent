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
    dimensions: string;
    weight: string;
    material: string;
    color: string;
    water: string;
  };
  configuration: {
    outlook: string[];
    watertank: string[];
    cleaning: string[];
    seatlid: string[];
  };
  imgSrc: string;
  imgAlt: string;
  specification: string | null;
  manual: string | null;
};
