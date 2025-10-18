// https://nextjs.org/docs/app/guides/json-ld

import React from "react";
import { metadataMap } from "@/lib/metadata";
import { WithContext, WebSite } from "schema-dts";

const SchemaJsonLd = () => {
  const jsonLd: WithContext<WebSite> = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    url: "https://muslimpocket.id",
    name: "Muslimpocket.id",
    alternateName: "Muslimpocket.id",
    description: metadataMap.home.description,
    image: "https://muslimpocket.id/icon.png",
    inLanguage: "id",
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
      }}
    />
  );
};

export default SchemaJsonLd;
