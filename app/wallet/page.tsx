"use client";

import { useMetaMask } from "@/hooks/useMetaMask";
import { formatChainAsNum } from "@/utils";

import { WalletInfo } from "@/components/wallet";

export default function WalletPage() {
  const { wallet } = useMetaMask();

  return (
    wallet.accounts.length > 0 && (
      <WalletInfo
        address={wallet.accounts[0]}
        balanceETH={wallet.balance}
        chainId={wallet.chainId}
        numChainId={formatChainAsNum(wallet.chainId)}
      />
    )
  );
}
