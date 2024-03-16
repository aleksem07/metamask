"use client";
import Wallet from "@/components/wallet/wallet";
import stylesGlobal from "@/UI/scss/globals.module.scss";
import styles from "./page.module.scss";
import { useState, useEffect } from "react";
import { formatBalance, formatChainAsNum } from "@/utils/index";
import detectEthereumProvider from "@metamask/detect-provider";

const App = () => {
  const [hasProvider, setHasProvider] = useState<boolean | null>(null);
  const initialState = {
    accounts: [],
    balance: "",
    chainId: "",
  };
  const [wallet, setWallet] = useState(initialState);

  const [isConnecting, setIsConnecting] = useState(false);
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    const refreshAccounts = (accounts: any) => {
      if (accounts.length > 0) {
        updateWallet(accounts);
      } else {
        setWallet(initialState);
      }
    };

    const refreshChain = (chainId: any) => {
      setWallet(wallet => ({ ...wallet, chainId }));
    };

    const getProvider = async () => {
      const provider = await detectEthereumProvider({ silent: true });
      setHasProvider(Boolean(provider));

      if (provider) {
        const accounts = await window.ethereum.request({
          method: "eth_accounts",
        });
        refreshAccounts(accounts);
        window.ethereum.on("accountsChanged", refreshAccounts);
        window.ethereum.on("chainChanged", refreshChain);
      }
    };

    getProvider();
    return () => {
      window.ethereum?.removeListener("accountsChanged", refreshAccounts);
      window.ethereum?.removeListener("chainChanged", refreshChain);
    };
  }, []);

  const updateWallet = async (accounts: any) => {
    const balance = formatBalance(
      await window.ethereum!.request({
        method: "eth_getBalance",
        params: [accounts[0], "latest"],
      })
    );
    const chainId = await window.ethereum!.request({
      method: "eth_chainId",
    });
    setWallet({ accounts, balance, chainId });
  };

  const handleConnect = async () => {
    setIsConnecting(true);
    await window.ethereum
      .request({
        method: "eth_requestAccounts",
      })
      .then((accounts: []) => {
        setError(false);
        updateWallet(accounts);
      })
      .catch((err: any) => {
        setError(true);
        setErrorMessage(err.message);
      });
    setIsConnecting(false);
  };

  const disableConnect = Boolean(wallet) && isConnecting;

  return (
    <section className={styles.container}>
      <h1 className={`${stylesGlobal.visuallyHidden}`}>
        Crypto Wallet - Buy, store, send and swap tokens
      </h1>
      <h2>Injected Provider {hasProvider ? "DOES" : "DOES NOT"} Exist</h2>

      {window.ethereum?.isMetaMask && wallet.accounts.length < 1 && (
        <button disabled={disableConnect} onClick={handleConnect}>
          Connect MetaMask
        </button>
      )}

      {wallet.accounts.length > 0 && (
        <>
          {console.log(wallet)}
          <div>Wallet Accounts: {wallet.accounts[0]}</div>
          <div>Wallet Balance: {wallet.balance}</div>
          <div>Hex ChainId: {wallet.chainId}</div>
          <div>Numeric ChainId: {formatChainAsNum(wallet.chainId)}</div>
        </>
      )}

      {error && (
        <div onClick={() => setError(false)}>
          <strong>Error:</strong> {errorMessage}
        </div>
      )}

      <Wallet
        address={wallet.accounts[0]}
        balance={wallet.balance}
        chain={wallet.chainId}
      />
    </section>
  );
};

export default App;
