// https://nextjs.org/docs/app/guides/json-ld

import React from "react";

interface SchemaProps {
  data: Record<string, string>;
}

const SchemaJsonLd = ({ data }: SchemaProps) => {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data).replace(/</g, "\\u003c"),
      }}
    />
  );
};

export default SchemaJsonLd;
