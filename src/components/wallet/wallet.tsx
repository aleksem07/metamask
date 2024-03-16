import style from "./wallet.module.scss";
import { CRYPTO_LIST, CURRENCY_LIST } from "@/common/currency-lists";
import Currency from "@/components/currency/currency";
import ButtonExchange from "@/components/buttons/button-exchange";
import Inputs from "@/components/inputs/inputs";

const Wallet = ({ balance }: { balance: string }) => {
  return (
    <section className={style.wallet}>
      <div className={style.titleContainer}>
        <button className={style.title}>Fast buy</button>
        <button className={style.title}>Fast exchange</button>
      </div>
      <Currency currencyType={CRYPTO_LIST} className={style.positionCrypto} />
      <Currency
        currencyType={CURRENCY_LIST}
        className={style.positionCurrency}
      />
      <Inputs balance={balance} className={style.positionInputs} />
      <ButtonExchange className={style.positionButtonExchange} />
    </section>
  );
};

export default Wallet;
