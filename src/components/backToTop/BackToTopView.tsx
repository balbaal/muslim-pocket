import React from "react";
import Icon from "../Icons";

interface Props {
  handleOnClick: () => void;
}

const BackToTopView: React.FC<Props> = ({ handleOnClick }) => {
  return (
    <button onClick={handleOnClick} className="cursor-pointer">
      <Icon name="arrow-forward" size={20} className="text-white -rotate-90" />
    </button>
  );
};

export default BackToTopView;
