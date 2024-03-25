"use client";

import { useMetaMask } from "@/hooks/useMetaMask";
import { formatChainAsNum } from "@/utils";

import { WalletForm, WalletInfo } from "@/components/wallet";
import { Stack } from "@mui/material";

export default function WalletPage() {
  const { wallet } = useMetaMask();

  return (
    wallet.accounts.length > 0 && (
      <Stack direction="column" gap={1}>
        <WalletInfo
          address={wallet.accounts[0]}
          balanceETH={wallet.balanceETH}
          balanceBNB={wallet.balanceBNB}
          chainId={wallet.chainId}
          numChainId={formatChainAsNum(wallet.chainId)}
        />
        <WalletForm />
      </Stack>
    )
  );
}
