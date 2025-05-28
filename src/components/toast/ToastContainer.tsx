"use client";

import React from "react";
import { useToastStore } from "@/store/toastStore";

const ToastContainer = () => {
  const toasts = useToastStore((state) => state.toasts);

  return (
    <div className="fixed space-y-2 bottom-4 z-30 px-4 w-full sm:right-4 sm:w-auto">
      {toasts.map((t) => (
        <div
          key={t.id}
          className={`px-4 py-2 rounded shadow text-white animate-slide-up transition-all duration-300
            ${t.type === "success" ? "bg-green-500" : ""}
            ${t.type === "error" ? "bg-red-500" : ""}
            ${t.type === "info" ? "bg-orange-500" : ""}
          `}
        >
          <p dangerouslySetInnerHTML={{ __html: t.message }}></p>
        </div>
      ))}
    </div>
  );
};

export default ToastContainer;
