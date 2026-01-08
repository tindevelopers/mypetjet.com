import { getArticles, isStrapiConfigured, getStrapiImageUrl, type StrapiArticle } from '@/lib/strapi';
import Link from 'next/link';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Calendar, ArrowRight } from 'lucide-react';

export const metadata = {
  title: 'Insights & Articles | Pet Jet',
  description: 'Expert insights, industry trends, and thought leadership in pet care business innovation.',
};

export default async function InsightsPage() {
  const isConfigured = isStrapiConfigured();
  
  if (!isConfigured) {
    return (
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl font-bold mb-6">Insights & Articles</h1>
          <Card className="bg-amber-50 border-amber-200">
            <CardHeader>
              <CardTitle className="text-amber-900">CMS Not Configured</CardTitle>
              <CardDescription className="text-amber-700">
                The Strapi CMS is not yet connected. Please configure the API token in your environment variables.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-amber-800 mb-4">
                To connect to the Strapi CMS:
              </p>
              <ol className="text-left text-sm text-amber-800 space-y-2 mb-4">
                <li>1. Visit the Strapi Admin Panel</li>
                <li>2. Navigate to Settings - API Tokens - Create new API Token</li>
                <li>3. Set token type to Read-only</li>
                <li>4. Add NEXT_PUBLIC_STRAPI_API_TOKEN to your environment variables</li>
              </ol>
              <p className="text-xs text-amber-700">
                See .env.example for full configuration details.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }

  let articles: StrapiArticle[] = [];
  let hasError = false;

  try {
    const response = await getArticles(1, 12);
    // Filter out articles without title or slug
    articles = (response.data || []).filter(article => {
      if (!article) return false;
      const attrs = article.attributes || article;
      // Must have both title and slug to be valid
      return attrs.title && attrs.slug;
    });
  } catch (err) {
    hasError = true;
  }

  if (hasError) {
    return (
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl font-bold mb-6">Insights & Articles</h1>
          <Card className="bg-red-50 border-red-200">
            <CardHeader>
              <CardTitle className="text-red-900">Connection Error</CardTitle>
              <CardDescription className="text-red-700">
                Unable to connect to the Strapi CMS. Please check your API configuration.
              </CardDescription>
            </CardHeader>
          </Card>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-4xl mx-auto text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Insights & Articles</h1>
        <p className="text-xl text-muted-foreground">
          Expert insights, industry trends, and thought leadership in pet care business innovation.
        </p>
      </div>

      {!articles || articles.length === 0 ? (
        <Card className="max-w-2xl mx-auto">
          <CardHeader>
            <CardTitle>No Articles Yet</CardTitle>
            <CardDescription>
              We are working on creating valuable content for you. Check back soon!
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground mb-4">
              In the meantime, feel free to explore our services or get in touch with our team.
            </p>
            <div className="flex gap-4">
              <Link href="/services">
                <Button variant="outline">Explore Services</Button>
              </Link>
              <Link href="/contact">
                <Button>Contact Us</Button>
              </Link>
            </div>
          </CardContent>
        </Card>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article) => {
            // Safely access article properties with fallbacks
            const attrs = article?.attributes || article;
            if (!attrs) return null;
            
            // Type assertion to handle both interface and actual API response
            const attrsAny = attrs as any;
            const title = attrsAny.title || '';
            const slug = attrsAny.slug || '';
            const publishedAt = attrsAny.publishedAt || attrsAny.createdAt || new Date().toISOString();
            const excerpt = attrsAny.excerpt || attrsAny.description || '';
            const featuredImage = attrsAny.featuredImage;
            const category = attrsAny.category;
            
            return (
              <Card key={article.id || Math.random()} className="flex flex-col hover:shadow-lg transition-shadow">
                {featuredImage?.data && (
                  <div className="aspect-video bg-muted relative overflow-hidden">
                    <img
                      src={getStrapiImageUrl(featuredImage.data.attributes?.url || featuredImage.data.url || '')}
                      alt={featuredImage.data.attributes?.alternativeText || featuredImage.data.alternativeText || title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                )}
                <CardHeader>
                  {category?.data && (
                    <div className="text-xs font-semibold text-primary mb-2">
                      {category.data.attributes?.name || category.data.name || ''}
                    </div>
                  )}
                  <CardTitle className="line-clamp-2">{title}</CardTitle>
                  <CardDescription className="flex items-center gap-2 text-xs">
                    <Calendar className="h-3 w-3" />
                    {new Date(publishedAt).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric',
                    })}
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex-1">
                  {excerpt && (
                    <p className="text-sm text-muted-foreground line-clamp-3 mb-4">
                      {excerpt}
                    </p>
                  )}
                </CardContent>
                <div className="px-6 pb-6">
                  {slug && (
                    <Link href={`/insights/${slug}`}>
                      <Button variant="ghost" className="w-full group">
                        Read Article
                        <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </Link>
                  )}
                </div>
              </Card>
            );
          })}
        </div>
      )}
    </div>
  );
}
