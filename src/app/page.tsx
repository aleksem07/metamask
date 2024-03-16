"use client";
import Wallet from "@/components/wallet/wallet";
import stylesGlobal from "@/UI/scss/globals.module.scss";
import styles from "./page.module.scss";
import { useState, useEffect } from "react";
import detectEthereumProvider from "@metamask/detect-provider";

const App = () => {
  const [hasProvider, setHasProvider] = useState<boolean | null>(null);
  const initialState = { accounts: [] };
  const [wallet, setWallet] = useState(initialState);

  useEffect(() => {
    const getProvider = async () => {
      const provider = await detectEthereumProvider({ silent: true });
      console.log(provider);
      setHasProvider(Boolean(provider));
    };

    getProvider();
  }, []);

  const updateWallet = async (accounts: any) => {
    setWallet({ accounts });
  };

  const handleConnect = async () => {
    let accounts = await window.ethereum.request({
      method: "eth_requestAccounts",
    });
    updateWallet(accounts);
  };

  return (
    <section className={styles.container}>
      <h1 className={`${stylesGlobal.visuallyHidden}`}>
        Crypto Wallet - Buy, store, send and swap tokens
      </h1>
      <h2>Injected Provider {hasProvider ? "DOES" : "DOES NOT"} Exist</h2>
      {hasProvider && <button onClick={handleConnect}>Connect MetaMask</button>}

      {wallet.accounts.length > 0 && (
        <div>Wallet Accounts: {wallet.accounts[0]}</div>
      )}

      <Wallet />
    </section>
  );
};

export default App;
