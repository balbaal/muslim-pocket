"use client";

import React from "react";
import Link from "next/link";
import Icon from "./Icons";
import { Breadcrumb as BreadcrumbType } from "@/types/breadcrumb";

interface BreadcrumbProps {
  breadcrumb: BreadcrumbType[];
}

const Breadcrumb = ({ breadcrumb = [] }: BreadcrumbProps) => {
  if (breadcrumb.length === 0) return null;

  return (
    <div className="flex items-center">
      {breadcrumb.map((item, index) => {
        const isShowArrow = index < breadcrumb.length - 1;
        const isLastBreadcrumb = index === breadcrumb.length - 1;

        return (
          <div className="flex items-center text-black text-sm" key={index}>
            <Link
              href={item.url}
              className={`flex items-center gap-2 ${isLastBreadcrumb ? "underline" : ""}`}
            >
              {item?.icon}
              <span>{item.label}</span>
            </Link>
            {isShowArrow && <Icon name="chevron-forward-outline" className="text-black m-1" />}
          </div>
        );
      })}
    </div>
  );
};

export default Breadcrumb;
