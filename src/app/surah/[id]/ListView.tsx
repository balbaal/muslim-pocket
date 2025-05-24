import React from "react";
import AyatCard from "@/components/AyatCard";
import { OnClickCopyType, OnClickShareType } from "@/components/AyatCard";

const ListView = () => {
  const handleOnClickCopy: OnClickCopyType = (value) => {
    console.log(">>> Handle Copy . . .", value);
  };

  const handleOnClickShare: OnClickShareType = (value) => {
    console.log(">>> Handle Share . . .", value);
  };

  return [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item) => (
    <AyatCard key={item} onClickCopy={handleOnClickCopy} onClickShare={handleOnClickShare} />
  ));
};

export default ListView;
