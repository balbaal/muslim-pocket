import { toArabicNumber } from "@/lib/transformString";
import React from "react";
import Icon from "./Icons";

export type OnClickCopyType = (value: string) => void;
export type OnClickShareType = (value: string) => void;

type AyatCardProps = {
  onClickCopy: OnClickCopyType;
  onClickShare: OnClickShareType;
};

const AyatCard: React.FC<AyatCardProps> = ({ onClickCopy, onClickShare }) => {
  return (
    <div className="bg-gray-50 rounded-lg p-4 hover:bg-gray-100 flex flex-col gap-4">
      <p className="text-right text-black font-arabic font-bold text-2xl">
        بِسْمِ اللّٰهِ الرَّحْمٰنِ الرَّحِيْمِ
      </p>
      <em className="text-xs text-black">Dengan nama Allah Yang Maha Pengasih, Maha Penyayang.</em>
      <div className="flex justify-between items-center">
        <div className="flex gap-4 items-center">
          <Icon
            onClick={() => onClickCopy("1")}
            name="copy"
            size={20}
            className="text-gray-600 cursor-pointer"
          />
          <Icon
            onClick={() => onClickShare("1")}
            name="rocket"
            size={20}
            className="text-gray-600 cursor-pointer"
          />
        </div>
        <p className="font-arabic mt-1 text-xl font-bold text-black border border-gray-300 bg-white rounded-full flex items-center justify-center w-8 h-8">
          {toArabicNumber("1")}
        </p>
      </div>
    </div>
  );
};

export default AyatCard;
