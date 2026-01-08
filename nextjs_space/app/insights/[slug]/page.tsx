import { getArticleBySlug, getStrapiImageUrl } from '@/lib/strapi';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Calendar, User } from 'lucide-react';

interface ArticlePageProps {
  params: {
    slug: string;
  };
}

export default async function ArticlePage({ params }: ArticlePageProps) {
  const article = await getArticleBySlug(params.slug);

  if (!article || !article.attributes) {
    notFound();
  }

  const { attributes } = article;

  return (
    <div className="container mx-auto px-4 py-16">
      {/* Back Button */}
      <div className="max-w-4xl mx-auto mb-8">
        <Link href="/insights">
          <Button variant="ghost" className="group">
            <ArrowLeft className="mr-2 h-4 w-4 group-hover:-translate-x-1 transition-transform" />
            Back to Insights
          </Button>
        </Link>
      </div>

      {/* Article Header */}
      <article className="max-w-4xl mx-auto">
        {attributes.category?.data?.attributes?.name && (
          <div className="text-sm font-semibold text-primary mb-4">
            {attributes.category.data.attributes.name}
          </div>
        )}
        
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          {attributes.title}
        </h1>

        {/* Article Meta */}
        <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground mb-8 pb-8 border-b">
          {attributes.publishedAt && (
            <div className="flex items-center gap-2">
              <Calendar className="h-4 w-4" />
              <time dateTime={attributes.publishedAt}>
                {new Date(attributes.publishedAt).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                })}
              </time>
            </div>
          )}
          {attributes.author?.data?.attributes?.name && (
            <div className="flex items-center gap-2">
              <User className="h-4 w-4" />
              <span>{attributes.author.data.attributes.name}</span>
            </div>
          )}
        </div>

        {/* Featured Image */}
        {attributes.featuredImage?.data?.attributes?.url && (
          <div className="aspect-video bg-muted relative overflow-hidden rounded-lg mb-12">
            <img
              src={getStrapiImageUrl(attributes.featuredImage.data.attributes.url)}
              alt={attributes.featuredImage.data.attributes.alternativeText || attributes.title}
              className="w-full h-full object-cover"
            />
          </div>
        )}

        {/* Article Content */}
        {attributes.content && (
          <div 
            className="prose prose-lg max-w-none"
            dangerouslySetInnerHTML={{ __html: attributes.content }}
          />
        )}
        {!attributes.content && attributes.description && (
          <div className="prose prose-lg max-w-none">
            <p>{attributes.description}</p>
          </div>
        )}

        {/* Back to Insights CTA */}
        <div className="mt-12 pt-12 border-t">
          <Link href="/insights">
            <Button size="lg" className="group">
              <ArrowLeft className="mr-2 h-4 w-4 group-hover:-translate-x-1 transition-transform" />
              View More Insights
            </Button>
          </Link>
        </div>
      </article>
    </div>
  );
}
