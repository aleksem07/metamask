import style from "./button-swap.module.scss";
import SwapHorizIcon from "@mui/icons-material/SwapHoriz";

const ButtonSwap = () => {
  return (
    <button className={style.button}>
      <SwapHorizIcon />
    </button>
  );
};

export default ButtonSwap;
