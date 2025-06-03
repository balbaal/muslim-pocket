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
  };
};
