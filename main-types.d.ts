type Children = {
  children: React.ReactNode;
};

interface WalletProviders {
  providers: EIP6963ProviderDetail[];
  selectedWallet: EIP6963ProviderDetail | undefined;
  userAccount: string;
  onConnect: Function;
}

type WalletProviderDiscover = {
  providers: EIP6963ProviderDetail[];
  onConnect: Function;
};

type WalletProvider = {
  selectedWallet: EIP6963ProviderDetail | undefined;
  userAccount: string;
};
