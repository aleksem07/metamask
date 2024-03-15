import Wallet from "@/components/wallet/wallet";
import stylesGlobal from "@/UI/scss/globals.module.scss";
import styles from "./page.module.scss";

const Home = () => {
  return (
    <section className={styles.container}>
      <h1 className={`${stylesGlobal.visuallyHidden}`}>
        Crypto Wallet - Buy, store, send and swap tokens
      </h1>
      <Wallet />
    </section>
  );
};

export default Home;
