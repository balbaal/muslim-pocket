import { IconName } from "@/components/Icons";

export interface MenuItem {
  href: string;
  target: "_blank" | "_self";
  label: string;
  icon: IconName;
}
