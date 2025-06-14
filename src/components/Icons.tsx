import { FC } from "react";

import Play from "@/assets/icons/play.svg";
import SearchOutline from "@/assets/icons/search-outline.svg";
import MenuOutline from "@/assets/icons/menu-outline.svg";
import CloseOutline from "@/assets/icons/close-outline.svg";
import HomeOutline from "@/assets/icons/home-outline.svg";
import PlanetOutline from "@/assets/icons/planet-outline.svg";
import SettingsOutline from "@/assets/icons/settings-outline.svg";
import AlertCircleOutline from "@/assets/icons/alert-circle-outline.svg";
import ChevronForwardOutline from "@/assets/icons/chevron-forward-outline.svg";
import HeartOutline from "@/assets/icons/heart-outline.svg";
import Heart from "@/assets/icons/heart.svg";
import Copy from "@/assets/icons/copy.svg";
import Rocket from "@/assets/icons/rocket.svg";
import Pin from "@/assets/icons/pin.svg";
import PinOutline from "@/assets/icons/pin-outline.svg";
import Airplane from "@/assets/icons/airplane.svg";
import AirplaneOutline from "@/assets/icons/airplane-outline.svg";
import ArrowForward from "@/assets/icons/arrow-forward.svg";
import CaretForward from "@/assets/icons/caret-forward.svg";
import AlarmOutline from "@/assets/icons/alarm-outline.svg";
import Alarm from "@/assets/icons/alarm.svg";
import ChatBubbleOutline from "@/assets/icons/chatbubble-ellipses-outline.svg";
import InformationCircleOutline from "@/assets/icons/information-circle-outline.svg";
// Update "union type IconName" & "interface IconComponent",
// If you add new Icon SVG on "assets/icons/"

interface IconComponent {
  play: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  "search-outline": React.ComponentType<React.SVGProps<SVGSVGElement>>;
  "menu-outline": React.ComponentType<React.SVGProps<SVGSVGElement>>;
  "close-outline": React.ComponentType<React.SVGProps<SVGSVGElement>>;
  "home-outline": React.ComponentType<React.SVGProps<SVGSVGElement>>;
  "planet-outline": React.ComponentType<React.SVGProps<SVGSVGElement>>;
  "settings-outline": React.ComponentType<React.SVGProps<SVGSVGElement>>;
  "alert-circle-outline": React.ComponentType<React.SVGProps<SVGSVGElement>>;
  "chevron-forward-outline": React.ComponentType<React.SVGProps<SVGSVGElement>>;
  "heart-outline": React.ComponentType<React.SVGProps<SVGSVGElement>>;
  heart: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  copy: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  rocket: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  pin: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  "pin-outline": React.ComponentType<React.SVGProps<SVGSVGElement>>;
  airplane: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  "airplane-outline": React.ComponentType<React.SVGProps<SVGSVGElement>>;
  "arrow-forward": React.ComponentType<React.SVGProps<SVGSVGElement>>;
  "caret-forward": React.ComponentType<React.SVGProps<SVGSVGElement>>;
  "alarm-outline": React.ComponentType<React.SVGProps<SVGSVGElement>>;
  alarm: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  "chat-bubble-outline": React.ComponentType<React.SVGProps<SVGSVGElement>>;
  "information-circle-outline": React.ComponentType<React.SVGProps<SVGSVGElement>>;
}

export type IconName =
  | "play"
  | "search-outline"
  | "menu-outline"
  | "close-outline"
  | "home-outline"
  | "planet-outline"
  | "settings-outline"
  | "alert-circle-outline"
  | "chevron-forward-outline"
  | "heart-outline"
  | "heart"
  | "copy"
  | "rocket"
  | "pin"
  | "pin-outline"
  | "airplane"
  | "airplane-outline"
  | "arrow-forward"
  | "caret-forward"
  | "alarm-outline"
  | "alarm"
  | "chat-bubble-outline"
  | "information-circle-outline";

type IconProps = {
  name: IconName;
  size?: number;
  className?: string;
} & React.SVGProps<SVGSVGElement>; // Added rest props for SVG attributes

const icons: IconComponent = {
  play: Play,
  "search-outline": SearchOutline,
  "menu-outline": MenuOutline,
  "close-outline": CloseOutline,
  "home-outline": HomeOutline,
  "planet-outline": PlanetOutline,
  "settings-outline": SettingsOutline,
  "alert-circle-outline": AlertCircleOutline,
  "chevron-forward-outline": ChevronForwardOutline,
  "heart-outline": HeartOutline,
  heart: Heart,
  copy: Copy,
  rocket: Rocket,
  pin: Pin,
  "pin-outline": PinOutline,
  airplane: Airplane,
  "airplane-outline": AirplaneOutline,
  "arrow-forward": ArrowForward,
  "caret-forward": CaretForward,
  "alarm-outline": AlarmOutline,
  alarm: Alarm,
  "chat-bubble-outline": ChatBubbleOutline,
  "information-circle-outline": InformationCircleOutline,
};

const Icon: FC<IconProps> = ({ name, size = 16, className = "", ...props }) => {
  const SVGIcon = icons[name];

  return <SVGIcon className={className} width={size} height={size} aria-hidden="true" {...props} />;
};

export default Icon;
