import { FC } from "react";

import Play from "@/assets/icons/play.svg";

// Update "union type IconName" & object "icons",
// If you add new Icon SVG on "assets/icons/"

type IconName = "play";

type IconProps = {
  name: IconName;
  size?: number;
  className?: string;
};

const icons = {
  play: Play,
};

const Icon: FC<IconProps> = ({ name, size = 16, className = "" }) => {
  const SVGIcon = icons[name];

  return <SVGIcon className={className} width={size} height={size} aria-hidden="true" />;
};

export default Icon;
