/**
 * Strapi CMS API Client
 * 
 * Connects to the Strapi backend hosted on Strapi Cloud
 * API URL: https://usable-purpose-b78d93dac8.strapiapp.com
 */

const STRAPI_API_URL = process.env.NEXT_PUBLIC_STRAPI_API_URL || 'https://usable-purpose-b78d93dac8.strapiapp.com';
const STRAPI_API_TOKEN = process.env.NEXT_PUBLIC_STRAPI_API_TOKEN || '';

export interface StrapiArticle {
  id: number;
  attributes: {
    title: string;
    content: string;
    excerpt?: string;
    slug: string;
    publishedAt: string;
    createdAt: string;
    updatedAt: string;
    author?: {
      data: {
        attributes: {
          name: string;
        };
      };
    };
    category?: {
      data: {
        attributes: {
          name: string;
          slug: string;
        };
      };
    };
    featuredImage?: {
      data: {
        attributes: {
          url: string;
          alternativeText?: string;
        };
      };
    };
  };
}

export interface StrapiResponse<T> {
  data: T;
  meta?: {
    pagination?: {
      page: number;
      pageSize: number;
      pageCount: number;
      total: number;
    };
  };
}

/**
 * Fetch data from Strapi API
 */
async function fetchStrapi<T>(
  endpoint: string,
  options: RequestInit = {}
): Promise<StrapiResponse<T>> {
  const url = `${STRAPI_API_URL}/api/${endpoint}`;
  
  const headers: HeadersInit = {
    'Content-Type': 'application/json',
    ...(STRAPI_API_TOKEN && { 'Authorization': `Bearer ${STRAPI_API_TOKEN}` }),
    ...options.headers,
  };

  try {
    const response = await fetch(url, {
      ...options,
      headers,
      // Use Next.js revalidation for better performance
      next: { revalidate: 60 }, // Revalidate every 60 seconds
    });

    if (!response.ok) {
      throw new Error(`Strapi API error: ${response.status} ${response.statusText}`);
    }

    return await response.json();
  } catch (error) {
    console.error('Strapi fetch error:', error);
    throw error;
  }
}

/**
 * Get all articles with optional pagination and filtering
 */
export async function getArticles(
  page: number = 1,
  pageSize: number = 10
): Promise<StrapiResponse<StrapiArticle[]>> {
  return fetchStrapi<StrapiArticle[]>(
    `articles?populate=*&pagination[page]=${page}&pagination[pageSize]=${pageSize}&sort=publishedAt:desc`
  );
}

/**
 * Get a single article by slug
 */
export async function getArticleBySlug(
  slug: string
): Promise<StrapiArticle | null> {
  try {
    const response = await fetchStrapi<StrapiArticle[]>(
      `articles?filters[slug][$eq]=${slug}&populate=*`
    );
    return response.data[0] || null;
  } catch (error) {
    console.error(`Error fetching article with slug "${slug}":`, error);
    return null;
  }
}

/**
 * Get a single article by ID
 */
export async function getArticleById(
  id: number
): Promise<StrapiArticle | null> {
  try {
    const response = await fetchStrapi<StrapiArticle>(`articles/${id}?populate=*`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching article with id ${id}:`, error);
    return null;
  }
}

/**
 * Check if Strapi API is configured
 */
export function isStrapiConfigured(): boolean {
  return !!STRAPI_API_URL && !!STRAPI_API_TOKEN;
}

/**
 * Get Strapi image URL
 */
export function getStrapiImageUrl(url: string): string {
  if (!url) return '';
  if (url.startsWith('http')) return url;
  return `${STRAPI_API_URL}${url}`;
}
