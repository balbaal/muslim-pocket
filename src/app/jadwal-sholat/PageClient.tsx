"use client";

import React from "react";
import ListView from "./ListView";
import { usePrayerStore } from "@/store/prayerStore";

const PageClient = () => {
  const timeZone = usePrayerStore((state) => state.timeZone);

  return (
    <div className="flex flex-col gap-6">
      {!!timeZone && (
        <div className="text-gray-400 flex text-sm -mt-6">
          <p className="ml-8">{timeZone}</p>
        </div>
      )}

      <div className="flex flex-col gap-4">
        <ListView />
      </div>
    </div>
  );
};

export default PageClient;
