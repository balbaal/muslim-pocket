"use client";

import React from "react";
import { motion } from "framer-motion";
import { toArabicNumber } from "@/lib/transformString";
import Icon from "./Icons";

export type OnClickCopyType = (event: React.MouseEvent) => void;
export type OnClickShareType = (event: React.MouseEvent) => void;
export type OnClickPinType = (event: React.MouseEvent) => void;

export type AyatCardProps = {
  onClickCopy: OnClickCopyType;
  onClickShare: OnClickShareType;
  onClickPin: OnClickPinType;
  ayatNumber: string;
  arabicText: string;
  translationText: string;
  isCheckpoint: boolean;
};

const AyatCard: React.FC<AyatCardProps> = ({
  onClickCopy,
  onClickShare,
  onClickPin,
  ayatNumber,
  arabicText,
  translationText,
  isCheckpoint,
}) => {
  return (
    <div
      className={`bg-gray-50 rounded-lg p-4 hover:bg-gray-100 flex flex-col gap-4 ${isCheckpoint ? "bg-green-100 border border-green-500 hover:bg-green-100" : ""}`}
    >
      <p className="text-right text-black font-arabic font-bold text-2xl">{arabicText}</p>
      <em className="text-xs text-black">{translationText}</em>
      <div className="flex justify-between items-center">
        <div className="flex gap-4 items-center">
          <motion.button
            aria-label="button-copy"
            whileTap={{ scale: 1.5 }}
            onClick={onClickCopy}
            className="cursor-pointer"
          >
            <Icon name="copy" size={20} className="text-gray-600" />
          </motion.button>
          <motion.button
            aria-label="button-share"
            whileTap={{ scale: 1.5 }}
            onClick={onClickShare}
            className="cursor-pointer"
          >
            <Icon name="rocket" size={20} className="text-gray-600" />
          </motion.button>
          <motion.button
            aria-label="button-pin"
            whileTap={{ scale: 1.5 }}
            onClick={onClickPin}
            className="cursor-pointer"
          >
            <Icon name="pin" size={20} className="text-gray-600 " />
          </motion.button>
        </div>
        <p className="select-none font-arabic mt-1 text-xl font-bold text-black border border-gray-300 bg-white rounded-full flex items-center justify-center w-8 h-8">
          {toArabicNumber(ayatNumber)}
        </p>
      </div>
    </div>
  );
};

export default AyatCard;
