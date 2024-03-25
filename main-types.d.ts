type Children = {
  children: React.ReactNode;
};

interface Window {
  ethereum: any;
}

interface WalletState {
  accounts: any[];
  balanceETH: string;
  balanceBNB: string;
  chainId: string;
}

interface MetaMaskContextData {
  wallet: WalletState;
  hasProvider: boolean | null;
  error: boolean;
  errorMessage: string;
  isConnecting: boolean;
  connectMetaMask: () => void;
  clearError: () => void;
  switchNetwork: (chainId: string) => void;
}

interface WalletInfoProps {
  address: string;
  balanceETH: string;
  balanceBNB: string;
  chainId: string;
  numChainId: number;
}

interface SwitchNetworkProps {
  chainId: string;
  switchNetwork: (chainId: string) => void;
}
