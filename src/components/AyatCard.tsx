"use client";

import React, { useCallback } from "react";
import { motion, useAnimation } from "framer-motion";
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
  const controlsCopy = useAnimation();
  const controlsShare = useAnimation();
  const controlsPin = useAnimation();
  const triggerAnimationCopy = useCallback(() => {
    controlsCopy.start({
      scale: [1, 1.5, 1],
      transition: { duration: 0.4 },
    });

    if (!!navigator?.vibrate) {
      navigator.vibrate(200);
    }
  }, [controlsCopy]);

  const triggerAnimationShare = useCallback(() => {
    controlsShare.start({
      scale: [1, 1.5, 1],
      transition: { duration: 0.4 },
    });

    if (!!navigator?.vibrate) {
      navigator.vibrate(200);
    }
  }, [controlsShare]);

  const triggerAnimationPin = useCallback(() => {
    controlsPin.start({
      scale: [1, 1.5, 1],
      transition: { duration: 0.4 },
    });

    if (!!navigator?.vibrate) {
      navigator.vibrate(200);
    }
  }, [controlsPin]);

  return (
    <div
      className={`bg-gray-100 dark:bg-dark-800 text-black dark:text-white rounded-lg p-4 flex flex-col gap-4 ${isCheckpoint ? "bg-green-100 dark:bg-green-900 border border-green-500" : ""}`}
    >
      <p className="text-right arabic-text font-bold text-2xl">{arabicText}</p>
      <em className="text-xs">{translationText}</em>
      <div className="flex justify-between items-center">
        <div className="flex gap-4 items-center">
          <motion.button
            aria-label="button-copy"
            animate={controlsCopy}
            onTap={triggerAnimationCopy}
            onClick={onClickCopy}
            className="cursor-pointer"
          >
            <Icon name="copy" size={20} className="text-gray-600 dark:text-white" />
          </motion.button>
          <motion.button
            aria-label="button-share"
            animate={controlsShare}
            onTap={triggerAnimationShare}
            onClick={onClickShare}
            className="cursor-pointer"
          >
            <Icon name="rocket" size={20} className="text-gray-600 dark:text-white" />
          </motion.button>
          <motion.button
            aria-label="button-pin"
            onClick={onClickPin}
            className="cursor-pointer"
            animate={controlsPin}
            onTap={triggerAnimationPin}
          >
            <Icon name="pin" size={20} className="text-gray-600 dark:text-white" />
          </motion.button>
        </div>
        <p
          className={`select-none arabic-text mt-1 text-xl font-bold border border-gray-300 bg-white dark:bg-dark-800 ${isCheckpoint ? "dark:border-0" : ""} rounded-full flex items-center justify-center w-8 h-8`}
        >
          {toArabicNumber(ayatNumber)}
        </p>
      </div>
    </div>
  );
};

export default AyatCard;
