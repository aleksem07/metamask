import style from "./wallet.module.scss";
import { CRYPTO_LIST, CURRENCY_LIST } from "@/common/currency-lists";
import Currency from "@/components/currency/currency";

const Wallet = () => {
  return (
    <section className={style.wallet}>
      <div className={style.titleContainer}>
        <h2 className={style.title}>Fast buy</h2>
        <h2 className={style.title}>Fast exchange</h2>
      </div>
      <Currency currencyType={CRYPTO_LIST} className={style.positionStart} />
      <Currency currencyType={CURRENCY_LIST} className={style.positionEnd} />
    </section>
  );
};

export default Wallet;
