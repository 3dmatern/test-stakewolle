"use client";

import { useMetaMask } from "@/hooks/useMetaMask";
import { formatChainAsNum } from "@/utils";

import { WalletForm, WalletInfo } from "@/components/wallet";
import { Stack } from "@mui/material";
import { SwitchNetwork } from "@/components/SwitchNetwork";

export default function WalletPage() {
  const { wallet, switchNetwork } = useMetaMask();

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
        <SwitchNetwork chainId={wallet.chainId} switchNetwork={switchNetwork} />
        <WalletForm />
      </Stack>
    )
  );
}
