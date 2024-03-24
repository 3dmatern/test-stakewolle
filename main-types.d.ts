type Children = {
  children: React.ReactNode;
};

interface Window {
  ethereum: any;
}

interface WalletState {
  accounts: any[];
  balance: string;
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
}

interface WalletInfoProps {
  address: string;
  balanceETH: string;
  chainId: string;
  numChainId: number;
}
