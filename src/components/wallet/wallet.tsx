import style from "./wallet.module.scss";
import { CRYPTO_LIST, CURRENCY_LIST } from "@/common/currency-lists";
import Currency from "@/components/currency/currency";
import ButtonExchange from "@/components/buttons/button-exchange";
import Inputs from "@/components/inputs/inputs";
import { CHAIN } from "@/common/chain";

const Wallet = ({
  address,
  balance,
  chain,
}: {
  address: string;
  balance: string;
  chain: string;
}) => {
  return (
    <section className={style.wallet}>
      <div className={style.titleContainer}>
        <p className={style.title}>Wallet Accounts: {address}</p>
        <p className={style.title}>
          Balance: {balance} {""}
          Chain:{" "}
          {chain === CHAIN.ETH ? "ETH" : chain === CHAIN.BNB ? "BNB" : ""}
        </p>
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
