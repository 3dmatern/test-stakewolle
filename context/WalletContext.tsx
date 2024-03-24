"use client";

import {
  useSyncExternalStore,
  useState,
  useEffect,
  createContext,
  useContext,
} from "react";
import { useRouter } from "next/navigation";

import { store } from "@/context/store";

export const WalletContext = createContext({} as WalletProviders);

export default function WalletProvider({ children }: Children) {
  const router = useRouter();
  const providers = useSyncExternalStore(
    store.subscribe,
    store.value,
    store.value
  );
  const [provider, setProvider] = useState({} as EIP1193Provider);
  const [chain, setChain] = useState<string>("");
  const [balance, setBalance] = useState<string>("");
  const [selectedWallet, setSelectedWallet] = useState<EIP6963ProviderDetail>();
  const [userAccount, setUserAccount] = useState<string>("");

  useEffect(() => {
    if (userAccount && selectedWallet) {
      router.push("/wallet");
    }
  }, [userAccount, selectedWallet, router]);

  const updateWallet = (accounts: any) => {
    setUserAccount((prev) => accounts);
  };

  const onGetChainId = async (provider: EIP1193Provider) => {
    const chainId: any = await provider
      .request({ method: "eth_chainId" })
      .catch(console.error);

    setChain((prev) => chainId);
  };

  const onGetBalance = async (provider: EIP1193Provider, account: string) => {
    const balance: any = await provider
      .request({
        method: "eth_getBalance",
        params: [account, "latest"],
      })
      .catch(console.error);

    setBalance((prev) => balance);
  };

  const handleConnect = async (providerWithInfo: EIP6963ProviderDetail) => {
    setProvider((prev) => providerWithInfo.provider);
    onGetChainId(providerWithInfo.provider);

    const accounts: any = await providerWithInfo.provider
      .request({ method: "eth_requestAccounts" })
      .catch(console.error);

    if (accounts?.[0]) {
      onGetBalance(providerWithInfo.provider, accounts?.[0]);
      setSelectedWallet((prev) => providerWithInfo);

      updateWallet(accounts?.[0]);
    }
  };

  return (
    <WalletContext.Provider
      value={{
        providers,
        provider,
        chain,
        balance,
        selectedWallet,
        userAccount,
        onConnect: handleConnect,
      }}
    >
      {children}
    </WalletContext.Provider>
  );
}

export const useSyncProviders = () => useContext(WalletContext);
