import style from "./wallet.module.scss";
import { CURRENCY_LIST } from "@/common/currency";
import Currency from "@/components/currency/currency";

const Wallet = () => {
  return (
    <section className={style.wallet}>
      <div className={style.titleContainer}>
        <h2 className={style.title}>Fast buy</h2>
        <h2 className={style.title}>Fast exchange</h2>
      </div>
      <Currency currencyType={CURRENCY_LIST} />
    </section>
  );
};

export default Wallet;
