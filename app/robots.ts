import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: "*", allow: "/" },

      // OpenAI: разрешаем live-search и обучение (публичное портфолио)
      { userAgent: "GPTBot", allow: "/" },
      { userAgent: "OAI-SearchBot", allow: "/" },
      { userAgent: "ChatGPT-User", allow: "/" },

      // Anthropic: разрешаем live-retrieval и обучение
      { userAgent: "ClaudeBot", allow: "/" },
      { userAgent: "Claude-Web", allow: "/" },
      { userAgent: "anthropic-ai", allow: "/" },

      // Perplexity
      { userAgent: "PerplexityBot", allow: "/" },
      { userAgent: "Perplexity-User", allow: "/" },

      // Google (Gemini training)
      { userAgent: "Google-Extended", allow: "/" },

      // Yandex (приоритет для RU)
      { userAgent: "YandexBot", allow: "/" },
      { userAgent: "YandexImages", allow: "/" },

      // Common Crawl
      { userAgent: "CCBot", allow: "/" },
    ],
    sitemap: "https://yurazlab.ru/sitemap.xml",
    host: "https://yurazlab.ru",
  };
}
