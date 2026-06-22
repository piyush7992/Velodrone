import { useParams, Link } from "react-router-dom";
import posts from "../content/blog/posts";
import SEO from "../components/SEO";

function Article() {
  const { slug } = useParams();
  const post = posts.find((p) => p.slug === slug);

  if (!post) {
    return (
      <main className="container">
        <h1>Article not found</h1>
        <p>We couldn't find the article you're looking for.</p>
        <p><Link to="/knowledge">Back to Knowledge Center</Link></p>
      </main>
    );
  }

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    datePublished: post.date,
    author: { "@type": "Person", name: post.author },
  };

  return (
    <>
      <SEO title={post.title} description={post.excerpt} jsonLd={jsonLd} />
      <main className="container post-detail">
        <article>
          <h1>{post.title}</h1>
          <p className="meta">{post.date} — {post.author}</p>
          <div dangerouslySetInnerHTML={{ __html: post.content }} />
        </article>

        <p><Link to="/knowledge">Back to Knowledge Center</Link></p>
      </main>
    </>
  );
}

export default Article;
