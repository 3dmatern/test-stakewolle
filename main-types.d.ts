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
  toAccount: string;
  connectMetaMask: () => void;
  clearError: () => void;
  switchNetwork: (chainId: string) => void;
  onChangeAccount: (value: string) => void;
  sendTransaction: () => void;
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

interface WalletFormProps {
  toAccount: string;
  onChangeAccount: (value: string) => void;
  sendTransaction: () => void;
}
