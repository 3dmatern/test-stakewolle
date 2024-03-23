"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

import { useSyncProviders } from "@/context/WalletContext";
import { WalletInfo } from "@/components/wallet";

export default function WalletPage() {
  const router = useRouter();
  const { selectedWallet, userAccount } = useSyncProviders();

  useEffect(() => {
    if (!userAccount) {
      router.push("/");
    }
  }, [router, userAccount]);

  return (
    <WalletInfo userAccount={userAccount} selectedWallet={selectedWallet} />
  );
}
