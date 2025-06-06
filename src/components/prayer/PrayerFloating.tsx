"use client";

import React, { useCallback } from "react";
import { usePrayerStore } from "@/store/prayerStore";
import Icon from "../Icons";
import Link from "next/link";
import { motion, useAnimation } from "framer-motion";

const PrayerFloating = () => {
  const prayer = usePrayerStore((state) => state.nextPrayer);

  const controls = useAnimation();

  const triggerShake = useCallback(() => {
    controls.start({
      scale: [1, 1.1, 1],
      x: [0, -10, 10, -6, 6, -3, 3, 0],
      transition: { duration: 0.4 },
    });

    if (!!navigator?.vibrate) {
      navigator.vibrate(200);
    }
  }, [controls]);

  return (
    <div className="sticky top-0 z-10 flex justify-center pt-4">
      <Link href="/jadwal-sholat">
        <motion.div
          onTap={triggerShake}
          animate={controls}
          className="min-w-[170px] flex items-center justify-between gap-4 rounded-full bg-orange-100 px-3 py-2 shadow-lg text-orange-500 text-xs"
        >
          <p className="flex gap-1 items-center">
            <Icon name="alarm-outline" size={18} className="text-orange-500" />
            <span className="font-bold">{prayer?.name}</span>
          </p>
          <p className="font-bold">{prayer?.time}</p>
        </motion.div>
      </Link>
    </div>
  );
};

export default PrayerFloating;
