import BlogList from "../components/BlogList";
import SEO from "../components/SEO";

function Knowledge() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Knowledge Center",
    description: "Articles, guides, and resources from VeloDrone to help you understand drone systems.",
  };

  return (
    <>
      <SEO title="Knowledge Center" description="Articles, guides, and resources from VeloDrone" jsonLd={jsonLd} />
      <main>
        <BlogList />
      </main>
    </>
  );
}

export default Knowledge;
