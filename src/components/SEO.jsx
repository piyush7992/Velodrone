import { useEffect } from "react";

function SEO({ title, description, url, jsonLd }) {
  useEffect(() => {
    if (title) document.title = title + " | VeloDrone";
    if (description) {
      let meta = document.querySelector('meta[name="description"]');
      if (!meta) {
        meta = document.createElement("meta");
        meta.name = "description";
        document.head.appendChild(meta);
      }
      meta.content = description;
    }

    // Open Graph tags
    if (title) {
      let ogTitle = document.querySelector('meta[property="og:title"]');
      if (!ogTitle) {
        ogTitle = document.createElement('meta');
        ogTitle.setAttribute('property','og:title');
        document.head.appendChild(ogTitle);
      }
      ogTitle.content = title;
    }

    if (description) {
      let ogDesc = document.querySelector('meta[property="og:description"]');
      if (!ogDesc) {
        ogDesc = document.createElement('meta');
        ogDesc.setAttribute('property','og:description');
        document.head.appendChild(ogDesc);
      }
      ogDesc.content = description;
    }

    if (url) {
      let ogUrl = document.querySelector('meta[property="og:url"]');
      if (!ogUrl) {
        ogUrl = document.createElement('meta');
        ogUrl.setAttribute('property','og:url');
        document.head.appendChild(ogUrl);
      }
      ogUrl.content = url;
    }

    if (jsonLd) {
      let script = document.getElementById("ld-json");
      if (!script) {
        script = document.createElement("script");
        script.type = "application/ld+json";
        script.id = "ld-json";
        document.head.appendChild(script);
      }
      script.text = JSON.stringify(jsonLd);
    }

    return () => {
      // cleanup JSON-LD if set by this component
      const script = document.getElementById("ld-json");
      if (script && jsonLd) script.remove();
    };
  }, [title, description, jsonLd]);

  return null;
}

export default SEO;
