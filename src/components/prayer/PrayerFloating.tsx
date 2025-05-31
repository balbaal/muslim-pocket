"use client";

import React from "react";
import { usePrayerStore } from "@/store/prayerStore";
import Icon from "../Icons";

const PrayerFloating = () => {
  const prayer = usePrayerStore((state) => state.nextPrayer);

  return (
    <div className="sticky top-0 z-10 flex justify-center pt-4">
      <div className="w-[170px] flex items-center justify-between gap-4 rounded-full bg-orange-100 px-3 py-2 shadow-lg text-orange-500 text-xs">
        <p className="flex gap-1 items-center">
          <Icon name="alarm-outline" size={18} className="text-orange-500" />
          <span className="font-bold">{prayer?.name}</span>
        </p>
        <p className="font-bold">{prayer?.time}</p>
      </div>
    </div>
  );
};

export default PrayerFloating;
