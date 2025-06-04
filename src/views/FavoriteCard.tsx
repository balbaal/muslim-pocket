"use client";

import React from "react";
import { useFavoriteSurah } from "@/hooks/useFavoriteSurah";
import Link from "next/link";
import Icon from "@/components/Icons";

const FavoriteCard = () => {
  const { favorites } = useFavoriteSurah();

  if (favorites?.length === 0) {
    return (
      <div className="flex gap-2 shadow rounded-lg p-4 bg-gray-100 text-black">
        <Link href="/semua-surah" className="flex items-center justify-between">
          <p>Kamu belum punya Surah favorit 🔥</p>
          <Icon name="arrow-forward" size={20} />
        </Link>
      </div>
    );
  }

  return (
    <div className={`grid grid-cols-${favorites?.length} template gap-2`}>
      {favorites.map((item) => (
        <div
          key={item.number}
          className="flex flex-col rounded-lg bg-gray-100 text-black shadow p-4"
        >
          <Link href={`/surah/${item.number}`} className="flex items-center justify-between">
            <div className="flex flex-col">
              <p className="text-2xl font-arabic font-bold">{item.name}</p>
              <p className="text-sm">
                {item.name_latin} ({item.number})
              </p>
            </div>
            {favorites.length <= 2 && <Icon name="arrow-forward" size={20} />}
          </Link>
        </div>
      ))}
    </div>
  );
};

export default FavoriteCard;
