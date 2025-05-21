import { FC } from "react";

import Play from "@/assets/icons/play.svg";
import SearchOutline from "@/assets/icons/search-outline.svg";

// Update "union type IconName" & "interface IconComponent",
// If you add new Icon SVG on "assets/icons/"

interface IconComponent {
  play: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  "search-outline": React.ComponentType<React.SVGProps<SVGSVGElement>>;
}

type IconName = "play" | "search-outline";

type IconProps = {
  name: IconName;
  size?: number;
  className?: string;
};

const icons: IconComponent = {
  play: Play,
  "search-outline": SearchOutline,
};

const Icon: FC<IconProps> = ({ name, size = 16, className = "" }) => {
  const SVGIcon = icons[name];

  return <SVGIcon className={className} width={size} height={size} aria-hidden="true" />;
};

export default Icon;
