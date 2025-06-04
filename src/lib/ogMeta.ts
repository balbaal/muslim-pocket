import { Metadata } from "next";

interface Props {
  title: string;
  description: string;
  url: string;
  type: "website" | "article";
  siteName?: string;
}

type createOGMetaType = (data: Props) => Metadata["openGraph"];

export const createOGMeta: createOGMetaType = ({
  title,
  description,
  url,
  type,
  siteName = "Muslim Pocket",
}) => {
  return {
    title,
    description,
    url,
    type,
    siteName,
    images: [
      {
        url: "/og-muslim-pocket-fancy.jpg",
        width: 1200,
        height: 630,
        alt: "Banner Muslim Pocket",
      },
    ],
  };
};
