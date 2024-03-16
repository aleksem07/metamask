"use client";
import Wallet from "@/components/wallet/wallet";
import stylesGlobal from "@/UI/scss/globals.module.scss";
import styles from "./page.module.scss";
import { useState, useEffect } from "react";
import detectEthereumProvider from "@metamask/detect-provider";

const App = () => {
  const [hasProvider, setHasProvider] = useState<boolean | null>(null);

  useEffect(() => {
    const getProvider = async () => {
      const provider = await detectEthereumProvider({ silent: true });
      console.log(provider);
      // transform provider to true or false
      setHasProvider(Boolean(provider));
    };

    getProvider();
  }, []);

  return (
    <section className={styles.container}>
      <h1 className={`${stylesGlobal.visuallyHidden}`}>
        Crypto Wallet - Buy, store, send and swap tokens
      </h1>
      <h2>Injected Provider {hasProvider ? "DOES" : "DOES NOT"} Exist</h2>
      {hasProvider && <button>Connect MetaMask</button>}
      <Wallet />
    </section>
  );
};

export default App;
