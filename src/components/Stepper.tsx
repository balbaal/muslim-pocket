"use client";

import React from "react";
import Link from "next/link";
import Icon from "./Icons";
import { Step } from "@/types/step";

interface StepperProps {
  steps: Step[];
}

const Stepper = ({ steps = [] }: StepperProps) => {
  if (steps.length === 0) return null;

  return (
    <div className="flex items-center">
      {steps.map((step, index) => {
        const isShowArrow = index < steps.length - 1;

        return (
          <div className="flex items-center text-black text-sm" key={index}>
            <Link href={step.url} className="flex items-center gap-2">
              {step?.icon}
              <span>{step.label}</span>
            </Link>
            {isShowArrow && <Icon name="chevron-forward-outline" className="text-black m-1" />}
          </div>
        );
      })}
    </div>
  );
};

export default Stepper;
