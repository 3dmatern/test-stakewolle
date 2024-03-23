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
  const [selectedWallet, setSelectedWallet] = useState<EIP6963ProviderDetail>();
  const [userAccount, setUserAccount] = useState<string>("");
  // console.log(selectedWallet);

  const handleConnect = async (providerWithInfo: EIP6963ProviderDetail) => {
    const accounts: any = await providerWithInfo.provider
      .request({ method: "eth_requestAccounts" })
      .catch(console.error);

    if (accounts?.[0]) {
      setSelectedWallet(providerWithInfo);
      setUserAccount(accounts?.[0]);
    }
  };

  useEffect(() => {
    if (userAccount && selectedWallet) {
      router.push("/wallet");
    }
  }, [userAccount, selectedWallet, router]);

  return (
    <WalletContext.Provider
      value={{
        providers,
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
