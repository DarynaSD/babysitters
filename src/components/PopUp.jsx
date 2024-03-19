import ReactDOM from "react-dom";
import svg from "../img/sprite.svg";

import {
  Backdrop,
  PopUpWindow,
  SvgClose,
} from "./styled/PopUp.styled";

export const PopUp = ({ closePopUp }) => {
  document.body.style.overflow = "hidden";

  const handleClose = (e) => {
    if (
      e.target.dataset.type === "backdrop" ||
      e.target.dataset.type === "close-modal"
    ) {
      document.body.style.overflow = "scroll";
      closePopUp();
    }
  };

  return ReactDOM.createPortal(
    <Backdrop onClick={handleClose} data-type="backdrop">
      <PopUpWindow>
        <SvgClose onClick={handleClose} data-type="close-modal">
          <use href={`${svg}#icon-x`}></use>
        </SvgClose>
        <p>Adding to favorites is only available to logged users.</p>
      </PopUpWindow>
    </Backdrop>,
    document.getElementById("popup")
  );
};
