export interface SeoConfig {
  title: string;
  description: string;
  url: string;
  image: string;
  keywords: string[];
}

export const defaultSeoConfig: SeoConfig = {
  title: "Youtube Summarizer with AI - Save Your Time and Catch the Points",
  description:
    "Youtube Summarizer with AI, Save Your Time and Catch the Points!",
  url: "https://dev.com",
  image: "https://dev.com/images/og-image.png",
  keywords: [
    "youtube",
    "summarizer",
    "ai",
    "artificial intelligence",
    "time saving",
    "video summary",
  ],
};
