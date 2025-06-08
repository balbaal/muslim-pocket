"use client";

import React from "react";
import { useFavoriteSurah } from "@/hooks/useFavoriteSurah";
import Link from "next/link";
import Icon from "@/components/Icons";

const FavoriteCard = () => {
  const { favorites } = useFavoriteSurah();

  if (favorites?.length === 0) {
    return (
      <Link
        href="/semua-surah"
        className="flex items-center justify-between w-full shadow rounded-lg p-4 bg-gray-100 text-black dark:bg-dark-800 dark:text-white"
      >
        <p>Kamu belum punya Surah favorit 🔥</p>
        <Icon name="arrow-forward" size={20} />
      </Link>
    );
  }

  return (
    <div
      className={`grid gap-2 ${
        favorites.length === 1
          ? "grid-cols-1"
          : favorites.length === 2
            ? "grid-cols-2"
            : favorites.length === 3
              ? "grid-cols-3"
              : "grid-cols-4"
      }`}
    >
      {favorites.map((item) => (
        <Link
          key={item.number}
          href={`/surah/${item.number}`}
          className="flex items-center justify-between rounded-lg bg-gray-100 text-black dark:bg-dark-800 dark:text-white shadow p-4"
        >
          <div className="flex flex-col">
            <p className="text-2xl font-arabic font-bold">{item.name}</p>
            <p className="text-sm">
              {item.name_latin} ({item.number})
            </p>
          </div>
          {favorites.length <= 2 && <Icon name="arrow-forward" size={20} />}
        </Link>
      ))}
    </div>
  );
};

export default FavoriteCard;
