"use client";

import { useParams } from "next/navigation";

const SurahDetail = () => {
  const params = useParams();
  const { id } = params;

  return <div>Surah Detail: {id}</div>;
};

export default SurahDetail;
