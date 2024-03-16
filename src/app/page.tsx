"use client";
import Wallet from "@/components/wallet/wallet";
import stylesGlobal from "@/UI/scss/globals.module.scss";
import styles from "./page.module.scss";

let injectedProvider = false;

if (typeof window.ethereum !== "undefined") {
  injectedProvider = true;
  console.log(window.ethereum);
}

const isMetaMask = injectedProvider ? window.ethereum.isMetaMask : false;

const App = () => {
  return (
    <section className={styles.container}>
      <h1 className={`${stylesGlobal.visuallyHidden}`}>
        Crypto Wallet - Buy, store, send and swap tokens
      </h1>
      <h2>Injected Provider {injectedProvider ? "DOES" : "DOES NOT"} Exist</h2>
      {isMetaMask && <button>Connect MetaMask</button>}
      <Wallet />
    </section>
  );
};

export default App;
