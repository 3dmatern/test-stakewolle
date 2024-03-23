"use client";

import { useSyncProviders } from "@/context/WalletContext";

import { DiscoverWalletProviders } from "@/components/DiscoverWalletProviders";

export default function Home() {
  const { providers, onConnect } = useSyncProviders();

  return (
    <DiscoverWalletProviders providers={providers} onConnect={onConnect} />
  );
}
