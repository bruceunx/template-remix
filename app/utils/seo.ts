import { defaultSeoConfig, type SeoConfig } from "~/contants/seo";

defaultSeoConfig;
export function generateMetaTags(
  config: Partial<SeoConfig> = {}
): Array<{ [key: string]: string }> {
  const seoData = {
    ...defaultSeoConfig,
    ...config,
  };

  const { title, description, url, image, keywords } = seoData;

  return [
    { title },
    { name: "description", content: description },
    {
      name: "keywords",
      content: Array.isArray(keywords) ? keywords.join(", ") : keywords,
    },
    { property: "og:title", content: title },
    { property: "og:description", content: description },
    { property: "og:url", content: url },
    { property: "og:image", content: image },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:title", content: title },
    { name: "twitter:description", content: description },
    { name: "twitter:image", content: image },
  ];
}
