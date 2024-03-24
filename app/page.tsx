"use client";

import NextLink from "next/link";
import { Box, Button, Link, Stack } from "@mui/material";

import { formatAddress } from "@/utils";

import { UiCard } from "@/components/ui/UiCard";
import { useMetaMask } from "@/hooks/useMetaMask";

export default function Home() {
  const {
    wallet,
    hasProvider,
    error,
    errorMessage,
    isConnecting,
    connectMetaMask,
  } = useMetaMask();

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: "10px",
      }}
    >
      <UiCard
        title={`Injected Provider ${hasProvider ? "DOES" : "DOES NOT"} Exist`}
        content={
          <Stack direction="column" gap={2}>
            {!hasProvider && (
              <Link
                href="https://metamask.io"
                target="_blank"
                referrerPolicy="no-referrer"
              >
                Install MetaMask
              </Link>
            )}
            {window.ethereum?.isMetaMask && wallet.accounts.length < 1 && (
              <Button
                variant="contained"
                disabled={isConnecting}
                onClick={connectMetaMask}
                sx={{ textAlign: "center" }}
              >
                Connect MetaMask
              </Button>
            )}
            {hasProvider && wallet.accounts.length > 0 && (
              <>
                <Link
                  className="text_link tooltip-bottom"
                  href={`https://etherscan.io/address/${wallet.accounts[0]}`}
                  target="_blank"
                  referrerPolicy="no-referrer"
                  data-tooltip="Open in Block Explorer"
                >
                  {formatAddress(wallet.accounts[0])}
                </Link>
                <Button
                  href="/wallet"
                  LinkComponent={NextLink}
                  variant="contained"
                  sx={{ textAlign: "center" }}
                >
                  Go to Wallet page
                </Button>
              </>
            )}
            {error && (
              <Box color="coral">
                <strong>Error:</strong> {errorMessage}
              </Box>
            )}
          </Stack>
        }
      />
    </Box>
  );
}
