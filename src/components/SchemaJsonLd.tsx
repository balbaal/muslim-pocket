// https://nextjs.org/docs/app/guides/json-ld

import React from "react";
import Head from "next/head";

interface SchemaProps {
  data: Record<string, string>;
}

const SchemaJsonLd = ({ data }: SchemaProps) => {
  return (
    <Head>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
      />
    </Head>
  );
};

export default SchemaJsonLd;
