import { FC } from "react";

import Play from "@/assets/icons/play.svg";
import SearchOutline from "@/assets/icons/search-outline.svg";
import MenuOutline from "@/assets/icons/menu-outline.svg";
import CloseOutline from "@/assets/icons/close-outline.svg";

// Update "union type IconName" & "interface IconComponent",
// If you add new Icon SVG on "assets/icons/"

interface IconComponent {
  play: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  "search-outline": React.ComponentType<React.SVGProps<SVGSVGElement>>;
  "menu-outline": React.ComponentType<React.SVGProps<SVGSVGElement>>;
  "close-outline": React.ComponentType<React.SVGProps<SVGSVGElement>>;
}

type IconName = "play" | "search-outline" | "menu-outline" | "close-outline";

type IconProps = {
  name: IconName;
  size?: number;
  className?: string;
};

const icons: IconComponent = {
  play: Play,
  "search-outline": SearchOutline,
  "menu-outline": MenuOutline,
  "close-outline": CloseOutline,
};

const Icon: FC<IconProps> = ({ name, size = 16, className = "" }) => {
  const SVGIcon = icons[name];

  return <SVGIcon className={className} width={size} height={size} aria-hidden="true" />;
};

export default Icon;
