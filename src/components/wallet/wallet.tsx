import style from "./wallet.module.scss";
import { CRYPTO_LIST, CURRENCY_LIST } from "@/common/currency-lists";
import Currency from "@/components/currency/currency";
import ButtonExchange from "../buttons/exchange";

const Wallet = () => {
  return (
    <section className={style.wallet}>
      <div className={style.titleContainer}>
        <h2 className={style.title}>Fast buy</h2>
        <h2 className={style.title}>Fast exchange</h2>
      </div>
      <Currency currencyType={CRYPTO_LIST} className={style.positionCrypto} />
      <Currency
        currencyType={CURRENCY_LIST}
        className={style.positionCurrency}
      />
      <ButtonExchange className={style.positionButtonExchange} />
    </section>
  );
};

export default Wallet;
