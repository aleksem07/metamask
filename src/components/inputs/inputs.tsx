import style from "./inputs.module.scss";
import ButtonSwap from "@/components/buttons/button-swap";

const Inputs = ({ className }: { className?: string }) => {
  return (
    <div className={`${style.inputs} ${className ? className : ""}`}>
      <label>
        Amount
        <input type="text" name="name" placeholder="30.00" />
      </label>

      <ButtonSwap />

      <label>
        title
        <input type="email" name="email" placeholder="Email" />
      </label>

      <div className={style.info}>
        <p>1.00BTC = 8 915.00USD</p>
        <p>Source: bank.ru</p>
        <p>Commission 10%</p>
      </div>
    </div>
  );
};

export default Inputs;
