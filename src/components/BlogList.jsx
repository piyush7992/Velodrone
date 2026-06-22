import { Link } from "react-router-dom";
import posts from "../content/blog/posts";

function BlogList() {
  return (
    <section className="container blog-list">
      <h1>Knowledge Center</h1>
      <p>Latest articles, guides, and resources from VeloDrone.</p>
      <ul>
        {posts.map((p) => (
          <li key={p.slug} className="post-card">
            <h2><Link to={`/knowledge/${p.slug}`}>{p.title}</Link></h2>
            <p className="meta">{p.date} — {p.author}</p>
            <p>{p.excerpt}</p>
            <Link to={`/knowledge/${p.slug}`} className="read-more">Read article</Link>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default BlogList;
