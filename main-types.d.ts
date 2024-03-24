type Children = {
  children: React.ReactNode;
};

interface WalletProviders {
  providers: EIP6963ProviderDetail[];
  provider: EIP1193Provider;
  chain: string;
  balance: string;
  selectedWallet: EIP6963ProviderDetail | undefined;
  userAccount: string;
  onConnect: Function;
}

type WalletProvider = {
  chain: string;
  balance: string;
  selectedWallet: EIP6963ProviderDetail | undefined;
  userAccount: string;
};
