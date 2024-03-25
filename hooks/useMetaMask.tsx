"use client";

import {
  PropsWithChildren,
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";
import { useRouter } from "next/navigation";
import detectEthereumProvider from "@metamask/detect-provider";
import { ethers } from "ethers";

import { formatBalance } from "@/utils";
import { getBNBBalance } from "@/actions/bscScan";

const disconnectedState: WalletState = {
  accounts: [],
  balanceETH: "",
  balanceBNB: "",
  chainId: "",
};

const MetaMaskContext = createContext<MetaMaskContextData>(
  {} as MetaMaskContextData
);

export const MetaMaskContextProvider = ({ children }: PropsWithChildren) => {
  const router = useRouter();
  const [hasProvider, setHasProvider] = useState<boolean | null>(null);
  const [isConnecting, setIsConnecting] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [wallet, setWallet] = useState(disconnectedState);
  const [toAccount, setToAccount] = useState("");

  const clearError = () => setErrorMessage("");

  const getBalance = async (account: string) => {
    return await window.ethereum.request({
      method: "eth_getBalance",
      params: [account, "latest"],
    });
  };

  const _updateWallet = useCallback(async (providedAccounts?: any) => {
    const accounts =
      providedAccounts ||
      (await window.ethereum.request({ method: "eth_accounts" }));

    if (accounts.length === 0) {
      setWallet(disconnectedState);
      return;
    }

    const balanceETH = formatBalance(await getBalance(accounts[0]));
    const bscScan = await getBNBBalance(accounts[0]);
    let balanceBNB = "";

    if (bscScan?.error) {
      setErrorMessage(bscScan.error);
    } else {
      balanceBNB = bscScan.result;
    }

    const chainId = await window.ethereum.request({
      method: "eth_chainId",
    });

    setWallet({ accounts, balanceETH, balanceBNB, chainId });
  }, []);

  const updateWalletAndAccounts = useCallback(
    () => _updateWallet(),
    [_updateWallet]
  );
  const updateWallet = useCallback(
    (accounts: any) => _updateWallet(accounts),
    [_updateWallet]
  );

  useEffect(() => {
    const getProvider = async () => {
      const provider = await detectEthereumProvider({ silent: true });
      setHasProvider(Boolean(provider));

      if (provider) {
        updateWalletAndAccounts();
        window.ethereum.on("accountsChanged", updateWallet);
        window.ethereum.on("chainChanged", updateWalletAndAccounts);
      }
    };

    getProvider();

    return () => {
      window.ethereum?.removeListener("accountsChanged", updateWallet);
      window.ethereum?.removeListener("chainChanged", updateWalletAndAccounts);
    };
  }, [updateWallet, updateWalletAndAccounts]);

  const connectMetaMask = async () => {
    setIsConnecting(true);

    try {
      const accounts = await window.ethereum.request({
        method: "eth_requestAccounts",
      });
      clearError();
      updateWallet(accounts);
      router.push("/wallet");
    } catch (err: any) {
      setErrorMessage(err.message);
    }
    setIsConnecting(false);
  };

  const switchNetwork = async (chainId: string) => {
    await window.ethereum.request({
      method: "wallet_switchEthereumChain",
      params: [{ chainId }],
    });
    router.refresh();
  };

  const handleChangeAccount = (value: string) => {
    setToAccount((prev) => value);
  };

  const sendTransaction = async () => {
    if (toAccount.trim() === "") return;

    await window.ethereum
      .request({
        method: "eth_sendTransaction",
        params: [
          {
            from: wallet.accounts[0],
            to: toAccount,
            value: ethers.parseEther("0.01").toString(16),
          },
        ],
      })
      .then((txHash: any) => {
        setToAccount("");
      })
      .catch((error: any) => console.error(error));
  };

  return (
    <MetaMaskContext.Provider
      value={{
        wallet,
        hasProvider,
        error: !!errorMessage,
        errorMessage,
        isConnecting,
        toAccount,
        connectMetaMask,
        clearError,
        switchNetwork,
        onChangeAccount: handleChangeAccount,
        sendTransaction,
      }}
    >
      {children}
    </MetaMaskContext.Provider>
  );
};

export const useMetaMask = () => {
  const context = useContext(MetaMaskContext);
  if (context === undefined) {
    throw new Error(
      "useMetaMask must be used within a MetaMaskContextProvider"
    );
  }
  return context;
};
