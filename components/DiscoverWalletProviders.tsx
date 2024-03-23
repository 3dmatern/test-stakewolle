import { useState } from "react";
import Image from "next/image";

import { useSyncProviders } from "@/hooks/useSyncProviders";
import { Box, Button, Divider, Typography } from "@mui/material";
import { formatAddress } from "@/utils/formatAddres";

export const DiscoverWalletProviders = () => {
  const [selectedWallet, setSelectedWallet] = useState<EIP6963ProviderDetail>();
  const [userAccount, setUserAccount] = useState<string>("");
  const providers = useSyncProviders();

  const handleConnect = async (providerWithInfo: EIP6963ProviderDetail) => {
    const accounts = await providerWithInfo.provider
      .request({ method: "eth_requestAccounts" })
      .catch(console.error);

    if (accounts?.[0]) {
      setSelectedWallet(providerWithInfo);
      setUserAccount(accounts?.[0]);
    }
  };

  return (
    <Box>
      <Typography variant="h2" component="h2">
        Wallets Detected:
      </Typography>
      <Box>
        {providers?.length > 0 ? (
          providers.map((provider: EIP6963ProviderDetail) => (
            <Button
              key={provider.info.uuid}
              onClick={() => handleConnect(provider)}
            >
              <img src={provider.info.icon} alt={provider.info.name} />
              <Typography variant="body1">{provider.info.name}</Typography>
            </Button>
          ))
        ) : (
          <Typography variant="body1">
            There are no announced providers.
          </Typography>
        )}
      </Box>

      <Divider />

      <Typography variant="h2" component="h2">
        {userAccount ? "" : "No "}Wallet Selected
      </Typography>
      {userAccount && (
        <Box>
          <img
            src={selectedWallet?.info.icon || ""}
            alt={selectedWallet?.info.name || ""}
          />
          <Typography variant="body1">{selectedWallet?.info.name}</Typography>
          <Typography variant="body1">{formatAddress(userAccount)}</Typography>
        </Box>
      )}
    </Box>
  );
};
